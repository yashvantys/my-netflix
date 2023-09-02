import React from 'react'
import { CDN_IMAGE_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className=' w-48 pr-2'>
            <img alt='' src={CDN_IMAGE_URL + posterPath} />
        </div>
    )
}

export default MovieCard