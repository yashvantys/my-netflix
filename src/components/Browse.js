import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpcomingMovies } from '../hooks/useUpcomingMovies'
import GtpSearch from './GtpSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
    const showGptSearch = useSelector(store => store.gtp?.showGtpSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()

    return (
        <div>
            <Header />
            {showGptSearch ? <GtpSearch /> : <><MainContainer />
                <SecondaryContainer /></>}
        </div>
    )
}

export default Browse