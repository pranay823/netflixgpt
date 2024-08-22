import Header from "./Header";
import { login_background_img } from "../utils/constants";
import { useState , useRef } from "react";
import { validateEmail, validatePassword} from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword ,  signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
const Navigate = useNavigate();
const [isSignInForm ,setisSignInForm] = useState(true)
const [Email,setEmail] = useState(null);
const [Password , setPassword ] = useState(null);
const [isEmailValid, setisEmailValid] = useState(null);
const [isPasswordValid ,setisPasswordValid] = useState(null);  
const [errorMessage , seterrorMessage] = useState(null);

const firstName = useRef(null);
const lastName = useRef(null);
const dispatch = useDispatch();



const handleSubmit=()=>{
  if(isEmailValid || isPasswordValid){ 
    seterrorMessage("Fill the Credentials");
    return
  } 
 
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, Email , Password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: firstName.current.value + " " + lastName.current.value,
      }).then(() => {
        const {email, uid , displayName} = auth.currentUser;
        dispatch(addUser({email:email , uid:uid , displayName : displayName}));

      }).catch((error) => {
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });
  }
   
  else{
    signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage("User not found");
  });
  }
}

const handleEmail=(value)=>{
  setEmail(value);
  setisEmailValid(validateEmail(Email)); 
}

const handlePassword=(value)=>{
  setPassword(value);
  setisPasswordValid(validatePassword(Password)); 
}

const ToggleSignInForm =()=>{
setisSignInForm(!isSignInForm);
}

  return (
    <div>
      <Header/>
      <div className="absolute w-full h-full">
        <img  className="w-full h-full fixed"
          src={ login_background_img} alt="background" ></img>
      </div>
      <form 
      onSubmit={(e)=>{e.preventDefault()}}
      className="bg-black bg-opacity-80  absolute w-3/12 mx-auto left-0 right-0 my-36 p-8 flex flex-col text-white min-h-[450px] min-w-[300px] ">
        <h1 className="text-3xl font-medium mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm && <input ref={firstName}  type="text" placeholder="First Name" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray"></input>}
       { !isSignInForm && <input ref={lastName} type="text" placeholder="Last Name" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray"></input>}
        <input type="text"  placeholder="Email or Phone number" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray outline-none"
       onChange={(e)=>{handleEmail(e.target.value)}}
       ></input>
         <p className="text-orange-600 text-xs ml-2 mb-2  ">{isEmailValid}</p>
        <input type="password" placeholder="Password" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray outline-none "
        onChange={(e)=>{handlePassword(e.target.value)}}
        ></input>
         <p className="text-orange-600 text-xs ml-2 mb-2  ">{isPasswordValid}</p>
         <p className="text-red-700 ml-2 ">{errorMessage}</p>
        <button 
        onClick={handleSubmit}
        className=" w-full mx-auto py-2 bg-red-600 h-[50px] rounded-md mt-10  " > {isSignInForm ? "Sign In" : "Sign Up"}</button> 
        <div className="my-4 flex justify-between">
            <label >
            <input type="checkbox" className="" ></input>
            <span className="px-2  text-gray-400 text-sm">Remember me</span>
            </label>
           <p className=" text-gray-400 text-sm mt-1">Need Help?</p>
        </div>
        <p className="text-light-gray my-5"> {isSignInForm ? "New to Netflix?" : "Already Rejistered"}<span onClick={ToggleSignInForm} className="text-white mx-1 cursor-pointer underline"> {isSignInForm ? "Sign up now" : "Sign In now"}</span></p>
      </form>
    </div>
  );
};

export default Login;
