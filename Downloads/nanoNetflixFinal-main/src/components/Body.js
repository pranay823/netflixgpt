
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import MoviesDetails from './MoviesDetails'



const Body = () => {

       const appRouter = createBrowserRouter([
        {
          path :"/",
          element : <Login />
        },
        {
         path : "/browse",
         element : <Browse  />
        },
        {
          path :"/movies/:movieTitle",
           element: <MoviesDetails />
          }
      ])
    

  return (
    <div>
 
      <RouterProvider router={appRouter} />
    </div>
  )
}


export default Body