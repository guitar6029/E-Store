
import {UserAuth} from '../../Context/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){


    const {logoutUser} = UserAuth();
    const navigate = useNavigate();

    const clickHandle = () => {
        logoutUser();
        navigate('/');
    }


    return (
        <nav className="main-nav">
            <div className='links'>
            <div><Link to='/sale'>Sale</Link></div>
            <div><Link to='/about'>About</Link></div>
            </div>
            <div onClick={clickHandle}>Logout</div>
        </nav>
    )
}