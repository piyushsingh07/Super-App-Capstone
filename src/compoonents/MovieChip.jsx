import PropTypes from 'prop-types';

const MovieChip = ({ category, setSelectedMovies }) => {
    const removeSelection = (category, event) => {
        event.stopPropagation(); // Prevent event from bubbling up to parent elements
        setSelectedMovies((selectedMovies) =>
            selectedMovies.filter((movie) => movie.id !== category.id)
        );
    };

    return (
        <button>
            {category.movie} <span onClick={(event) => removeSelection(category, event)}>X</span>
        </button>
    );
};

MovieChip.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        movie: PropTypes.string.isRequired
    }).isRequired,
    setSelectedMovies: PropTypes.func.isRequired,
};

export default MovieChip;