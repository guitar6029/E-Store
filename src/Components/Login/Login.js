import {useState} from 'react';
import { UserAuth } from '../../Context/AuthContext';
import {Link , useNavigate} from 'react-router-dom';


export default function Login(){

    const [email, authEmail] = useState('');
    const [password, authPassword] = useState('');
    const [error, setError] = useState();

    const {loginUser} = UserAuth();

    const navigate = useNavigate();
    
    const emailHandler = (e) => {
        let emailInput = e.target.value;
        authEmail(emailInput);
    }

    const passwordHandler = (e) => {
        let passwordInput = e.target.value;
        authPassword(passwordInput);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        try{
            await loginUser(email, password);
            navigate('/store');
        }catch(e){
            console.log(e.message);
            setError(e.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='form-control'>Email Address</label>
                <input type="email" onChange={emailHandler}/>
            </div>
            <div className='form-group'>
                <label className='form-control'>Password</label>
                <input type="password" onChange={passwordHandler}/>
            </div>
            <div className='form-group'>
                <h4>Don't have an account yet? <Link to='/signup'>Signup</Link></h4>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
    )

}