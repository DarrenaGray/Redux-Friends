import React from 'react';

const FriendsList = props => {

    return (
        <div>
            {props.friends.map((friend, index) => (
                <div key={index}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={() => props.deleteFriend(friend.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;