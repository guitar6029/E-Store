import { UserAuth } from "../../Context/AuthContext";
import Wrapper from "../Wrapper";
import Navbar from '../Navbar/Navbar';
import './Store.css';

export default function Store() {


    const { user } = UserAuth();

    return (
        <Wrapper>
            <Navbar />
            <div class="welcome">

                <h3>Welcome to E-Store</h3>
                <div>
                    <h3>Logged in as : {user.email} </h3>
                </div>
            </div>

        </Wrapper>

    )
}