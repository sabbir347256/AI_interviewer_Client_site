import DashBoardFooter from "./DashBoardFooter";
import DashboardHeroPart from "./DashboardHeroPart";
import FeatureCard from "./FeatureCard";
import InterviewDashboard from "./InterviewDashboard";
import WorkMapScore from "./WorkMapScore";

const DashBoardroot = () => {
    return (
        <div>
            <DashboardHeroPart></DashboardHeroPart>
            <InterviewDashboard></InterviewDashboard>
            <WorkMapScore></WorkMapScore>
            <FeatureCard></FeatureCard>
            <DashBoardFooter></DashBoardFooter>
        </div>
    );
};

export default DashBoardroot;