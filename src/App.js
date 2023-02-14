import './App.css';
import Tasks from './Tasks';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navbar />
        <Tasks />
      </div>
    </>
  );
}

export default App;