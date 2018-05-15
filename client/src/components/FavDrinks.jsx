import React, {Component} from 'react';
import { BrowserRouter as Redirect, withRouter } from 'react-router-dom';
// import EditDrink from './EditDrink';

// const drinkImg = {
//   width: "20%"
// }


const drinkContainer ={
  border: "solid 2px black",
  padding: "10px",
  margin: "20px",
  width: "50%"
}

class FavDrinks extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isLoaded: false
    }
    this.handleEditRoute = this.handleEditRoute.bind(this);
  }

  handleEditRoute(drink) {
    this.props.handleEditDrink(drink);

    this.props.history.push(`/edit/${drink.drink_id}`)
  }

  render() {
    if(this.props.drinks){
      return (this.props.drinks.map(drink => (
      <div key={drink.drink_id} >
        <img className='favDrinkImg' src={drink.image_url} alt="" />

        <div className='editButton'>
        <button onClick={() => this.handleEditRoute(drink)}>EDIT DRINK</button>
        </div>

        <div className='drinkName'>
        <h3>{drink.drink_name}</h3>

        </div>

        <div className='drinkIngred'>
        <h4>{drink.ingredients}</h4>
        </div>

        <div className='drinkInstruc'>
        <h4>{drink.instructions}</h4>
        </div>

        <div className='deleteButton'>

        <button onClick={() => this.props.deleteDrink(drink)}>DELETE DRINK</button>
        </div>
      </div>
    )))} else {
     return (<p>Loading</p>)
    }
  }
}

export default withRouter(FavDrinks);

