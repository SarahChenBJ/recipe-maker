import React from 'react'
import frecipes from "../../../data/fittingRecipes.json"
import { ViewCard } from '../Card';
import RecipeReviewCard from '../RecipeCard';
import RecipeReviewCarden from './RecipeCard-en'

const TestCard = () => {
  // const constructor = (props) => {
  //   super(props);
  //   this.state = {
  //     frecipes: []
  //   }
  // };
  // const componentDidMount = ()=>{
  //   axios.get(`http://127.0.0.1:50051/cards`)
  //   .then(res => {
  //     const frecipes = res.data
  //     this.setState({frecipes})
  //   })
  // };
    // var frecipes = []
    // axios.get(`http://localhost:50051/cards`)
    // .then(res => {
    //   console.log("succeed:",res)
    //   frecipes = res.data
    //   this.setState({frecipes})
    // })


  // const res =  axios.get('cards');
  // console.log(res.data)
  // const getTemplate = (recipe) => {
  //   switch (recipe.template) {
  //     case 'card2-1': return <RecipeReviewCard1 data={recipe}/>
  //     case 'card3': return <RecipeReviewCard3 data={recipe}/>
  //     case 'card4': return <RecipeReviewCard2 data={recipe}/>
  //     case 'card4-1': return <RecipeReviewCard4 data={recipe}/>
  //     default: return <RecipeReviewCard1 data={recipe}/>
  //   }
  // }

  return (
    <div className='list'>
      <div className='list-flex'> 
      {
        frecipes.map((recipe, i) => {
          if (recipe.lang == "en") {
            return <RecipeReviewCarden data={recipe}/>
          }
          return <RecipeReviewCard data={recipe}/>
        })
      }
      </div>
      
    </div>
  )
}

export default TestCard
