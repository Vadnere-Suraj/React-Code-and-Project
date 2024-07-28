
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout as authLogout} from '../../store/authSlice'

function LoginBtn() {

    const dispatch = useDispatch()

    const logouthandler = () => {
        authservice.logout().then(() => {
            dispatch(authLogout())
            window.location.reload();
        })

    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logouthandler}
    >Logout</button>
  )
}

export default LoginBtn
