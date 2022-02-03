import axios from 'axios';
import React, { useEffect, useState, useRef} from 'react';
import lodash from 'lodash'

//https://hn.algolia.com/api/v1/search?query=react

export default function HackerNews() {
    const [hits, setHits] = useState([])
    const [query, setQuery] = useState('react')
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const handleFetchData = useRef({})

    handleFetchData.current = async () => {
        setLoading(true)

        try{
            const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
            //console.log('Fetched res: ',res.data.hits)
            setHits(res.data?.hits)
            setLoading(false)
            setErrorMsg('')
        }catch(err){
            //co loi => tat load de in loi
            setLoading(false)
            setErrorMsg(`${err}`)
        }
    }

    const handleDebounceSetQuery = lodash.debounce((e) => {
        setQuery(e.target.value)
    }, 1000)

    useEffect(() => {
        handleFetchData.current()

    },[query])

    return (
        <div className='bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4'>
            <input type='text' 
                className='border border-gray-200 
                    mb-5 block w-full rouded-md p-2 
                    text-black focus:border-blue-400 transition-all'
                placeholder='Search...'
                defaultValue={query}
                onChange={e => handleDebounceSetQuery(e)}    
            >
 
            </input>

            {loading && 
                <div className='loading w-8 h-8 rounded-full  mx-auto
                    border-4 border-r-transparent border-blue-500 animate-spin'>
                    
                </div> 
            }

            {
                !loading &&
                errorMsg &&
                <p className='text-red-400 my-5'>{errorMsg}</p>
            }

            <div className='flex flex-wrap gap-5'>
                {   
                    !loading &&
                    !errorMsg &&
                    hits.length > 0 && 
                    hits.map((item, index) => (
                        <h3 key={item.objectID}
                            className='p-2 bg-gray-100 rounded-md cursor-pointer'
                        >
                            {item.title}
                        </h3>
                    ))
                }
            </div>
            
        </div>
    )
}
