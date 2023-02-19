import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import TaskProvider from './Context/TaskProvider';

function App() {
  return (
    <>
      <div className="App">
        <TaskProvider>
          <Header/>
          <Navbar/>
          <Body/>
        </TaskProvider>
      </div>
    </>
  );
}

export default App;