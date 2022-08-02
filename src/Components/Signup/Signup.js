import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';


export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const emailHandler = (e) => {
        let emailInput = e.target.value;
        setEmail(emailInput);
    }

    const passwordHandler = (e) => {
        let passwordInput = e.target.value;
        setPassword(passwordInput);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/');
        } catch (e) {
            console.log(e.message);
            setError(e.message);
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='form-control'>Email Address</label>
                <input type="email" onChange={emailHandler} />
            </div>
            <div className='form-group'>
                <label className='form-control'>Password</label>
                <input type="password" onChange={passwordHandler} />
            </div>
            <div className='form-group'>
                <h4>Already have an account? <Link to='/'>Login</Link></h4>
                <button className='btn btn-primary'>Create Account</button>
            </div>
        </form>
    )




}