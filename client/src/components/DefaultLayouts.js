import React from 'react'
import './../resources/DefaultLayouts.css'

function DefaultLayouts(props) {
  return (
    <div className='layout'>
         <div className='header'>
            <h1>EasyResume</h1>
         </div>
         <div className='content'>
             {props.children}
         </div>
    </div>
  )
}

export default DefaultLayouts