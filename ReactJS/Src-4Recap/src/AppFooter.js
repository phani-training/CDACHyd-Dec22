import React from 'react'

export default function AppFooter(props) {
  console.log(props)
  return(
    <div className="AppFooter">
        <p>{props.data}</p>
    </div>
  );
}

