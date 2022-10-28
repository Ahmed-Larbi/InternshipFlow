import './mainPage.css';
import Sidebar from '../../sidebar/Sidebar';
import GraphBar from '../../graphbar/Graphbar';
import AdditionIcon from "../../../assets/images/add-square.png"
import MainTable from '../../mainTable/MainTable';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    const navigateNewInternships = () => {
        navigate('/add-new');
    }
  return (
    <div className="App">
    <div className='title-div'>
      <button className='create-button' onClick={navigateNewInternships}> <img className="add-icon" src={AdditionIcon} alt=""/>Create New Internship</button>
      <h1 className='title'> Internships </h1>
    </div>
      <Sidebar/>
      <GraphBar/>
      <MainTable/>
    </div>
  );
}

export default MainPage;
