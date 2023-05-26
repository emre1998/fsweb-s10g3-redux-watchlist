import { ADD_TO_WATCHLIST,REMOVE_FROM_WATCHLIST,NEXT_MOVIE,PREVIOUS_MOVIE,SUGGEST_MOVIE,BACK_TO_TOP } from "../actions/moviesActions";
import { movies } from "../../movies";

const initialState = {
    movies:movies,
    sira:0,
    watchlist:[],
};

export const moviesReducers = (state = initialState, action ) => {
    switch (action.type) {
      case NEXT_MOVIE :
      return {
        ...state,
        sira : Number(state.sira)+1,
      }
      case PREVIOUS_MOVIE:
      return {
        ...state,
        sira : Number(state.sira)-1,
      }
      case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist :state.watchlist.filter(item => item.id===action.payload.id).length>0 ? [...state.watchlist] :[...state.watchlist,action.payload],
        movies : state.movies.filter(item =>item.id!==action.payload.id),
        sira : state.sira === state.movies.length-1 ? state.sira-1 :state.sira,
      }
      case BACK_TO_TOP :
        return {
          ...state,
          sira :0,
        }
      case SUGGEST_MOVIE :
      return {
        ...state,
        sira :Math.round(Math.random()*state.movies.length),
      }
  
      case REMOVE_FROM_WATCHLIST :
        return{
          ...state,
          movies : [...state.movies,state.watchlist.find(item => item.id === action.payload)],
          watchlist: state.watchlist.filter(item =>item.id!==action.payload),
        }
      
      default:
        return state;
    }
  }















