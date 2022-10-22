import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import GraphBar from './components/graphbar/Graphbar';
import AdditionIcon from "./assets/images/add-square.png"
import MainTable from './components/mainTable/MainTable';

function App() {
  return (
    <div className="App">
    <div className='title-div'>
      <button className='create-button'> <img className="add-icon" src={AdditionIcon} alt=""/>Create New Internship</button>
      <h1 className='title'> Internships </h1>
    </div>
      <Sidebar/>
      <GraphBar/>
      <MainTable/>
    </div>
  );
}

export default App;
