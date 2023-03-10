import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import TaskContext from './Context/TaskContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import LandingPage from './LandingPage';

function App() {

    const [taskSheet, setTaskSheet] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {

        const email = localStorage.getItem('Email');
        console.log(email);

        axios.get(`http://localhost:5000/getTask?Email=${email}`)
            .then((res) => {
                setTaskSheet(res.data.taskSheetData);
            })
            .catch((err) => {
                alert("Server error!");
            });
    }


    const addTask = () => {

        const email = localStorage.getItem('Email');
        const newEntry = { Email: email, TaskName: 'New Task', SubTasks: [] };

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
                    {
                        localStorage.getItem('Email') === null
                            ? <LandingPage/> 
                            : <Body/>  
                    }
                </TaskContext.Provider>
            </div>
        </>
    );
}

export default App;