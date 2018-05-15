import React, {Component} from 'react';

class DrinkShow extends Component{
  constructor(props){
    super(props)
    this.state ={
      ingredients:''
    }
    this.fetchInfo = this.fetchInfo.bind(this);
  }

  fetchInfo(){
    console.log('fetching')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.id}`)
    .then(resp =>{
      return resp.json()
    }).then(respBody =>{
      const drink = respBody.drinks[0]
      const ingredients = [];
      for (const key in drink){
        if(key.includes('Ingredient') && drink[key])
        ingredients.push(drink[key] + ', ')
      }
      this.setState({
        ingredients: ingredients
      })
    })

  }

componentDidMount(){
  this.fetchInfo()

}

render(){

  return(

    <div>
    <p>-{this.state.ingredients}</p>
    </div>

    )
}

}

export default DrinkShow
