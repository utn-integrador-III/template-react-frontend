import React, { Component } from "react";
import { environment } from '../../../environment';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const apiUrl = environment.REACT_APP_API_URL || 'http://localhost:3001' ;
        fetch(`${apiUrl}/employees?username=${encodeURIComponent(this.state.username)}&password=${encodeURIComponent(this.state.password)}`,
            {
                method: 'GET',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            })
            .then((response) => {
                if (response.ok) {
                    console.log(response.json());
                    console.log("Login successful");
                } else {
                    console.error("Login failed");
                }
            })
            .catch((error) => {
                console.error("Error occurred during login:", error);
            });
    };

    render() {
        return (
            <main>
                <h2>Login for the Program</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </main>
        );
    }

    componentDidMount() {
        document.title = "Register";
    }
}
export default Main;