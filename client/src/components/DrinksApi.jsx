import React, { Component } from 'react';
import Nav from './Nav.jsx';
import { Link } from 'react-router-dom';
import DrinkShow from './DrinkShow.jsx';

const drinkTitle = {
  fontWeight: 'bold'
}

class DrinksFromApi extends Component{
  constructor(props){
    super(props)
    this.state ={
      searchTerm:'',
      drinkMatch: this.props.drinks
    }
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch(e){
    e.preventDefault();
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  render(){
    const filteredDrinks = this.props.drinks.filter(drink =>{
      return drink.strDrink.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    })

    return(
      <div>
      <Nav/>
      <input
      type = 'text'
      id = 'input'
      name='searchTerm'
      value ={this.state.searchTerm}
      onChange = {this.handleSearch}
      placeholder = 'search drink'/>

      {filteredDrinks.map(drinkf =>(
        <div key = {drinkf.idDrink}>
          <div style={drinkTitle}><Link to='/'>{drinkf.strDrink}</Link></div>
          <DrinkShow id={drinkf.idDrink}/>
        </div>
      ))}

      </div>
      )
  }

}


export default DrinksFromApi
