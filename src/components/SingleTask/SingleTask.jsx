/* eslint-disable react/prop-types */
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import './SingleTask.css';
import { useDispatch } from 'react-redux';
import { changeStatus, deleteTask } from '../../app/features/tasks/tasksSlice';
import { useState } from 'react';
import EditTask from '../EditTask/EditTask';

const SingleTask = ({ task }) => {
    const { id, title, description, priority, isCompleted } = task;
    const [ isOpen, setIsOpen ] = useState(false);

    const dispatch = useDispatch();

    const getPriorityClr = (priority) => {
        switch (priority) {
            case 'high':
                return "text-red-500";
            case 'medium':
                return "text-yellow-500";
            case 'low':
                return "text-green-500";
            default:
                return "text-secondary";
        }
    }

    return (
        <div className='single-task'>
            <h3 className={`title ${getPriorityClr(priority)}`}>{title}</h3>
            <p className='description'>{description}</p>
            <div className='btn_area mt-4'>
                <div className='flex gap-4'>
                    <button onClick={() => setIsOpen(() => !isOpen)}>
                        <PencilSquareIcon className='text-primary h-9 w-9' />
                        <EditTask isOpen={isOpen} setIsOpen={setIsOpen} task={task} />
                    </button>
                    <button onClick={() => dispatch(deleteTask(id))}>
                        <TrashIcon className='text-red-500 h-9 w-9' />
                    </button>
                </div>

                {!isCompleted && <button className='btn btn-primary' onClick={() => dispatch(changeStatus(id))}>Complete Task</button>}
            </div>
        </div>
    );
};

export default SingleTask;