import React from "react";
import {connect} from 'react-redux';


const ForgotPasswordPage = () => {

    return (
        <div>
            ForgotPasswordPage
        </div>
    )
}

const mapStateToProps = ({user}) => {
    console.log(user);
    return {email: user.userEmail }
}

export default connect(mapStateToProps)(ForgotPasswordPage);
