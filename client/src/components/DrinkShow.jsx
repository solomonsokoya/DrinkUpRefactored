import React, {Component} from 'react';

class DrinkShow extends Component{
  constructor(props){
    super(props)
    this.state ={
      ingredients:'',
      drink_name:'',
      instructions:'',
      image_url:''

    }
    this.fetchInfo = this.fetchInfo.bind(this);
  }

  async fetchInfo(){
    try{
      let promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.id}`)
      let json = await promise.json();
        const drink = json.drinks[0]
        const ingredients = [];
        for (const key in drink){
          if(key.includes('Ingredient') && drink[key])
          ingredients.push(' ' + drink[key])
        }
        this.setState({
          ingredients: ingredients.join(),
          drink_name: drink.strDrink,
          instructions: drink.strInstructions,
          image_url: drink.strDrinkThumb
        })
      }
      catch(err){
        console.log(err)
      }

  }

componentDidMount(){
  this.fetchInfo()
}

render(){

  return(
    <div>
    <h4>Ingredients:  {this.state.ingredients}</h4>
    <h4>Instructions:  {this.state.instructions}</h4>
    <button onClick = {()=> this.props.create(this.state)} >Add Fav Drink</button>
    </div>
    )
  }
}

export default DrinkShow
