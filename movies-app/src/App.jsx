import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [data, setDatas] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const keyword = useSelector((state) => state.keyword);
  const dispatch = useDispatch();
  
  useEffect(() => {

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;

    axios.get(url, {
      params: {
        apikey : apiKey,
        s : keyword,
        page: page,
      }
    })
      .then((res) => {
        console.log(res.data);
        setDatas(res.data.Search);
      })
      .catch(err => {
        console.log('error fetching data: ', err);
      })
      .finally(() => {
        setLoading(false);
      })

  }, [page, keyword]);

  const handlePageChange = (newPage) => {
    setLoading(true);
    setPage(newPage);
  };

  const handleSearch = (newKeyword) => {
    dispatch({ type : 'SET_SEARCH_KEYWORD', payload : newKeyword });
    setPage(1);
  };

  return (
    <>
      <Header onSearch={ handleSearch }/>
      <div className="container mt-5">
        <h2 className="fw-bold">Enjoy Watching Your Movie</h2>
      </div>
      <div className='d-flex flex-wrap justify-content-center gap-2 mb-5'>
        { loading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          data.map((movie) => (
            <Movie 
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          ))
        )}
      </div>
      <div className="buttonPagination d-flex justify-content-center align-items-center mt-4 mb-5">
        <button
          className="btn btn-dark me-2"
          onClick={() => handlePageChange(page - 1)}
          >Previous</button>
        <button
          className="btn btn-dark ms-2"
          onClick={() => handlePageChange(page + 1)}
          >Next</button>
      </div>
      <Footer />
    </>
  );  
}

export default App
