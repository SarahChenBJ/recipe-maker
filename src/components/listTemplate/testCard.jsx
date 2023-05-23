import React from 'react'
import RecipeReviewCard1 from "./RecipeCard1";
import RecipeReviewCard2 from "./RecipeCard2";
import RecipeReviewCard3 from "./RecipeCard3";
import RecipeReviewCard4 from "./RecipeCard4";
import frecipes from "../../../data/recipes.json"
import { ViewCard } from '../Card';

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
  const getTemplate = (recipe) => {
    switch (recipe.template) {
      case 'card2-1': return <RecipeReviewCard1 data={recipe}/>
      case 'card3': return <RecipeReviewCard3 data={recipe}/>
      case 'card4': return <RecipeReviewCard2 data={recipe}/>
      case 'card4-1': return <RecipeReviewCard4 data={recipe}/>
      default: return <RecipeReviewCard1 data={recipe}/>
    }
  }

  return (
    <div className='list'>
      <div className='list-flex'> 
        {
          frecipes.map((recipe, i) => {
            return getTemplate(recipe)
          })
        }
      
      {/* {
        frecipes.map((recipe, i) => {
          return ({
            
          }
          )
        })
      }
      {
        frecipes.map((recipe, i) => {
          return <RecipeReviewCard2 data={recipe}/>
        })
      }
      {
        frecipes.map((recipe, i) => {
          return <RecipeReviewCard3 data={recipe}/>
        })
      }
      {
        frecipes.map((recipe, i) => {
          return <RecipeReviewCard4 data={recipe}/>
        })
      } */}
      
      </div>
      
    </div>
  )
}

export default TestCard
