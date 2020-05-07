import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {fetchMovie,closeModal,moveToFavourites} from '../actions/movieActions';
import MovieList from './MovieList';
import MovieModal from './MovieModal';
import '../App.css';
import Transalation from '../utils/Translations';
 

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchKey:'',
            open:false,
        }
    }

    handleSearch=(e)=>{
        this.setState({
            searchKey : e.target.value
        })
    }

    handleOnClick=()=>{
        this.props.fetchMovie(this.state.searchKey)
    }

    handleClose=()=>{
        this.props.closeModal()
    }

    toggleFavourites=()=>{
        this.props.moveToFavourites(!this.props.favourite)
    }

    render(){
        return(
            <div>
                {!this.props.favourite ? 
                <div>
                <br/>
                <br/>
                <SearchBar handleOnChange={e => this.handleSearch(e)}/>
                <Button variant="contained" color="primary" onClick={this.handleOnClick}>
                    {Transalation.Search}
                </Button>
                
                <Button className="favourite" variant="contained" color="secondary" onClick={this.toggleFavourites}>
                    {Transalation.Favourites}
                </Button>
                <br/>
                <br/>
                <MovieList movies={this.props.searchedResults ? this.props.searchedResults : ''} />
                <MovieModal selectedMovieDetails={this.props.selectedMovieDetails} isOpen={this.props.isOpen} handleClose={this.handleClose} />
                </div>
                :
                <div>
                    <Button className="favourite" variant="contained" color="primary" onClick={this.toggleFavourites}>
                        {Transalation.backToSearch}
                    </Button>
                    <br/>
                    <br/>
                    <MovieList movies={this.props.favList ? this.props.favList : ''} />
                    <MovieModal selectedMovieDetails={this.props.selectedMovieDetails} isOpen={this.props.isOpen} handleClose={this.handleClose} />
                </div>
                }        
            </div>
        );
    }
}

const mapStateToprops = (state) => {
    console.log(state);
    const data = state
    return data;
  };

export default connect(mapStateToprops,{fetchMovie,closeModal,moveToFavourites})(Movie);