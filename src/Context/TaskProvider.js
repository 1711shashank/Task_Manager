import { useState } from "react"
import TaskContext from './TaskContext'

const TaskProvider = (props) => {
    
    const DataTable = 
        {
            TaskSheet:[
                {
                    id: new Date().getTime(),
                    TaskName:'Task 1',
                    SubTasks: []
                }
            ],
            TimeSheet:[
                {
                    id: new Date().getTime(),
                    Date: new Date().getDate(),
                    TimeSheet: [
                        { id: 1, Topic: 'Topic Heading 1', Description: 'Description' },
                        { id: 2, Topic: 'Topic Heading 2', Description: '' }
                    ]
                }
            ]
        };
    
    const [tasks, setTasks] = useState(DataTable.TaskSheet);
    const [dailyActivities, setDailyActivities] = useState(DataTable.TimeSheet);

    const addNewTask = (newEntry) => {
        setTasks((preEntry) => [...preEntry, newEntry]);
    };
    const addNewActivity = (newEntry) => {
        setDailyActivities((preEntry) => [...preEntry, newEntry]);
    };



    return(
        <TaskContext.Provider value={{tasks, addNewTask, dailyActivities, addNewActivity}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;