import React, { PropTypes } from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';

const App = () => {
    return (
        <div>
            <UserList/>
            <UserDetail/>
        </div>
    );
};

export default App;