import React from 'react'
import RecipeReviewCard from "./RecipeCard";
import recipes from "../../data/recipes.json"
import frecipes from "../../data/fittingRecipes.json"

const recipe = {
  title: 'meatballs in tomato sauce',
  subheader: 'albondigas',
  intro: ` Albondigas are one of the classic taps dishes and most deserving of their popularity. You can choose to serve these meatballs with alioli and lemon rather than the tomato sauce — this is a common Spanish variation. The meatballs reheat well.`,
  serves:`4`,
  ingredients: [
    "150 g/6 oz, minced/ground pork", 
    "150 g/6 oz, minced/ground veal",
    "1 teaspoon freshly squeezed lemon juice",
    "1/2 small onion, finely chopped",
    "2 garlic cloves, crushed",
    "1/2 teaspoons freshly grated nugmet",
    "1/2 teaspoon ground cloves",
    "30 g/1/4 cup dried breadcrumbs",
    "1 egg",
    "1 tablespoon single/light cream",
    "plain/all-purpose olive oil",
    "sea salt and greshly ground white pepper"
  ],
  steps:[
    "1. To make the meatballs, put the pork and veal in a bowl; then add lemon juice, onion, garlic, parsley, nutmeg, cloves, breadcrumbs, egg, cream, salt and pepper. Mix well.",
    "2. Roll the mixure into walnut-sized balls. Dust with flour.",
    "3. Heat the oil in a flameproof casserole until smoking. Add the meatballs and saute until browned on all sides.",
    "4. Reduce the heat to low. Add the wine, tomatoes, onion, garlic, paprika, bay leaf and 100 ml water. Cover and simmer for 1 hour.",
    "5. The mixture should be quite liquid. So add extra water if necessary."
  ],
  img: './src/assets/meatball.jpeg',
  labels: ["MEAT", "POULTRY"],
}

//TODO: CODE REVIEW BY AG
const List = () => {
  return (
    <div className='list'>
      <div className='list-flex'>
      {/* <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div> */}
      {
        frecipes.map((recipe, i) => {
          return <RecipeReviewCard data={recipe}/>
        })
      }
      
      {/* <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src="./src/assets/cornbread.png"/>
        <h3>Mama's Cornbread</h3>
        <div className='card-story'>
          <div className='tag'></div>
          <div className='story'>
          In our family, we have two versions of cornbread: one is from the US and the other is from northeast China. The main difference is Chinese version will have yeast to help rise, in which case, it’ll take longer than the American version.
          </div>
        </div>
      </div> */}
      </div>
      
    </div>
  )
}

export default List
