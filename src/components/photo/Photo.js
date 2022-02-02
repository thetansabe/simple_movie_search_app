import React, { useEffect, useState } from "react";
import axios from "axios";

//https://picsum.photos/v2/list
//https://picsum.photos/v2/list?page=2&limit=100
//call api axios

const getPhotos = async (page) => {
    try {
        //luu ket qua vao 1 bien response -> dung await voi get
        const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
        return res.data
    } 
    catch(err){
        console.log('Error: ', err)
    }
}

const Photos = () => {
    //tao mang luu anh lay ve tu api
    const [photos, setPhotos] = useState([])
    const [nextPage, setNextPage] = useState(1)

    const loadMorePhotos = async () => {
        //goi api -> cach lay ket qua:
        const images = await getPhotos(nextPage)
        const newPhotos = [...photos, ...images]
        setPhotos(newPhotos)
        setNextPage(nextPage + 1)
    }

    //goi api -> side effect -> useEffect
    useEffect(() => {
        loadMorePhotos()
    }, [])

    return(
        <div>
            <div className="grid grid-cols-4 gap-5 p-5">
                {
                    photos.length > 0 &&
                    photos.map((item, index) => (
                        <div className="p-3 bg-white shodow-md rounded-lg" key={item.id}>
                            <img
                                src={item.download_url}
                                alt={item.author}
                                className = 'w-full h-full object-cover rounded-lg'
                            />
                        </div>
                    ))
                }
            </div>

            <div className="text-center">
                <button
                    className='bg-purple-600 text-white px-8 py-4 inline-block'
                    onClick={loadMorePhotos}
                >
                    Load more photos
                </button>
            </div>
        </div>
    )
}

export default Photos