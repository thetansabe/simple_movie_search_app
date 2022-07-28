export function normalize_movie_section(str){
    str = str.toLowerCase()
    str = str.replace(' ','_')
    return str
}

export async function getGenre(id){
    const link = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.REACT_APP_MOVIEDB_KEY
    //const link = process.env.REACT_APP_MOVIEDB_GENRES + process.env.REACT_APP_MOVIEDB_KEY
    try{
        const genres = await fetch(link)
        console.log(genres)
    }
    catch(e){
        console.log('Failed fetch genre')
    }
}