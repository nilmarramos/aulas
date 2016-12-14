import React, { Component, PropTypes}  from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        const user = this.props.user;

        if (!user) {
            return <div>Select User ...</div>
        }
        return (
           <div>
             <h3>Detalis:</h3>
               <div>Name: {user.name} - Idade: {user.idade}</div>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}


export default connect(mapStateToProps)(UserDetail);