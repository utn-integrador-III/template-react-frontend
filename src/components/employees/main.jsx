import React, { Component } from "react";
import { environment } from '../../../environment'; // Adjust the import path as necessary    

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            allEmployees: [] // Initialize an empty array for employees
        };
    }
    componentDidMount() {
        // Fetch the list of employees from the API when the component mounts
        const apiUrl = environment.REACT_APP_API_URL || 'http://localhost:3001';
        fetch(`${apiUrl}/employees`)
            .then(response => response.json())
            .then(data => this.setState({ allEmployees: data }))
            .catch(error => console.error('Error fetching employees:', error));
    }

   render() {
       return (
           <main>
               <h2>List of Employees</h2>
               <ul>
                   {this.state.allEmployees.map(employee => (
                       <li key={employee.id}>{employee.username}</li>
                   ))}
               </ul>
           </main>
       );
   }
};

export default Main;