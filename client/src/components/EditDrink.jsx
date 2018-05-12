import React, { Component } from 'react';

const drinkImage = {
  width:"15%"
}
export default class EditDrink extends Component {
  constructor(props) {
    super(props);

  this.state = {
    redirectProfile: false,
    drink: Object.assign({
      drink_id:'',
      drink_name:'',
      ingredients:'',
      instructions:'',
      image_url:'',
      user_id:''
    }, props.initialValue)
    };
  }


  render() {
    console.log(this.props)
    const { drink_id, drink_name, ingredients, instructions, image_url } = this.props.drink;
    return(
      <form>
        <label>
          <h3>Cocktail:</h3>
          <input
            type='text'
            name='drink_name'
            value={drink_name}
          />
        </label>
        <label>
          <h3>Ingredients:</h3>
          <textarea
            name='ingredients'
            value={ingredients}
            rows='6'
          />
        </label>
        <label>
          <h3>Instructions:</h3>
          <textarea
            name='instructions'
            value={instructions}
            rows='8'
          />
        </label>
        <label>
          <h3>Url for Drink Image:</h3>
          <input
            type='url'
            name='image_url'
            value={image_url}
          />
        </label>
        <br />
        <img src={image_url} alt="" style={drinkImage}/>
        <br />
        <button type='submit'>SUBMIT</button>
      </form>
      )
  }
}
