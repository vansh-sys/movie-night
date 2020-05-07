import Translations from "../utils/Translations";
const Action = Translations.Actions
const apiKey = Translations.apiKey

export const fetchMovie = (movie) => async (dispatch) => {
    let searchResult = [];
    // eslint-disable-next-line no-undef
    fetch('http://www.omdbapi.com/?s='+movie+'&apikey='+apiKey)
      .then((res) => res.json())
      .then((data) => {
        searchResult = data;
        dispatch({ type: Action.searchMovieAction, payload: searchResult });
      })
      .catch((error) => error);
  };

export const learnMore = (id) =>(dispatch)=>{
    dispatch({ 
        type: Action.learnMoreAction,
        payload: id 
    });
}

export const fetchSelectedMovie = (id) =>(dispatch)=>{
    let searchResult = {};
    // eslint-disable-next-line no-undef
    fetch('http://www.omdbapi.com/?i='+id+'&apikey='+apiKey)
      .then((res) => res.json())
      .then((data) => {
        searchResult = data;
        dispatch({ type: Action.selectMovieAction, payload: searchResult });
      })
      .catch((error) => error);
}

export const closeModal = () =>(dispatch)=>{
    dispatch({ 
        type: Action.closeModalAction,
        payload: false 
    });
}

export const addToFavourites = (id) => (dispatch)=>{
    let searchResult = {};
    fetch('http://www.omdbapi.com/?i='+id+'&apikey='+apiKey)
      .then((res) => res.json())
      .then((data) => {
        searchResult = data;
        dispatch({ type: Action.addToFavAction, payload: searchResult });
      })
      .catch((error) => error);
}

export const moveToFavourites = (payload) => (dispatch)=>{
    dispatch({ type: Action.moveToFavAction, payload: payload });
}

export const removeFromFavourites = (id) => (dispatch)=>{
    dispatch({ type: Action.removeToFavAction, payload: id });
}