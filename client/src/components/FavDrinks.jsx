import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

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
          <div className = 'apiEachDrinkCont'>
          <img src={drink.image_url} className= 'drinkImg' alt = 'img' />
            <div className='favDrinkDetails'>
              <button onClick={() => this.handleEditRoute(drink)}>EDIT DRINK</button>
              <h3>{drink.drink_name}</h3>
              <h4>{drink.ingredients}</h4>
              <h4>{drink.instructions}</h4>
              <button onClick={() => this.props.deleteDrink(drink)}>DELETE DRINK</button>
            </div>
          </div>
        </div>
    )))}
    else {
     return (<p>Loading</p>)
    }
  }
}

export default withRouter(FavDrinks);
