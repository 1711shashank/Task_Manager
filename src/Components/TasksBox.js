import React, { useContext } from 'react'
import './TasksBox.css'
import TaskContext from '../Context/TaskContext'
import SubTasksBox from './SubTasksBox'

const TasksBox = () => {

    const Taskctx = useContext(TaskContext);
    console.log("TaskBox", Taskctx.tasks);

    return (
        <>
            {Taskctx.tasks.map( (item) => (
                <div className='task' key={item.id}>
                     <div className='task__header'>
                             <p className='task__name'> {item.TaskName}</p>
                         </div>
                         <div className='task__subtask'>
                             <SubTasksBox SubTask={item} />
                         </div>


                </div>
                
            ))}

        </>
    )
}

export default TasksBox;



// {/* {tasks.map((Task) => (
//                     <div className='task' key={Task.id}>
//                         <div className='task__header'>
//                             <p className='task__name'> {Task.TaskName}</p>
//                             <p className='task__completed'> {Task.SubTasksFinished}/{Task.SubTasksTotal} </p>
//                         </div>
//                         <div bclassName='task__subtask'>
//                             <SubTasksBox SubTask={Task} changeDataTable={updateDataTable}/>
//                         </div>
//                     </div>
//                 ))} */}