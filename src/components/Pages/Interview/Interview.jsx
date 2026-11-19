import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Bot,
  Camera,
  CameraOff,
  CheckCircle2,
  Lightbulb,
  Loader2,
  Mic,
  MicOff,
  PhoneOff,
  Play,
  Send,
  Volume2,
  VolumeX,
} from "lucide-react";
import axiosInstance from "../../../lib/axiosInstance";

const Interview = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);
  const speechRef = useRef(null);
  const answerRef = useRef("");
  const mountedRef = useRef(true);
  const listeningRef = useRef(false);

  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [language, setLanguage] = useState("bn");
  const [difficulty, setDifficulty] = useState("medium");
  const [totalQuestions, setTotalQuestions] = useState(5);

  const [interviewId, setInterviewId] = useState(null);
  const [question, setQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const [status, setStatus] = useState("setup");
  const [loading, setLoading] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState("");

  const recognitionSupported =
    typeof window !== "undefined" &&
    Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);

  const updateAnswer = (value) => {
    answerRef.current = value;
    setAnswer(value);
  };

  const stopSpeech = useCallback(() => {
    window.speechSynthesis?.cancel();
    speechRef.current = null;
    setSpeaking(false);
  }, []);

  const stopListening = useCallback(() => {
    listeningRef.current = false;

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        console.error("Recognition stop error:", err);
      }
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }

    setCameraOn(false);
  }, []);

  const startCamera = useCallback(async () => {
    try {
      setError("");

      if (!window.isSecureContext) {
        throw new Error("Camera access requires HTTPS or localhost.");
      }

      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Your browser does not support camera access.");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      if (!mountedRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      streamRef.current = stream;
      setCameraOn(true);
    } catch (err) {
      const messages = {
        NotAllowedError:
          "Camera permission denied. Please allow camera access.",
        NotFoundError: "No camera found on your device.",
        NotReadableError:
          "Camera is already being used by another application.",
        OverconstrainedError: "Camera does not support the requested settings.",
      };

      setError(messages[err.name] || err.message || "Unable to access camera.");

      setCameraOn(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;

      listeningRef.current = false;

      if (recognitionRef.current) {
        recognitionRef.current.abort();
        recognitionRef.current = null;
      }

      window.speechSynthesis?.cancel();

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });

        streamRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const stream = streamRef.current;

    if (status !== "active" || !cameraOn || !video || !stream) {
      return;
    }

    video.srcObject = stream;

    video.play().catch((err) => {
      console.error("Camera playback error:", err);
      setError("Unable to display camera preview.");
    });

    return () => {
      video.pause();
    };
  }, [status, cameraOn]);

  const speakQuestion = useCallback(
    (text, lang = language) => {
      if (!text || !("speechSynthesis" in window)) {
        return;
      }

      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = lang === "bn" ? "bn-BD" : "en-US";
      speech.rate = 0.9;
      speech.pitch = 1;

      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find((voice) =>
        voice.lang.toLowerCase().startsWith(lang),
      );

      if (selectedVoice) {
        speech.voice = selectedVoice;
      }

      speech.onstart = () => setSpeaking(true);
      speech.onend = () => setSpeaking(false);
      speech.onerror = () => setSpeaking(false);

      speechRef.current = speech;
      window.speechSynthesis.speak(speech);
    },
    [language],
  );

  const handleStartInterview = async () => {
    if (!jobRole.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("/interview/start", {
        jobRole: jobRole.trim(),
        language,
        difficulty,
        totalQuestions: Number(totalQuestions),
      });

      const data = response.data.data;
      setInterviewId(data.interviewId);
      setQuestion(data.question);
      setQuestionIndex(data.currentQuestionIndex);
      updateAnswer("");
      setResult(null);
      setStatus("active");

      await startCamera();
      speakQuestion(data.question, data.language);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to start interview");
    } finally {
      setLoading(false);
    }
  };

  const handleStartListening = async () => {
    if (!recognitionSupported) {
      setError(
        "Speech recognition is not supported in this browser. Please use Chrome or type your answer.",
      );
      return;
    }

    if (!micOn || listeningRef.current || status !== "active" || loading) {
      return;
    }

    try {
      setError("");
      stopSpeech();

      if (!window.isSecureContext) {
        throw new Error("Microphone requires HTTPS or localhost.");
      }

      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Microphone access is not supported by this browser.");
      }

      const permissionStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      permissionStream.getTracks().forEach((track) => track.stop());

      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        throw new Error("Speech recognition is unavailable in this browser.");
      }

      const recognition = new SpeechRecognition();

      recognition.lang = language === "bn" ? "bn-BD" : "en-US";
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      let finalized = answerRef.current.trim();

      recognition.onstart = () => {
        listeningRef.current = true;
        setListening(true);
        setError("");
      };

      recognition.onresult = (event) => {
        let finalText = "";
        let interimText = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;

          if (event.results[i].isFinal) {
            finalText += transcript + " ";
          } else {
            interimText += transcript;
          }
        }

        if (finalText.trim()) {
          finalized = [finalized, finalText.trim()].filter(Boolean).join(" ");
        }

        const combined = [finalized, interimText.trim()]
          .filter(Boolean)
          .join(" ");

        answerRef.current = combined;
        setAnswer(combined);
      };

      recognition.onerror = (event) => {
        const errorMessages = {
          "not-allowed": "Please allow microphone permission in your browser.",
          "service-not-allowed": "Speech recognition service is blocked.",
          "audio-capture": "No microphone was detected.",
          "no-speech": "No speech detected. Please try again.",
          network: "Network error. Check your internet connection.",
          "language-not-supported":
            "This language is not supported by your browser.",
          aborted: "Voice recognition was stopped.",
        };

        if (event.error !== "aborted") {
          setError(
            errorMessages[event.error] || `Microphone error: ${event.error}`,
          );
        }
      };

      recognition.onend = () => {
        listeningRef.current = false;
        recognitionRef.current = null;

        if (mountedRef.current) {
          updateAnswer(finalized);
          setListening(false);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      listeningRef.current = false;
      recognitionRef.current = null;
      setListening(false);

      const messages = {
        NotAllowedError:
          "Microphone permission denied. Please allow microphone access.",
        NotFoundError: "No microphone found on your device.",
        NotReadableError: "Microphone is being used by another application.",
        AbortError: "Microphone access was interrupted.",
      };

      setError(
        messages[err.name] || err.message || "Unable to start microphone.",
      );
    }
  };

  const handleSubmitAnswer = async () => {
    if (!interviewId || !answer.trim() || loading || listening) {
      return;
    }

    setLoading(true);
    setError("");
    stopSpeech();

    try {
      const response = await axiosInstance.post(
        `/interview/${interviewId}/answer`,
        {
          answer: answer.trim(),
          questionIndex,
        },
      );

      const data = response.data.data;
      setQuestionIndex(data.currentQuestionIndex);
      updateAnswer("");

      if (data.completed) {
        setQuestion("");
        setStatus("readyToFinish");
      } else {
        setQuestion(data.nextQuestion);
        speakQuestion(data.nextQuestion);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Unable to submit answer");
    } finally {
      setLoading(false);
    }
  };

  const handleFinish = async () => {
    if (!interviewId || loading) return;

    setLoading(true);
    setError("");
    stopSpeech();
    stopListening();

    try {
      const response = await axiosInstance.post(
        `/interview/${interviewId}/finish`,
      );
      setResult(response.data.data);
      setStatus("completed");
      stopCamera();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to evaluate interview");
    } finally {
      setLoading(false);
    }
  };

  const handleEndSession = async () => {
    if (!interviewId || loading) return;

    const confirmed = window.confirm(
      "Are you sure you want to end this interview without a score?",
    );
    if (!confirmed) return;

    setLoading(true);
    setError("");

    try {
      await axiosInstance.patch(`/interview/${interviewId}/cancel`);
      stopSpeech();
      stopListening();
      stopCamera();

      setInterviewId(null);
      setQuestion("");
      setQuestionIndex(0);
      updateAnswer("");
      setResult(null);
      setStatus("setup");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to cancel interview");
    } finally {
      setLoading(false);
    }
  };

  const toggleCamera = async () => {
    if (cameraOn) {
      stopCamera();
    } else {
      await startCamera();
    }
  };

  const toggleMic = () => {
    if (micOn) {
      stopListening();
    }

    setMicOn((prev) => !prev);
  };

  const progress = Math.round((questionIndex / totalQuestions) * 100);

  const inputClass =
    "w-full bg-[#F8F9FD] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E2640] focus:outline-none focus:border-[#6366F1]";

  if (status === "setup") {
    return (
      <div className="min-h-screen bg-[#F8F9FD] flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-2xl p-8 shadow-xs border border-gray-200/80 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#EEF2FF] p-3 rounded-xl">
              <Bot className="text-[#6366F1]" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1E2640]">
                AI Interview Setup
              </h1>
              <p className="text-xs text-gray-500 font-normal">
                Prepare for your next interview
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Job Position
              </label>
              <input
                value={jobRole}
                maxLength={100}
                onChange={(e) => setJobRole(e.target.value)}
                className={inputClass}
                placeholder="Frontend Developer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Interview Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={inputClass}
                >
                  <option value="bn">বাংলা</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className={inputClass}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500">
                Total Questions
              </label>
              <select
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(Number(e.target.value))}
                className={inputClass}
              >
                <option value={3}>3 Questions</option>
                <option value={5}>5 Questions</option>
                <option value={7}>7 Questions</option>
                <option value={10}>10 Questions</option>
              </select>
            </div>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-500 font-medium">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleStartInterview}
            disabled={loading || !jobRole.trim()}
            className="w-full bg-[#6366F1] text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-[#4F46E5] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Play size={18} />
            )}
            {loading ? "Preparing..." : "Start Interview"}
          </button>

          <p className="text-xs text-gray-500 text-center font-normal">
            Camera is optional. Video is not uploaded.
          </p>
        </div>
      </div>
    );
  }

  if (status === "completed" && result) {
    return (
      <div className="min-h-screen bg-[#F8F9FD] p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-xs border border-gray-200/80 space-y-7">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={30} className="text-green-500" />
            <h1 className="text-2xl font-bold text-[#1E2640]">
              Interview Completed
            </h1>
          </div>

          <div className="bg-[#EEF2FF] rounded-2xl text-center p-8 border border-indigo-100">
            <p className="text-sm font-semibold text-[#6366F1]">
              Final Interview Score
            </p>
            <h2 className="text-6xl font-bold text-[#1E2640] mt-3">
              {result.finalScore}
              <span className="text-2xl text-gray-400">/100</span>
            </h2>
            <p className="text-sm text-gray-600 mt-5 leading-relaxed font-normal">
              {result.overallFeedback}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-green-50/70 rounded-2xl p-5 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3">Strengths</h3>
              {result.strengths?.map((item, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-700 mb-2 font-normal"
                >
                  • {item}
                </p>
              ))}
            </div>

            <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-3">
                Areas to Improve
              </h3>
              {result.improvements?.map((item, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-700 mb-2 font-normal"
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#1E2640]">
            Question-wise Evaluation
          </h3>

          <div className="space-y-4">
            {result.answers?.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200/80 rounded-2xl p-5 space-y-3 bg-white"
              >
                <div className="flex justify-between gap-4">
                  <h4 className="text-sm font-bold text-[#1E2640]">
                    {index + 1}. {item.question}
                  </h4>
                  <span className="font-bold text-[#6366F1] whitespace-nowrap">
                    {item.score}/100
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-normal">
                  <strong>Your Answer:</strong> {item.answer}
                </p>
                <p className="text-sm text-gray-600 font-normal">
                  <strong>AI Feedback:</strong> {item.feedback}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setInterviewId(null);
              setResult(null);
              setQuestionIndex(0);
              setStatus("setup");
              setError("");
            }}
            className="bg-[#6366F1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4F46E5] transition-colors"
          >
            Start New Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-4 bg-[#F8F9FD] min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 flex flex-col space-y-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#111827] shadow-lg min-h-[460px] flex items-center justify-center border border-gray-800">
          <div className="text-center px-6 pb-24">
            <div
              className={`w-28 h-28 mx-auto rounded-full bg-[#6366F1]/20 border border-[#818CF8]/30 flex items-center justify-center ${
                speaking ? "animate-pulse" : ""
              }`}
            >
              <Bot size={55} className="text-[#A5B4FC]" />
            </div>
            <h2 className="text-xl font-bold text-white mt-5">
              AI Interviewer
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-normal">
              {speaking
                ? "AI is speaking..."
                : listening
                  ? "Listening to your answer..."
                  : "Ready for your response"}
            </p>
          </div>

          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white border border-white/10">
            {language === "bn" ? "বাংলা" : "English"}
          </div>

          <div className="absolute top-4 right-4 w-28 sm:w-40 aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-gray-800 shadow-md">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={`w-full h-full object-cover scale-x-[-1] ${
                cameraOn ? "block" : "hidden"
              }`}
            />

            {!cameraOn && (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
                <CameraOff size={22} />
                <span className="text-[10px]">Camera Off</span>
              </div>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#6366F1] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                AI INTERVIEWER — QUESTION{" "}
                {Math.min(questionIndex + 1, totalQuestions)}
              </span>
            </div>
            <p className="text-white text-sm font-medium leading-relaxed max-h-28 overflow-y-auto">
              {question || "All questions answered. Ready for evaluation."}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-200/80 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={toggleCamera}
            aria-label="Toggle camera"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
          >
            {cameraOn ? <Camera size={18} /> : <CameraOff size={18} />}
          </button>

          <button
            type="button"
            onClick={toggleMic}
            aria-label="Toggle microphone"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
          >
            {micOn ? <Mic size={18} /> : <MicOff size={18} />}
          </button>

          <button
            type="button"
            onClick={() => {
              if (speaking) {
                stopSpeech();
              } else {
                speakQuestion(question);
              }
            }}
            disabled={!question}
            aria-label="Replay AI question"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-40"
          >
            {speaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <div className="h-6 w-px bg-gray-200" />

          <button
            type="button"
            onClick={handleEndSession}
            disabled={loading}
            className="flex items-center gap-2 bg-[#EF4444] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            <PhoneOff size={16} />
            End Session
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#1E2640]">Your Answer</h3>
            {listening && (
              <span className="text-xs text-red-500 animate-pulse font-semibold">
                Listening...
              </span>
            )}
          </div>

          <textarea
            value={answer}
            onChange={(e) => updateAnswer(e.target.value)}
            disabled={status !== "active" || loading || listening}
            rows={4}
            maxLength={10000}
            placeholder={
              language === "bn"
                ? "মাইক্রোফোন দিয়ে উত্তর দিন অথবা এখানে লিখুন..."
                : "Speak or type your answer..."
            }
            className="w-full bg-[#F8F9FD] border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#6366F1] resize-y text-gray-700"
          />

          {error && (
            <p role="alert" className="text-sm text-red-500 font-medium">
              {error}
            </p>
          )}

          {status === "active" ? (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={listening ? stopListening : handleStartListening}
                disabled={!micOn || loading}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50 ${
                  listening
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-[#EEF2FF] text-[#4F46E5] hover:bg-indigo-100"
                }`}
              >
                {listening ? <MicOff size={17} /> : <Mic size={17} />}
                {listening ? "Stop Listening" : "Speak Answer"}
              </button>

              <button
                type="button"
                onClick={handleSubmitAnswer}
                disabled={loading || listening || !answer.trim()}
                className="flex items-center gap-2 bg-[#6366F1] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#4F46E5] transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 size={17} className="animate-spin" />
                ) : (
                  <Send size={17} />
                )}
                Submit Answer
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              disabled={loading}
              className="bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading && <Loader2 size={17} className="animate-spin" />}
              {loading ? "AI is evaluating..." : "Finish & Get AI Score"}
            </button>
          )}
        </div>
      </div>

      <div className="space-y-6 flex flex-col">
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-gray-200/80 space-y-6 flex-1">
          <div>
            <h3 className="text-base font-bold text-[#1E2640]">
              Live Interview Progress
            </h3>
            <p className="text-[11px] text-gray-500 font-normal">
              Real-time session tracking
            </p>
          </div>

          <div className="bg-[#F8F9FD] rounded-xl p-4 border border-gray-200/60">
            <div className="flex justify-between mb-3 text-sm font-semibold text-[#1E2640]">
              <span>Progress</span>
              <span className="text-[#6366F1]">
                {questionIndex}/{totalQuestions}
              </span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-[#6366F1] h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 font-normal">
              {progress}% Completed
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">
              Interview Details
            </h4>

            {[
              ["Job Role", jobRole],
              ["Difficulty", difficulty],
              ["Language", language === "bn" ? "বাংলা" : "English"],
              ["Camera", cameraOn ? "On" : "Off"],
              ["Microphone", micOn ? "Enabled" : "Disabled"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="text-gray-500 font-normal">{label}</span>
                <span className="font-semibold text-[#1E2640] text-right capitalize">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200/60 space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Question Status
            </h4>

            {Array.from({ length: totalQuestions }, (_, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm font-normal"
              >
                <span className="text-gray-600">Question {index + 1}</span>
                <span
                  className={
                    index < questionIndex
                      ? "text-green-600 font-semibold"
                      : index === questionIndex && status === "active"
                        ? "text-[#6366F1] font-semibold"
                        : "text-gray-400"
                  }
                >
                  {index < questionIndex
                    ? "Answered"
                    : index === questionIndex && status === "active"
                      ? "Current"
                      : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E2640] rounded-2xl p-4 border border-[#2A3454] shadow-sm flex items-start gap-4">
          <div className="bg-white/10 p-2.5 rounded-xl text-[#818CF8] shrink-0">
            <Lightbulb size={18} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#818CF8] uppercase tracking-wider">
              AI Interview Tip
            </span>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 leading-relaxed font-normal">
              Answer clearly, explain your reasoning, and support your answers
              with practical examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
