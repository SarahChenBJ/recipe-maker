import React from 'react'

const Banner = () => {
  return (
    <div className='banner banner-flex'>
      <div className='banner-left'>
        <h1 className="">Sarah Chen </h1>
        <h2 className=""> ——— home cook</h2>
      </div>
      <div className='banner-right'>
        <a href=''>
          <img src='./src/assets/banner-chef.jpg'/>
        </a>
      </div>
    </div>
  )
}

export default Banner
