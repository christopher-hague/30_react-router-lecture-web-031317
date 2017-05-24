import React from 'react'

export default function StudentShow(props) {
  return (
    if (!student) {
      return <h2>Loading</h2>
    }

    return (
      <div>
        <h1>{student.name}</h1>
        <button className='btn btn-danger' onClick={ () => props.onDelete(props.student.id) }>Delete This Student</button>
      </div>
    )
  )
}
