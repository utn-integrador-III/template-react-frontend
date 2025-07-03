import React, { Component } from "react"; 

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            allEmployees: [] // Initialize an empty array for employees
        };
    }
    componentDidMount() {
        const apiUrl = `${import.meta.env.VITE_APP_API_URL}`; // Use the environment variable for the API URL';
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