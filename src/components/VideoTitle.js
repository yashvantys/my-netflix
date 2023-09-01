import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' w-screen aspect-video  pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className='w-20 h-12 rounded-lg bg-white focus:outline-none text-black font-bold hover:bg-opacity-80'>Play</button>
                <button className='px-5 w-32 h-12 rounded-lg bg-white focus:outline-none text-black font-bold mx-2 hover:bg-opacity-80'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle