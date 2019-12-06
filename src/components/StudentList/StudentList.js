import React, { Component } from 'react';

import axios from 'axios';

import '../App/App.css'


class StudentList extends Component {

    clickDeleteHandler(userId){
        console.log('in clickDeleteHandler', userId);
        axios({
            method: 'DELETE',
            url: `/students/${userId}`
        }).then( (response) => {
            console.log('in Delete students', response);
        }).catch ( (err) => {
            console.log(err);
            alert('err from Delete students')
        })  
    }
    
    render() {
        const userElements = this.props.list.map ((user, index)=>{
            return <tr key = {index}>
                        <td>{user.github_name} 
                        <button onClick = { () => this.clickDeleteHandler (user.id)}>Delete</button>
                        </td>
                        
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