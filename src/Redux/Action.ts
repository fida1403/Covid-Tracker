export const setCovidData = (data: any) => ({
    type: 'COVID_DATA',
    payload: data,
  });
  
  export const setSelectedState = (state: string) => ({
    type: 'SELECTED_STATE',
    payload: state,
  });
  