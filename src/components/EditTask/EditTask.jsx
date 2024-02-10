/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import { useDispatch } from "react-redux";
import { editTask } from "../../app/features/tasks/tasksSlice";


const EditTask = ({ isOpen, setIsOpen, task }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    };

    const onSubmit = (data) => {
        dispatch(editTask({ ...data, id: task.id, isCompleted: task.isCompleted}))
        onCancel();
    }


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Edit Task'} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="label">
                        Title
                    </label>
                    <input
                        className="input-field"
                        type="text"
                        id="title"
                        {...register('title')}
                        defaultValue={task.title}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="label">
                        Description
                    </label>
                    <textarea
                        className="input-field"
                        type="text"
                        id="description"
                        {...register('description')}
                        defaultValue={task.description}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="label">
                        Priority
                    </label>
                    <select
                        className="input-field"
                        id="priority"
                        {...register('priority')}
                        defaultValue={task.priority}
                    >
                        <option value="high">
                            High
                        </option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={() => onCancel()}
                        type="button"
                        className="btn btn-danger"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary ">
                        submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditTask;