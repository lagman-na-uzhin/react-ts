import {BoardHeader} from "../../features/boards/components/BoardHeader/BoardHeader";
import {BoardTitle} from "../../features/boards/components/BoardTitle/BoardTitle";
import TaskCard from "../../features/boards/components/TaskCard/TaskCard";
import {Layout} from "../../layouts/Layout";

const HomePage = () => {
    return (
        <Layout>
            <BoardHeader></BoardHeader>
            <BoardTitle icon="namd" name="Name"></BoardTitle>
            <TaskCard taskName="Task Name" taskDescription=" Description task task task task task"></TaskCard>
        </Layout>
    );
};

export default HomePage;