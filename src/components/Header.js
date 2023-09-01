import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            navigate('/error')
        });
    }
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-full flex justify-between'>
            <img className='w-36' alt='logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
            {user && <div className='flex p-2'>
                <span className='font-bold text-white my-2 mr-2'>{user?.displayName?.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}</span>
                <img className=' w-10 h-10' alt='profile' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' />
                <button onClick={handleSignout} className='font-bold text-white ml-2'>(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header