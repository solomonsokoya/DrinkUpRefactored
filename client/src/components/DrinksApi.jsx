import React, { Component } from 'react';
import Nav from './Nav.jsx';
import DrinkShow from './DrinkShow.jsx';

const drinkImg = {
  width: "20%"
}
const drinkContainer ={
  border: "solid 2px black",
  padding: "10px",
  margin: "20px"
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
    console.log(this.props.drinks)
    const filteredDrinks = this.props.drinks.filter(drink =>{
      return drink.strDrink.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    })

    return(
      <div className='grid'>
      <Nav className ='Nav'/>
      <input
      type = 'text'
      className='input'
      id = 'input'
      name='searchTerm'
      value ={this.state.searchTerm}
      onChange = {this.handleSearch}
      placeholder = 'Search Drink'/>

      <div className='apiDrink'>
      {filteredDrinks.map(drinkf =>(
        <div className='apiEachDrinkCont' key = {drinkf.idDrink} style={drinkContainer}>
          <img src={drinkf.strDrinkThumb} alt="" style={drinkImg}/>
          <h3>{drinkf.strDrink}</h3>
          <DrinkShow create={this.props.create} id={drinkf.idDrink}/>
        </div>
      ))}
      </div>

      </div>
      )
  }

}


export default DrinksFromApi
