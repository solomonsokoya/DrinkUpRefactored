import React, { Component } from 'react';
import DrinkShow from './DrinkShow.jsx';




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
      <input
      type = 'text'
      id = 'input'
      name='searchTerm'
      value ={this.state.searchTerm}
      onChange = {this.handleSearch}
      placeholder = 'search drink'/>

      {filteredDrinks.map(drinkf =>(
        <div key = {drinkf.idDrink}>
          <div> {drinkf.strDrink}</div>
          <DrinkShow id={drinkf.idDrink}/>
        </div>
      ))}

      </div>
      )
  }

}


export default DrinksFromApi
