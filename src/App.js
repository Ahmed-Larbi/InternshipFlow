import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import GraphBar from './components/graphbar/Graphbar';

function App() {
  return (
    <div className="App">
    <div className='title-div'>
      <h1 className='title'> Internships </h1>
    </div>
      <Sidebar/>
      <GraphBar/>
    </div>
  );
}

export default App;
