import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {

  state = {
    studentList: [],
  };

  componentDidMount(){
    console.log('in componentDidMount');
    this.getStudents();
  }

getStudents(){
    axios({
        method: `GET`,
        url: `/students`
    }).then((response)=>{
        console.log('back from GET', response);
        this.setState( { studentList: response.data });  
    }).catch((err)=>{
        console.log('err getting student', err);  
    })
}


  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
    axios({
      method: 'POST',
      url: '/students',
      data: newStudent
    }).then((response) => {
      console.log('back from POST', response);
      this.setState({
        studentList: [...this.state.studentList, newStudent]
      })
      this.getStudents()
    }).catch((error)=> {
      alert('Error adding newStudent.  See console for details')
      console.log(error);
    })
  }

  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <p>Student list goes here.</p>
        <StudentList list={this.state.studentList}/>
      </div>
    );
  }
}

export default App;
