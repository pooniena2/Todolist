import React from 'react';
import Dog from './dog.png';

export default function About() {

    
const headerstyle = {
    color: "blue",
    textDecoration: 'none',
  }
    return (
        <React.Fragment>
           <h1 style={headerstyle} >About App</h1>
           <br/>
           <p>My name is T and this is my very first simple project in React !!!! </p>
           <br/>
           <img src={Dog}  />



        </React.Fragment>
    )
}
