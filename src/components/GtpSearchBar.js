import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GtpSearchBar = () => {
    const langConfig = useSelector(store => store.config?.lang)
    return (
        <div className='pt-[5%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 '>
                <input type='text' className='p-2 m-4 col-span-9'
                    placeholder={lang?.[langConfig]?.gtpSearchPlaceHolder} />
                <button className='py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3'>{lang?.[langConfig]?.search}</button>
            </form>
        </div>
    )
}

export default GtpSearchBar