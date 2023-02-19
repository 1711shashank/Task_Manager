import { useState } from "react"
import TaskContext from './TaskContext'


const TaskProvider = (props) => {

    const DataTable = [
        {
            TaskSheet:[
                {
                    id: new Date().getTime(),
                    TaskName:'Task 1',
                    SubTasks: []
                }
            ]
        }
    ];

    const [task, setTask] = useState(DataTable[0].TaskSheet);
    const addNewTask = (newTask) => {
        setTask((preTasks) => [...preTasks, newTask]);
    };
    const taskSheet = {
        tasks: task,
        addNewTask: addNewTask
    };

    return(
        <TaskContext.Provider value={taskSheet}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;