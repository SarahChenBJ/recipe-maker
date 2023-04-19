import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="layout">
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Main