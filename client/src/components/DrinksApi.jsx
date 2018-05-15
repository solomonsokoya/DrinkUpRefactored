import React, { Component } from 'react';
import Nav from './Nav.jsx';
import DrinkShow from './DrinkShow.jsx';

const drinkImg = {
  width: "20%"
}
const drinkContainer ={
  border: "solid 2px black",
  padding: "10px",
  margin: "20px",
  width: "50%"
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
        <div key = {drinkf.idDrink} style={drinkContainer}>
          <img src={drinkf.strDrinkThumb} alt="" style={drinkImg}/>
          <h3>{drinkf.strDrink}</h3>
          <DrinkShow create={this.props.create} id={drinkf.idDrink}/>
        </div>
      ))}

      </div>
      )
  }

}


export default DrinksFromApi
