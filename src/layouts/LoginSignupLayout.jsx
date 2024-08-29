import AuthHeader from '../shared/Header/AuthHeader'
import { Outlet } from 'react-router-dom'

export default function LoginSignupLayout() {
  return (
    <div>
      <AuthHeader/>
      <div className='mt-[5rem]'>
        <Outlet/>
      </div>
    </div>
  )
}
