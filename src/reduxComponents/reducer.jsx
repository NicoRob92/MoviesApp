const initialState = {
    moviesFav:[],
    moviesLoad: [],
    movieDetail:{}
}

export default function reducer (state = initialState, action){
    switch(action.type)
    {
        case "addmovie":
            return state = {...state,moviesLoad: action.payload.Search} 
        case "addfav":
            return state = {...state,moviesFav:[...state.moviesFav,action.payload]}
        case "removefav": 
            const a = state.moviesFav.filter(e => e.imdbID !== action.payload)
            return state = {...state,moviesFav:a}
        case "details":
           return  state = {...state,movieDetail:action.payload}
        default:
            return state
    }
    
}