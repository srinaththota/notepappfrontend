const initialState={
fetchedData:[{category: "Mathematices", userId: 2, message: "Statistics"}]

}

const reducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'FETCH':
            return {
                ...state,
                fetchedData:action.messageDetails
            }
            case 'UPDATE':
               
            return {
                ...state,
                fetchedData:action.userId
            }
            default:
                return state;
    }
}
export default reducer;