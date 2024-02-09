import "./Tasks.css";
import Filter from "../../ui/Filter";
import SingleTask from "../SingleTask/SingleTask";


const tasks = [
    {
        id: 1,
        title: "hhhhhhhhhhhhhhh",
        description: 'pppppppppppppppp',
        isCompleted: false,
        piority: 'medium'
        
    },
    {
        id: 2,
        title: "hhhhhhhhhhhhhhh",
        description: 'pppppppppppppppp',
        isCompleted: false,
        piority: 'medium'
    },
    {
        id: 3,
        title: "hhhhhhhhhhhhhhh",
        description: 'pppppppppppppppp',
        isCompleted: false,
        piority: 'medium'
    },
]

const Tasks = () => {
    return (
        <section className="tasks-section">
            <h3 className="tasks-count">Total Tasks Count: 0</h3>
            <div className="btn_area">
                <Filter />
                <button className="btn btn-primary">Add Task</button>
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