const initialState = {
    covidData: [],
    selectedState: 'All'
}

const covidReducer = (state=initialState, action:any) => {
    switch(action.type){
        case 'COVID_DATA':
            return{
                ...state,
                covidData:action.payload
            }
        case 'SELECTED_STATE':
            return{
                ...state,
                selectedState: action.payload
            }
        default:
            return state;
    }
}

export default covidReducer