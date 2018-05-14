import React, { Component } from 'react';
import Nav from './Nav.jsx';
import DrinkShow from './DrinkShow.jsx';
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
    let View;
    if(this.state.drinkMatch){
      View =(
        <DrinkShow drinkMatch ={this.state.drinkMatch}/>
        )
    }

    return(

    <div>
      drinks page

      <input type = 'text' id = 'input' onKeyUp = {this.handleSearch.bind(this)}placeholder = 'search drink'></input>
      {View}
     </div>

    )
}

}

export default DrinksFromApi
