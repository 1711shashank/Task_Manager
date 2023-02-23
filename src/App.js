import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import TaskProvider from './Context/TaskProvider';

function App() {
  return (
    <>
      <div className="App">
        <TaskProvider>
          <Header/>
          <Body/>
        </TaskProvider>
      </div>
    </>
  );
}

export default App;