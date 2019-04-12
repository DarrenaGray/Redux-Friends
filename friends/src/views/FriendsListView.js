import React from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from './../actions';

import FriendsList from '../components/FriendsList';
import FriendForm from '../components/FriendForm';


class FriendsListview extends React.Component {
    componentDidMount() {
      console.log('Mounting...')
      this.props.getFriends();
    }
    
    deleteFriend = id => {
        console.log('Click', id)
        this.props.deleteFriend(id);
    }
    render() {
        console.log('Rendering...')
        return (
            <div>
                <h1>Friends</h1>
                <FriendsList friends={this.props.friends} deleteFriend={this.deleteFriend}/>
                <FriendForm friends={this.props.friends}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { getFriends, deleteFriend })(FriendsListview);