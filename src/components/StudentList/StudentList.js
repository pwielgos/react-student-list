import React, { Component } from 'react';
import '../App/App.css'

class StudentList extends Component {
    
    render() {
        const userElements = this.props.list.map ((user, index)=>{
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