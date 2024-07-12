import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [userName, setUserName] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const submitData = (e) => {
        e.preventDefault();
        setUser({userName, password});
    }

  return (
    <div>
      <input type='text' placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
      <br/>
      <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <button onClick={submitData} >Submit</button>
    </div>
  )
}

export default Login
