import React, { Component } from 'react'

import StudentsApp from '../components/StudentsApp'
import UpdateStudent from '../components/UpdateStudent'

import { fetchStudents, createStudent, deleteStudent, updateStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }

  }

  componentDidMount(){
    fetchStudents()
      .then( students => this.setState({
        students: students
      }) )
  }

  handleAddStudent(name){
    createStudent(name)
      .then( student => this.setState( prevState =>  ({ students: [...prevState.students, student] }) ))
      .catch(e => console.log(e))
  }

  handleUpdateStudent(id) {
    console.log
  }

  handleDeleteStudent(event, student) {
    event.preventDefault()
    deleteStudent(student)
    .then(() => this.setState( prevState => ({ students: prevState.students.filter( name => name !== student )}) ) )
  }

  render(){
    return (
      < StudentsApp students={this.state.students} onSubmit={this.handleAddStudent.bind(this)} handleDelete={this.handleDeleteStudent.bind(this)} />
    )
  }
}

export default StudentsContainer
