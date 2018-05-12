import React, {Component} from 'react';

const drinkImg = {
  width: "20%"
}

const drinkContainer ={
  border: "solid 2px black",
  padding: "10px",
  margin: "20px"
}


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
      <div key={drink.drink_id} style={drinkContainer}>
        <img src={drink.image_url} alt="" style={drinkImg}/>
        <button>EDIT DRINK</button>
        <h3>{drink.drink_name}</h3>
        <h4>{drink.ingredients}</h4>
        <h4>{drink.instructions}</h4>
        <button>DELETE DRINK</button>
      </div>
    )))} else {
     return (<p>Loading</p>)
    }
  }
}

export default FavDrinks;
