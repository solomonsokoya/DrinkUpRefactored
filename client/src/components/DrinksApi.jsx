import React, { Component } from 'react';
import Nav from './Nav.jsx';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class DrinksFromApi extends Component{
  constructor(props){
    super(props)
    this.state ={
      drinkMatch: ''
    }
  }

  handleSearch(e){
    this.props.drinks.drinks.forEach(drink => {

      let drinkString = drink.strDrink.toLowerCase();
      let input = e.target.value.toLowerCase();

      if(drinkString === input){
        this.setState((prevState,props) =>{
          return{
            drinkMatch: drink
          }
        })
      }
    })
  }


  render(){
    console.log(this.state.drinkMatch)
    return(

    <div>
      drinks page
      <input type = 'text' id = 'input' onKeyUp = {this.handleSearch.bind(this)}placeholder = 'search drink'></input>
      <p>{this.state.drinkMatch.strDrink}</p>
      <img src={this.state.drinkMatch.strDrinkThumb}/>
     </div>

    )
}

}

export default DrinksFromApi
