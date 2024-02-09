/* eslint-disable react/prop-types */
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import './SingleTask.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../app/features/tasks/tasksSlice';

const SingleTask = ({ task }) => {
    const { id,  title, description } = task;

    const dispatch = useDispatch();

    return (
        <div className='single-task'>
            <h3 className="title">{title}</h3>
            <p className='description'>{description}</p>
            <div className='btn_area mt-4'>
                <div className='flex gap-4'>
                    <button>
                        <PencilSquareIcon className='text-primary h-9 w-9' />
                    </button>
                    <button onClick={() => dispatch(deleteTask(id))}>
                        <TrashIcon className='text-red-500 h-9 w-9' />
                    </button>
                </div>

                <button className='btn btn-primary'>Complete Task</button>
            </div>
        </div>
    );
};

export default SingleTask;