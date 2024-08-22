import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../src/Components/Card/Card';
import Filter from '../src/Components/Filter/Filter';
import CovidLineChart from '../src/Components/LineChart/CovidLineChart';
import CovidMap from '../src/Components/Map/CovidMap';
import PieChart from '../src/Components/PieChart/PieChart';
import './App.css';
import { setCovidData } from './Redux/Action';
import { CovidData } from './Data/CovidData';
import {faVirusCovid, faSkull, faHeartPulse, faBedPulse} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const dispatch = useDispatch()
  const covidData = useSelector((state: { covidData: any[] }) => state.covidData);
  const selectedState = useSelector((state: { selectedState: string }) => state.selectedState);

  useEffect(()=>{
    dispatch(setCovidData(CovidData))
  },[dispatch])

  const data = selectedState === 'All' ? covidData : covidData.filter(data => data.state === selectedState);
  
  const totalActiveCases = data.reduce((acc, data) => acc + data.activeCases, 0);
  const totalRecovered = data.reduce((acc, data) => acc + data.recovered, 0);
  const totalDeaths = data.reduce((acc, data) => acc + data.deaths, 0);
  const totalCases = data.reduce((acc, data) => acc + data.totalCases, 0);

  const values = [totalCases, totalActiveCases, totalRecovered, totalDeaths];

  return (
    <div className="App">
        <h1  className='heading'>COVID-19 Tracker</h1>
        <Filter />
        <div className="card-container">
          <Card title="Total Cases" value={totalCases} color="#f39c12" icon={faVirusCovid} />
          <Card title="Active Cases" value={totalActiveCases} color="#3498db" icon={faBedPulse} />
          <Card title="Recovered Cases" value={totalRecovered} color="#2ecc71" icon={faHeartPulse} />
          <Card title="Deaths" value={totalDeaths} color="#e74c3c" icon={faSkull} />
        </div>
        <PieChart values={values} />
        <CovidLineChart />
        <CovidMap />
    </div>
  );
};

export default App;
