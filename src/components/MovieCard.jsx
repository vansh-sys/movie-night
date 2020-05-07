import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {learnMore,fetchSelectedMovie,addToFavourites,removeFromFavourites} from '../actions/movieActions'
import Translations from '../utils/Translations';

class MovieCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isFav : false
        }
    }

    componentWillMount(){
        this.checkFavourites()
    }

    handleOnClick=(imdbID)=>{
          this.props.learnMore(imdbID)
          this.props.fetchSelectedMovie(imdbID);
      }
    
    addToFavourites=(imdbID)=>{
        this.props.addToFavourites(imdbID)
        this.setState({
            isFav : !this.state.isFav
        })
    }
    
    removeFromFavourites=(imdbID)=>{
        this.props.removeFromFavourites(imdbID)
        this.setState({
            isFav : !this.state.isFav
        })
    }

    checkFavourites=()=>{
        this.props.favList.map((movie)=>{
            if(movie.imdbID===this.props.movie.imdbID){
                this.setState({
                    isFav:true
                })
            }
            return true
        })
    }

    render(){
        return (
            <Card style={{maxWidth:345}}>
              <CardActionArea>
                <CardMedia
                  style={{height:140}}
                  image={this.props.movie ? this.props.movie.Poster:''}
                  title={this.props.movie ? this.props.movie.Title:''}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.movie ? this.props.movie.Title:''}
                  </Typography>
                   {this.props.isOpen ? 
                   <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.movie ?<div> {this.props.movie.Runtime}<br/>{this.props.movie.Released}<br/>{this.props.movie.Director}<br/>{this.props.movie.Actors}<br/>{this.props.movie.Plot}</div>:''}
                  </Typography>:
                  <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.movie ?<div> {this.props.movie.Type}<br/>{this.props.movie.Year}</div>:''}
                  </Typography>} 
                  
                </CardContent>
                {this.props.isOpen ? 
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rating</Typography>
                    <Rating
                    name="simple-controlled"
                    value={this.props.movie ? this.props.movie.imdbRating : ''}
                    onChange={''}
                    />
                </Box>:''}
              </CardActionArea>
              {!this.props.isOpen ? 
              <CardActions>
                <Button size="small" color="primary" onClick={e => this.handleOnClick(this.props.movie.imdbID)}>
                    {Translations.learnMore}
                </Button>
                {!this.state.isFav ? 
                <Button size="small" color="primary" onClick={e => {this.addToFavourites(this.props.movie.imdbID)}}>
                    {Translations.addToFav}
                </Button>
                :''}
                {this.state.isFav ?
                <Button size="small" color="primary" onClick={e => {this.removeFromFavourites(this.props.movie.imdbID)}}>
                    {Translations.removeFromFav}
                </Button>
                :''}   
              </CardActions>:''}
            </Card>
          );
    }
}

const mapStateToprops = (state) => {
    const data = state
    return data;
  };

export default connect(mapStateToprops,{learnMore,fetchSelectedMovie,addToFavourites,removeFromFavourites})(MovieCard);;
