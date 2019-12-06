import React, { Component } from 'react';
import axios from 'axios';

class StudentList extends Component {
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
    
    render() {
        const userElements = this.state.studentList.map ((user, index)=>{
            return <tr key = {index}>
                        <td>{user.github_name}</td>
                    </tr>
        })

        return (
            <section>
                <h2>Saved GitHub Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {userElements}
                </tbody>
            </table>
            </section>
        );
};
}

export default StudentList;