var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'https://vignette3.wikia.nocookie.net/disney/images/c/cb/The_Lion_King_Textless_poster_1.jpg/revision/latest?cb=20140810104158'
    },
    {
        id: 3,
        title: 'Titanic',
        desc: 'Film o statku',
        poster: 'http://www.freemovieposters.net/posters/titanic_1997_6120_poster.jpg'
    },
    {
        id: 4,
        title: 'Avatar',
        desc: 'Film o niebieskich ludkach',
        poster: 'http://cafmp.com/wp-content/uploads/2012/12/Avatar-Neytiri.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MoviePoster, {
                    poster: this.props.movie.poster
                })
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {
            src: this.props.poster
        });
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = movies.map(function(movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        });
        return React.createElement('ul', {}, moviesElements);
    }
});
var element = React.createElement(MovieList, {
    movies: movies
});
ReactDOM.render(element, document.getElementById('app'));