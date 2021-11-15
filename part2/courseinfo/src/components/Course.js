import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({id, name, parts}) => {
    console.log("Course: ", id)
    //console.log(course)
    console.log("Course: ", name)
    console.log("Course: ", parts)
    //console.log(other)
    
    // let id = course.id
    // let name = course.name
    // let parts = course.parts

    return (
        <div key={id}>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default Course