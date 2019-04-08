import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import MagicInput from './MagicInput';

export default class CatCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Macska',
      age: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){

    return(
      <Card style={{padding: '2em', margin: '2em'}}>
        <Image src='/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>
          <MagicInput text={this.state.name} name='name' onChange={this.handleChange}/>
          </Card.Header>
          <Card.Meta>
            Age: <MagicInput text={this.state.age ? this.state.age : 'Unknown'} name='age' onChange={this.handleChange}/>
          </Card.Meta>
        </Card.Content>
    </Card>
    );
  }


}
