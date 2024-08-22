import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import './CovidLineChart.css';

interface CovidData {
  activeCases: number;
  recovered: number;
  deaths: number;
  state: string,
  totalCases: number;
  activeCasesDate:string,
  recoveredDate:string,
  deathsDate:string,
  totalCasesDate:string
}

const CovidLineChart = () => {
  const covidData = useSelector((state: { covidData: CovidData[] }) => state.covidData);
  const selectedState = useSelector((state: { selectedState: string }) => state.selectedState);

  const data = selectedState === 'All' ? covidData : covidData.filter((item) => item.state === selectedState);

  const activeCases = data.map((d) => d.activeCases);
  const recovered = data.map((d) => d.recovered);
  const deaths = data.map((d) => d.deaths);
  const totalCases = data.map((d) => d.totalCases);

  const totalCasesdate = data.map((d) => d.totalCasesDate)
  const activeCasesdate = data.map((d) => d.activeCasesDate);
  const recovereddate = data.map((d) => d.recoveredDate);
  const deathsdate = data.map((d) => d.deathsDate);

  return (
    <div className='lineChart'>
      <Plot
        data={[
          { x: activeCasesdate, y: activeCases, type: 'scatter', mode: 'lines+markers', name: 'Active Cases' },
          { x: totalCasesdate, y: totalCases, type: 'scatter', mode: 'lines+markers', name: 'Total Cases' },
          { x: recovereddate, y: recovered, type: 'scatter', mode: 'lines+markers', name: 'Recovered' },
          { x: deathsdate, y: deaths, type: 'scatter', mode: 'lines+markers', name: 'Deaths' },
        ]}
        layout={{
          title: 'Covid-19 Trends',
          xaxis: { title: 'Date' },
          yaxis: { title: 'Count' },
          showlegend: true
        }}
      />
    </div>
  );
};

export default CovidLineChart;
