import React from 'react'
import { logo_url } from '../utils/constants'
import { login_background_img } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()

    const homepageClickHandler =()=>{
        navigate('/browse')
       }
    
  return (
    <div className='bg-black  text-offwhite'>
      <img 
       className="w-44 mx-auto md:mx-0 "
        src={logo_url} alt="logo" >
        </img>
        <div className='text-center w-screen h-screen my-16'>
            <h1 className='md:text-9xl text-5xl'>OOPS !</h1>
            <h1 className='md:text-9xl text-3xl '>404 : Page not Found</h1>
         < button onClick={homepageClickHandler} className=' bg-netred font-medium text-offwhite mx-4 md:my-8 md:px-4 py-4 my-4 '>Homepage</button>
        </div>

        </div>
  
  
  )
}

export default NotFoundPage