import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth'
import { SITE_LOGO, SUPPORTED_LANGUAGES, USER_ICON } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gtpSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gtp?.showGtpSearch)
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.           
        }).catch((error) => {
            navigate('/error')
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });
        // unsubscribe when component unmount
        return () => {
            unsubscribe()
        }
    }, [])
    const handleGPTSearch = () => {
        // toggel GPT search
        dispatch(toggleGptSearchView())
    }
    const handleLanSelect = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-full flex justify-between'>
            <img className='w-36' alt='logo' src={SITE_LOGO} />
            {user && <div className='flex p-2'>
                {showGptSearch && <select onChange={handleLanSelect} className='p-2 m-2 bg-gray-900 text-white'>
                    {SUPPORTED_LANGUAGES?.map((lang) => <option key={lang?.identifier} value={lang?.identifier}>{lang?.name}</option>)}
                </select>}
                <button className='px-2 mx-2 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearch}>
                    {showGptSearch ? "Home Page" : "GTP Search"}</button>
                <span className='font-bold text-white my-2 mr-2'>{user?.displayName?.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}</span>
                <img className=' w-10 h-10' alt='profile' src={USER_ICON} />
                <button onClick={handleSignout} className='font-bold text-white ml-2'>(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header