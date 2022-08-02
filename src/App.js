//for routing
import {Routes, Route} from 'react-router-dom';

//context
import {AuthContext} from './Context/AuthContext';
import ProtectedRoute from './Context/ProtectedRoute';

//components
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Store from './Components/Store/Store';

function App() {
  return (
    <div>
      <AuthContext>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/store' element={
                <ProtectedRoute><Store /></ProtectedRoute>}/>
            </Routes>
            </AuthContext>
    </div>
  )
}

export default App;
