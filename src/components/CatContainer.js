import React, { Component } from 'react'
import { Button, Grid, Container } from 'semantic-ui-react';
import CatCard from './CatCard';

export default class CatContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }

  addCat(){
    const newCats = [...this.state.cats];
    newCats.push(<CatCard />);
    this.setState({cats: newCats });
  }

  render(){

    return(
      <Container>
        <Grid padded centered column={3}>
          {this.state.cats}
          <Button icon='plus' onClick={() => this.addCat()} />
        </Grid>
      </Container>
    );
  }

}
