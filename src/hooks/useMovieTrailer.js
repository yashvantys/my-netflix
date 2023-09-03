import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { addMoviewTrailer } from '../utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
    //fetch trailer video from API and updating store
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json?.results?.filter(video => video.type === 'Trailer');
        const trailer = filterData?.length ? filterData[0] : json?.results[0];
        dispatch(addMoviewTrailer(trailer))
    }
    useEffect(() => {

        !trailerVideo && getMovieVideo()
    }, [])
}