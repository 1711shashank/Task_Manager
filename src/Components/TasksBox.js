import React, { useContext } from 'react'
import './TasksBox.css'
import SubTasksBox from './SubTasksBox'
import PopUpMenu from '../Modal/PopUpMenu';
import TaskContext from '../Context/TaskContext';


const TasksBox = () => {

    const { taskSheet } = useContext(TaskContext);

    return (
        <>
            {taskSheet.map((item) => (
                <div className='task' key={item._id}>
                    <div className='task__header'>
                        <p className='task__name'> {item.TaskName}</p>
                        <PopUpMenu id1={item._id} taskName={item.TaskName} modalName="Edit_TaskModal" />
                    </div>

                    <div className='task__subtask'>

                        <SubTasksBox taskId={item._id} subTasks={item.SubTasks} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default TasksBox;
