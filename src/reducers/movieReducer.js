const initialState={
    isOpen : false,
    favList : [],
    favourite : false
}

const movieReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SEARCH_MOVIE':
            state = {
                ...state,
                searchedResults : action.payload
            }
            return state
        
        case 'LEARN_MORE':
            state={
                ...state,
                isOpen : true,
                selectedMovie : action.payload 
            }
            return state
        case 'SEL_MOVIE':
            state={
                ...state,
                selectedMovieDetails : action.payload
            }
            return state
        case 'CLOSE_MODAL':
            state={
                ...state,
                isOpen : action.payload
            }
            return state
        case 'ADD_TO_FAV':
            state.favList.push(action.payload)
            state={
                ...state,
                favList:state.favList
            }
            return state
        case 'MOVE_TO_FAV':
            state={
                ...state,
                favourite:action.payload
            }
            return state
        case 'REM_FROM_FAV':
            let favList=state.favList.filter((movie)=>{
                return (movie.imdbID !== action.payload)
            })
        
            state={
                ...state,
                favList : favList
            }
            return state
        default:
            return state
    }
}

export default movieReducer;
