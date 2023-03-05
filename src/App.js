import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import DataProvider from './Context/DataProvider';

function App() {
  return (
    <>
      <div className="App">
        <DataProvider>
          <Header/>
          <Body/>
        </DataProvider>
      </div>
    </>
  );
}

export default App;