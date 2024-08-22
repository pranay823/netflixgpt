import { logo_url, SupportedLanguages } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser , removeUser} from '../utils/userSlice';
import { useEffect, useState } from "react";
import { toggleGptsearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleSearch } from "../utils/searchSlice";



const Header = ( ) =>{

   const navigate = useNavigate();
   const dispatch = useDispatch();
    const user = useSelector((store)=>store.user)
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
    const [open , setopen]=useState(false)
    const showSearch = useSelector((store)=>store.search?.showSearch)

    


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const {email, uid , displayName} = user;
       dispatch(addUser({email:email , uid:uid , displayName : displayName}));
       navigate("/browse")

      } 
      else {
     dispatch(removeUser());
     navigate("/")
      }
    });
  },[dispatch, navigate]);

  const hamburgerClickHandler =()=>{
  setopen(!open)
  }
  const searchClickHandler=()=>{
  dispatch(toggleSearch())
  }

  const gptSearchHandler =()=>{
    dispatch(toggleGptsearchView())
    }

  const signoutHandler =()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    })
  }

  const languageHandler =(e)=>{
  dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full flex flex-col md:flex-row justify-between " >
      <img 
       className="w-44 mx-auto md:mx-0 "
        src={logo_url} alt="logo" >
        </img>
    { user && (<div>
      
     <div onClick={hamburgerClickHandler} className="bg-red-700 absolute end-8 text-5xl top-9 z-40 md:hidden">
      <GiHamburgerMenu />
      </div>
    <div className={`bg-black p-6 md:absolute md:right-12 md:top-3 md:p-0 md:bg-none    w-full md:w-auto   md:mr-24 md:h-12 h-48  mt-5 flex  md:flex-row flex-col transition-all ease-in duration-500 md:opacity-100  ${open ? 'opacity-100':'absolute  top-[-1500px] opacity-0'}  `}>
     {showGptSearch && <select className="mb-2 md:mb-0 md:mr-2 p-2  " onChange={languageHandler}>
       {SupportedLanguages.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select> }
      <button onClick={searchClickHandler}
      className=" text-offwhite font-bold p-2  bg-red-600 md:mr-2">{showSearch ? "HomePage":"Search"}</button>
      <button onClick={gptSearchHandler}
      className=" text-offwhite font-bold p-2  bg-red-600 md:mr-2">{showGptSearch?"Homepage":"GptSearch"}</button>

      <button onClick={signoutHandler} className=" text-offwhite font-bold bg-red-600 p-2 md:mt-0 mt-2  " >Sign out</button>
      </div> </div>)}
    </div>
  );
};

export default Header;
