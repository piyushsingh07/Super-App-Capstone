import PropTypes from 'prop-types';

const MovieBox = ({ category, selectedMovies, setSelectedMovies }) => {
    const handleSelection = (category) => () => {
        if (selectedMovies.includes(category)) {
            setSelectedMovies(selectedMovies.filter((movie) => movie !== category))
        } else {
            setSelectedMovies([...selectedMovies, category])
        }
    }

    return (
        <div
            style={{
                width: "150px",
                height: "150px",
                backgroundColor: "lightblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                border: `2px solid ${selectedMovies.includes(category) ? "red" : "black"}`,
            }}
            onClick={handleSelection(category)}
        >
            <h1>{category.movie}</h1>
        </div>
    );
};

MovieBox.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        movie: PropTypes.string.isRequired
    }).isRequired,
    selectedMovies: PropTypes.array.isRequired,
    setSelectedMovies: PropTypes.func.isRequired,
};

export default MovieBox;