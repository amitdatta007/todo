import "./Tasks.css";
import Filter from "../../ui/Filter";
import SingleTask from "../SingleTask/SingleTask";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import filterer from "../../utils/filter";

const Tasks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [incompleteTask, setIncompleteTask] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const tasks = useSelector((state) => state.tasks.tasks);
    const { filter, search } = useSelector((state) => state.filters);

    useEffect(() => {
        setIncompleteTask(filterer(tasks.filter((task) => !task.isCompleted), filter))
        setCompletedTasks(filterer(tasks.filter((task) => !!task.isCompleted), filter))
    }, [tasks, filter])


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
                        <h3>Incomplete</h3>
                        <div className="count">{incompleteTask.length}</div>
                    </div>
                    {

                        incompleteTask.filter((task) => task.title.toLowerCase().includes(search.toLowerCase())).map((task) => <SingleTask key={task.id} task={task} />)
                    }
                </div>
                <div className="tasks_by_status">
                    <div className="tasks_info">
                        <h3>Completed</h3>
                        <div className="count">{completedTasks.length}</div>
                    </div>
                    {
                        completedTasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase())).map((task) => <SingleTask key={task.id} task={task} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tasks;