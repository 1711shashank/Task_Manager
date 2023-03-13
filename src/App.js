import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import TaskContext from './Context/TaskContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';

function App() {

    const [taskSheet, setTaskSheet] = useState([]);

    useEffect(() => {
        document.title = 'My Page Title';
        fetchData();
    }, [])

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        const name = urlParams.get('name');

        if (email) {
            localStorage.setItem('Email', email);
            localStorage.setItem('Name', name);

            window.location.href = 'https://task-manager-e3i7.onrender.com/';
        }

    }, []);

    const fetchData = () => {

        const email = localStorage.getItem('Email');

        axios.get(`https://task-manager-backend-bnjq.onrender.com/getTask?Email=${email}`)
            .then((res) => {
                setTaskSheet(res.data.taskSheetData);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    const addTask = () => {

        const email = localStorage.getItem('Email');
        const newEntry = { Email: email, TaskName: 'New Task', SubTasks: [] };

        axios.post(`https://task-manager-backend-bnjq.onrender.com/addTask`, { newEntry })
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <div className="App">
                <TaskContext.Provider value={{ taskSheet, fetchData, addTask }}>
                    {
                        localStorage.getItem('Email') === null
                            ? <LandingPage />
                            : <> <Header /> <Body />  </>
                    }
                </TaskContext.Provider>
            </div>
        </>
    );
}

export default App;