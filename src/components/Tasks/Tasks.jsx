import "./Tasks.css";
import Filter from "../../ui/Filter";
import SingleTask from "../SingleTask/SingleTask";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddTask from "../AddTask/AddTask";

const Tasks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <section className="tasks-section">
            <h3 className="tasks-count">Total Tasks Count: {tasks.length}</h3>
            <div className="btn_area">
                <Filter />
                <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>Add Task</button>
                <AddTask isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="tasks">
                <div className="tasks_by_status">
                    <div className="tasks_info">
                        <h3>Incompleted</h3>
                        <div className="count">0</div>
                    </div>
                    {
                        tasks.map((task) => <SingleTask key={task.id} task={task} />)
                    }
                </div>
                <div className="tasks_by_status">
                    <div className="tasks_info">
                        <h3>Completed</h3>
                        <div className="count">0</div>
                    </div>
                    {
                        tasks.map((task) => <SingleTask key={task.id} task={task} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tasks;