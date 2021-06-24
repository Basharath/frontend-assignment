import { useState, useEffect } from 'react';
import Movies from './Movies';
import TitleBar from './TitleBar';
import Modal from './Modal';
import '../css/app.scss';

import { getMovies, searchMovies } from '../httpService';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [movie, setMovie] = useState({});
	
	useEffect(() => {
		getMovies()
			.then(movies => setMovies(movies))
			.catch(e => console.log(e));
	}, []);

  const handleSearch = async (searchText) => {
		const movieList = await searchMovies(searchText);
		setMovies(movieList);
  }

	const handleClick = (movie) => {
		setMovie(movie);
		setShowModal(true);
	}

	const handleClose = () => {
		setShowModal(false);
	}
	
	return (
		<main>
			<TitleBar onSearch={handleSearch} />
			<Movies movies={movies} onCardClick={handleClick} />
			{ showModal && <Modal onClose={handleClose} movie={movie} />}
		</main>
	)
};

export default App;
