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
        const apiUrl = environment.REACT_APP_API_URL || 'http://localhost:3001';
        fetch(`${apiUrl}/employees`,
            {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(this.state),
            })
            .then((response) => {
                if (response.ok) {
                    console.log("Registration successful");
                } else {
                    console.error("Registration failed");
                }
            })
            .catch((error) => {
                console.error("Error occurred during registration:", error);
            });
    };

    render() {
        return (
            <main>
                <h2>Register for the Program</h2>
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
                        <button type="submit">Register</button>
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