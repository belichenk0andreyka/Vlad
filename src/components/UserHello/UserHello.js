import React from 'react';

import './UserHello.css';

const UserHello = ({userName}) => (
    <div className='hello'>Hello {userName}</div>
);

export default UserHello;
