import React from 'react'
import { useSelector } from 'react-redux'
import { ImgCDN_URL } from '../utils/constants'


const MoviesCard = ({posterPath}) => {
  
  const showSearch = useSelector((store)=>store.search.showSearch)

  if(!posterPath) return


  return (
    <div className={` p-2 ${showSearch ? "w-14 " : "w-28 md:w-48"} `}>
    <img  
     alt="pp" src={ImgCDN_URL+ posterPath}></img>
    </div>
  )
}

export default MoviesCard

