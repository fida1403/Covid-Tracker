import { useDispatch, useSelector } from 'react-redux';
import { setSelectedState } from '../../Redux/Action';
import './Filter.css'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const covidData = useSelector((state: any) => state.covidData);
  const selectedState = useSelector((state: any) => state.selectedState); 
  const states = ['All', ...covidData.map((data: any) => data.state)];

  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSelectedState(event.target.value));
  };

  return (
    <div className='filter'>
      <span>COVID19 Cases in  </span>
      <FormControl
        variant="outlined"
        style={{
          minWidth: 150, 
          maxWidth: 300,
          marginBottom: '10px',
          marginLeft:'10px' 
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedState}
          onChange={handleChange}
          label="State"
          style={{ height: 50 }}
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
