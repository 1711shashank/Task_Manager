import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import TaskContext from './Context/TaskContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    const [taskSheet, setTaskSheet] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:5000/getTask`)
            .then((res) => {
                setTaskSheet(res.data.taskSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }


    const addTask = () => {
        const newEntry = { email:"test1@gmail.com", taskName: 'New Task', subTasks: [] };

        axios.post(`http://localhost:5000/addTask`, { newEntry })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                alert("Server error!");
            });
    }


    

    return (
        <>
            <div className="App">
                <TaskContext.Provider value={{taskSheet, fetchData, addTask}}>
                    <Header/>
                    <Body/>
                </TaskContext.Provider>
            </div>
        </>
    );
}

export default App;