import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css'
import './CovidMap.css'

const CovidMap = () => {
  const covidData = useSelector((state: any) => state.covidData);
  const selectedState = useSelector((state: any) => state.selectedState);
  const data = selectedState === 'All' ? covidData : covidData.filter((item: any) => item.state === selectedState);

  const customIcon = new Icon({
    iconUrl: require("../../Assets/covid-19.png"),
    iconSize:[38, 38]
  })

  return (
    <div className='map'>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
        {data.map((statistic: any) => {
          return(
              <Marker  position={[statistic.latitude, statistic.longitude]} icon={customIcon}>
                  <Popup>
                      <h2>{statistic.state}</h2>
                      <p>Total Cases: {statistic.totalCases}</p>
                      <p>Active Cases: {statistic.activeCases}</p>
                      <p>Recovered: {statistic.recovered}</p>
                      <p>Deaths: {statistic.deaths}</p>
                  </Popup>
              </Marker>
          )})}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
