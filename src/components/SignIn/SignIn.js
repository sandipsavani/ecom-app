import React from 'react';
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import './Styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

    }

    handelSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    }

    handelChange = event => {
        const { name, value } = event.target;
        this.setState = ({
            [name]: value,
        });

    }

    render() {
        return (<div className="sign-in">
            <h2> I already have an account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={this.handelSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    handelChange={this.handelChange}
                    value={this.state.email}
                    label="email"
                    required />

                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    handelChange={this.handelChange}
                    value={this.state.password}
                    required />

                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>);
    }

}

export default SignIn;