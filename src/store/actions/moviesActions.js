export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST"
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST"
export const NEXT_MOVIE = "NEXT_MOVIE"
export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE"
export const BACK_TO_TOP = "BACK_TO_TOP"
export const SUGGEST_MOVIE = "SUGGEST_MOVIE"


export const addToWatchlist = (movie) => {
    return({
        type:ADD_TO_WATCHLIST,
        payload:movie
    })    
}

export const removeFromWatchlist = (id) => {
    return({
        type:REMOVE_FROM_WATCHLIST,
        payload:id
    })
}

export const nextMovie =() =>{
    return({type:NEXT_MOVIE})
}

export const previousMovie =() =>{
    return({type:PREVIOUS_MOVIE})
}

export const backToTop =()=>{
    return({type:BACK_TO_TOP})
}

export const suggestMovie =()=>{
    return({type:SUGGEST_MOVIE})
}
