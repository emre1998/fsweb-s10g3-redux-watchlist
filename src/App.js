
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist,previousMovie,nextMovie,suggestMovie, backToTop } from "./store/actions/moviesActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const Watchlist = useSelector((store) =>store.moviesReducers.watchlist);
  const movies = useSelector((store)=>store.moviesReducers.movies);
  const sira = useSelector((store)=>store.moviesReducers.sira);

  const handleClick = () => {
    dispatch(addToWatchlist(movies[sira]));
    toast.dark('Film Listenize Eklendi', {
      style: {
        background: '#1D4ED8', // bg-blue-700 rengi
      },
    });   
    };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
         { movies.length >0 ?(
          <>
            <Movie  /> 
            
            <div className="flex gap-3 justify-end py-3">
            <button
                onClick={()=>{dispatch(backToTop())}}
                className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 }`}
              >
                Başa Dön
            </button>
            <button
              onClick={()=>{dispatch(suggestMovie())}}
              className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 }`}
            >
              Film Öner
            </button>
            <button disabled={sira<=0}
                onClick={()=>{dispatch(previousMovie())}}
                className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 ${sira<=0 && 'bg-red-200'}`}
              >
                Önceki
              </button>
              <button
                disabled={sira===movies.length-1}
                onClick={()=>{dispatch(nextMovie())}}
                className={`select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 ${sira===movies.length-1 && 'bg-red-200'}`}
              >
                Sıradaki
              </button>
              <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white" onClick={handleClick} >
                Listeme ekle
              </button>
              <ToastContainer/>
            </div>
          </>) :
          <div>Tüm filmler eklediniz</div>}
        </Route>

        <Route path="/listem">
          <div>
            {Watchlist.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
} 
    
export default App;
