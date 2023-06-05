import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RecipeReviewCard from "./RecipeCard";

class ListCards extends React.Component{
    constructor(props) {

        super(props);
    
        this.state = {
    
          recipes: []
        };
      }
      componentDidMount() {
        const config = {
          headers:{
            auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVsZXZlbl9jaGVueHVAMTYzLmNvbSIsInBhc3N3b3JkIjoiMDAwMDAwIiwiZXhwIjoxNjg2MTUwNjEzLCJpc3MiOiJjb29rYWdlLWFwcCJ9.xO1YD5jbilj3Gpa095EtXzLHuOVfkuCHH3ENBqWAHw0",
          }
        }
        
        axios.get(`http://localhost:50051/api/v1/cards?user_id=1`, config)
          .then(res => {
            console.log("res:",res)
    
            const recipes = res.data;

            console.log("recipes:", res.data)
    
            this.setState({ recipes });
    
          });
    
      }

      render() {
        return (
            <div className='list'>
      <div className='list-flex'> 
      {
        this.state.recipes.map((recipe, i) => {
          return <RecipeReviewCard data={recipe}/>
        })
      }
      </div>
      
    </div>
        );
      }
    
}
// ReactDOM.render(
//     <ListCards/>,
//     document.getElementById('root')
//   );

export default ListCards;