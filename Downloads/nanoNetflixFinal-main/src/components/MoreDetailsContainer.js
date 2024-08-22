import React from 'react'
import { useSelector} from 'react-redux'
import useCreditsDetails from '../Hooks/useCreditsDetails'
import ActorsCard from './ActorsCard'
import useReviews from '../Hooks/useReviews'
import ReviewCard from './ReviewCard'


const MoreDetailsContainer = () => {

    const movieInfo =  useSelector((store) => store.movies?.movieDetails)
    const actors = useSelector((store)=>store.movies?.movieActors)
    const reviews = useSelector((store)=>store.movies?. movieReviews)

    const { id} = movieInfo
    


  useCreditsDetails(id)
  useReviews(id)
  
  
  
 

  return (
    <div>
      <div className=' p-4'>
      <h1 className='text-4xl text-offwhite tracking-widest my-4 font-semibold ml-4'>Actors</h1>
     <div className='flex overflow-x-auto '>
      {actors?.map((actor)=>{
        return <ActorsCard profile_path={actor?.profile_path}  name={actor?.name} />
      })}
     </div>
     <h1 className=' ml-4  text-4xl text-offwhite tracking-widest my-6 font-semibold ml-'>Reviews</h1>
      <div className=' flex overflow-x-scroll'>
       {reviews?.map((review)=>{
       return <ReviewCard name={review.author} content={review.content}  />
       })}  
      </div>
      </div>
    </div>
  )
}

export default MoreDetailsContainer