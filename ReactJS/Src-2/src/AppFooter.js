import React from 'react'

//With React Components, Parent Components can pass attributes to the inner components in the form of props. 
export default function AppFooter(props) {
    console.log(props)
  return (
    <div className='app-footer'>
        <hr/>
        <p>&copy; All Rights Reserved under - {props.company}--{props.year}</p>
    </div>
  )
}
