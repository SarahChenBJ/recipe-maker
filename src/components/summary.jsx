import React from 'react'

//TODO: CODE REVIEW BY AG
const Summary = () => {
  return (
    <div className='summary'>
      <div className='summary-flex'>
        <div className='summary-item'>
          <a classname="summary-icon" href=''>
            <img className='summary-img' src='./src/assets/icon-cook.svg' />
            <h6 className='mt-20'>123 Recipes</h6>
          </a>
        </div>

        <div className='summary-item'>
          <a classname="summary-icon" href=''>
            <img className='summary-img' src='./src/assets/icon-category.svg' />
            <h6 className='mt-20'>456 Categories</h6>
          </a>
        </div>
        <div className='summary-item'>
          <a classname="summary-icon" href=''>
            <img className='summary-img' src='./src/assets/icon-hotel.svg' />
            <h6 className='mt-20'>7 Countries</h6>
          </a>
        </div>

        <div className='summary-item'>
          <a classname="summary-icon" href=''>
            <img className='summary-img' src='./src/assets/icon-ingred.svg' />
            <h6 className='mt-20'>89 Ingredients</h6>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Summary
