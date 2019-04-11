import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from './../actions';

import FriendsList from '../components/FriendsList';


class FriendsListview extends React.Component {
    componentDidMount() {
      console.log('Mounting...')
      this.props.getFriends();
    }
    

    render() {
        console.log('Rendering...')
        return (
            <div>
                <h1>Friends</h1>
                <FriendsList friends={this.props.friends}/>
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

export default connect(mapStateToProps, { getFriends })(FriendsListview);