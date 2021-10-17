export function addmovie (titulo) {
    return function (dispatch) {
        fetch('http://www.omdbapi.com/?apikey=78afbcdf&s=' + titulo)
        .then(response => response.json())
        .then(json =>{
            dispatch({type:"addmovie", payload:json})
        })
    }
}

export const addfav = (payload) => {
    return {
        type:"addfav", payload
    }
}

export const removefav = (payload) => {
    return {
        type:"removefav" , payload
    }
}

export function details(id){
    return function(dispatch){
        fetch('http://www.omdbapi.com/?apikey=78afbcdf&s=' + id)
        .then(response => response.json())
        .then(json => {
            dispatch({type: "details", payload:json})
        })
    }
}