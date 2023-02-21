import React, { useContext } from 'react'
import './TasksBox.css'
import TaskContext from '../Context/TaskContext'
import SubTasksBox from './SubTasksBox'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const TasksBox = () => {

    const taskSheet = useContext(TaskContext);

    const removeTask = (id) => {
        const tempArray = taskSheet.tasks.filter((curEle) => {
            return curEle.id !== id;
        });
        taskSheet.updateTaskList(tempArray);
    }

    return (
        <>
            {taskSheet.tasks.map((item) => (
                <div className='task' key={item.id}>
                    <div className='task__header'>
                        <p className='task__name'> {item.TaskName}</p>
                        <DeleteOutlineIcon onClick={() => removeTask(item.id)} />
                    </div>
                    <div className='task__subtask'>
                        <SubTasksBox />
                    </div>
                </div>
            ))}
        </>
    )
}

export default TasksBox;
