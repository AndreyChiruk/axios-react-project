import React from 'react';
import axios from 'axios';
import Card from './Card';

const baseUrl = "https://reqres.in/api/users?page=2";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                first_name: "NO info",
                last_name: "NO info",
                email: "NO info",
                avatar: "#####",
            }]
        };

        this.recreateText = this.recreateText.bind(this);
    }

    render() {
        const userCards = this.state.users.map((user, index) => (
            index > 0 ?
                <Card
                    key={index}
                    first_name={user.first_name || "NO info"}
                    last_name={user.last_name || "NO info"}
                    email={user.email || "NO info"}
                    avatar={user.avatar || "#####"}
                />
            : null
        ));
        return (
            <div>
                <div>
                    <button onClick={this.recreateText}>Получить информацию о пользователях</button>
                    {userCards}
                </div>
            </div>
        );
    }

    recreateText() {
        axios.get(baseUrl).then((res) => {
            const newUsers = res.data.data.map((user) => ({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
            }));
    
            this.setState({
                users: [...this.state.users, ...newUsers],
            }, () => {
                console.log(this.state.users);
            });
        });
    }
    
}

export default App;
