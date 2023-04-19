import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import React from 'react'
import { Form, useFetcher } from "react-router-dom"

export const Editor = () => {
  return (
    <div className="form-wrapper">
      <h2 className='h3'>
        Create Recipe Card
      </h2>
      <Form method="post" className="grid-sm" >
        <div className="grid-xs">
          <label htmlFor="newName">Recipe Name</label>
          <input
            type="text"
            name="newName"
            id="newName"
            placeholder='e.g., Meatballs in tomato sauce'
            required
          />
        </div>
        <div className="expense-input">
          
        </div>
        <div className="grid-xs">
          <label htmlFor='newSubname'>Alias</label>
          <input 
            type="text"
            name="newSubname"
            id="newSubname"
            placeholder='e.g., albondigas'
            />
        </div>
        <div className="grid-xs">
          <label htmlFor='newServe'>Serve</label>
          <input 
            type="number"
            step="1"
            name="newServe"
            id="newServe"
            placeholder='e.g., 1'
            required
            defaultValue={1}
            inputMode="numeric"
            />
        </div>
        <div className="grid-xs">
          <label htmlFor='newIntro'>Introduction</label>
          <textarea 
            name="newIntro"
            id="newIntro"
            placeholder='e.g., Albondigas are one of the classic taps dishes and most deserving of their popularity. You can choose to serve these meatballs with alioli and lemon rather than the tomato sauce — this is a common Spanish variation. The meatballs reheat well. '
            />
        </div>
        <div className="grid-xs">
          <label htmlFor='newIngdnts'>Ingredients</label>
          <textarea 
            name="newIngdnts"
            id="newIngdnts"
            placeholder='Use "Enter" to seperate ingredients'
            required
            />
        </div>
        <div className="grid-xs">
          <label htmlFor='newSteps'>Instructions</label>
          <textarea 
            name="newSteps"
            id="newSteps"
            placeholder='Use "Enter" to seperate steps'
            required
            />
        </div>
        <button className="btn btn--dark">
          <span>Create Recipe Card</span>
          <ControlPointOutlinedIcon width={20}/>
        </button>
      </Form>
    </div>
  )
}
