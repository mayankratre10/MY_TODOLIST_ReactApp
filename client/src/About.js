import React from 'react'

const About = () => {
    let mystyle={
        minHeight:"100vh",
    }
  return (
    <div style={mystyle} className="container">
      <h4>This is About my app!</h4>
      <p>This Simple React App, TodoList for listing your day to day todos,
        This will save your todos to mongodb database so you won't loose any
      </p>
    </div>
  )
}

export default About
