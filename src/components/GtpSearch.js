import React from 'react'
import GtpSearchBar from './GtpSearchBar'
import GtpMovieSuggestions from './GtpMovieSuggestions'
import { BACKGROUND_IMAGE_URL } from '../utils/constants'

const GtpSearch = () => {
    return (
        <div>
            <div className='absolute -z-20'>
                <img alt='logo' src={BACKGROUND_IMAGE_URL} />
            </div>
            <GtpSearchBar />
            <GtpMovieSuggestions />
        </div>
    )
}

export default GtpSearch