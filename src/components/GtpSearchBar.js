import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { openai } from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGtpMovieResult } from '../utils/gtpSlice'

const GtpSearchBar = () => {
    const dispatch = useDispatch()
    const langConfig = useSelector(store => store.config?.lang);
    const searchText = useRef(null)

    const searchMovieTMDB = async (movie) => {
        const result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, API_OPTIONS)
        const json = await result.json();
        return json?.results
    }

    const handleGtpSearch = async () => {
        console.log(searchText.current.value)
        // make an open AI API call to get movie result
        const gtpQuery = `Act as a movie recommendation system and suggest some movies for the query: 
        ${searchText.current.value}. only give me names of 5 movies, comma seperated like the example result given ahead.
         Example Result: Gadar, Sholay, Don, Hum, Agnipath`;
        const gtpResults = await openai.chat.completions.create({
            messages: [{ role: 'Owner', content: gtpQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gtpResults?.choices) {

        }
        console.log(gtpResults?.choices?.[0]?.message?.content);
        const gtpMovies = gtpResults?.choices?.[0]?.message?.content.split(',');
        //for each movie search TMDB api
        const promiseArray = gtpMovies?.map(movie => searchMovieTMDB(movie))
        const tbdbResult = await Promise.all(promiseArray);
        console.log(tbdbResult)
        dispatch(addGtpMovieResult({ movieNames: gtpMovies, movieResults: tbdbResult }))

    }
    return (
        <div className='pt-[5%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' className='p-2 m-4 col-span-9'
                    placeholder={lang?.[langConfig]?.gtpSearchPlaceHolder} />
                <button className='py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3' onClick={handleGtpSearch}>{lang?.[langConfig]?.search}</button>
            </form>
        </div>
    )
}

export default GtpSearchBar