import React, {Component} from 'react';
import { BrowserRouter as Redirect, withRouter } from 'react-router-dom';

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
        <div className='favDrinkPost'>
        <img className='favDrinkImg' src={drink.image_url} alt="" />

        <div className='favDrinkDetails'>
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
        </div>
      </div>
    )))} else {
     return (<p>Loading</p>)
    }
  }
}

export default withRouter(FavDrinks);

