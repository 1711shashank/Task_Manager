import { useState } from "react"
import TaskContext from './TaskContext'

const TaskProvider = (props) => {

    const DataTable =
    {
        TaskSheet: [
            {
                id: new Date().getTime(),
                TaskName: 'Task 1',
                SubTasks: []
            }
        ],
        TimeSheet: [
            {
                id: 55,
                Date: 11,
                TimeSheet: [
                    { id: 1, Topic: 'Topic Heading 1', Description: 'Description' },
                    { id: 2, Topic: 'Topic Heading 2', Description: 'dsfjh' }
                ]
            },
            {
                id: 555,
                Date: 12,
                TimeSheet: [
                    { id: 1, Topic: 'Topic Heading 1', Description: 'Description' },
                    { id: 2, Topic: 'Topic Heading 2', Description: 'Descripsdlkfjstion' },
                    { id: 3, Topic: 'Topic Heading 3', Description: 'wejfkhiuweodkmio' }
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



    return (
        <TaskContext.Provider value={{ tasks, addNewTask, dailyActivities, addNewActivity }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;
