import React from 'react';

const FriendsList = props => {

    return (
        <div>
            {props.friends.map(friend => (
                <div>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;