import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl} from '../Constants/Constants'


function RowPost(props) {
    const[movies,setMovies] = useState([])
    const[urlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
        .catch(err=>{
            alert("network error")
        })
    },[props.url])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
      };
      const findMovieTrailer = (id)=>{
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if (response.data.results.length !==0){
                setUrlId(response.data.results[0])
            }else{
                alert('trailer not found')
            }
        })
      }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
            movies.map((obj)=>{
                return(
                    <img onClick={()=>findMovieTrailer(obj.id)} className={props.isSmall? 'small_poster':props.istoSmall? 'tosmall_poster':'poster'} src={imageUrl+obj.backdrop_path} alt="Movie Posters"/>
                )
            })
        }
        </div>
        {
          urlId?  <YouTube videoId={urlId.key} opts={opts}/>:''
        }
    </div>
  )
}

export default RowPost
