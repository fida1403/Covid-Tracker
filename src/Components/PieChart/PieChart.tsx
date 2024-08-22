import Plot from 'react-plotly.js';
import './PieChart.css'

const PieChart = ({ values }: { values: number[] }) => {

  const labels = ['Total Cases', 'Active Cases', 'Recovered', 'Deaths'];

  return (
    <div className='piechart'>
        <Plot
        data={[
            {
            labels,
            values,
            type: 'pie',
            marker: {
              colors: ['#f39c12', '#3498db', '#2ecc71', '#e74c3c'] 
            },
            },
        ]}
        layout={{ title: 'Covid-19 Data' }}
        />
    </div>
  );
};

export default PieChart;
