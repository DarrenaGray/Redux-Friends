import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from './../actions';

class FriendForm extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        console.log('New friend added:', this.state)
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            // Adding Date.now() prevents multiple friends from getting the same id
            id: Date.now()
        }
            this.props.addFriend(newFriend);
        this.setState({
            name: '',
            age: '',
            email: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <input 
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChange}
                        value={this.state.age}
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        savingFriends: state.savingFriends
    }
}

export default connect(mapStateToProps, { addFriend })(FriendForm);