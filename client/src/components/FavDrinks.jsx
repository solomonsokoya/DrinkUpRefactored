import React, {Component} from 'react';



class FavDrinks extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isLoaded: false
    }
  }

  render() {
    if(this.props.drinks !== 0){
      return (this.props.drinks.map(drink => (
      <div key={drink.drink_id}>
        <h1>{drink.drink_name}</h1>
        <h2>{drink.ingredients}</h2>
      </div>
    )))} else {
     return (<p>Loading</p>)
    }

  }
}


// {this.props.drinks.map(drink => (
//       <div key={drink.drink_id}>
//       <h1>
//       {drink.drink_name}
//       </h1>

//       <h2>
//       {drink.ingredients}
//       </h2>
//       </div>

//       )
//       )}

export default FavDrinks;
