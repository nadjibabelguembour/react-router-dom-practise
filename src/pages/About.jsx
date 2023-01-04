import React from 'react'
import './style.css'

const About = () => {
  return (
    <div className='about'>
         <h1>About</h1>
        <h2>Do you wanna know more about React Router Dom?</h2>
        <p>Well there is a very beautiful explantion on youtube thanks to <br/>
          a very humble smart guy called "Kyle", his channal is: "Web dev simplified"
        </p>
        <p>
          In this small project we learned how to use react router dom to navigate <br />
          between a multi page website and we saw the use of 2 different hooks:<br/>
          "useMatch" & "useResolvedPath" .
        </p>
    </div>
   
  )
}

export default About