import React,{useContext,useEffect} from 'react';
import './login.css';
import { User, Lock, PaperPlaneRight } from "phosphor-react";
// import {users} from '../asset/user'
import {uescontext} from '../Components/context/userContext'
const Login = () => {
   const {userlogin, handelUserlogin} = useContext(uescontext)
useEffect(() => {
  if(userlogin !==null){
   // navigate('/home')

  }

}, [userlogin])


  const handelLogin = async(e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      handelUserlogin(email,password)
  
  }
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content" >
          <form className="login"  onSubmit={(e)=>handelLogin(e)}>

            <div className="login__field">

              <User size={23} weight="fill" color='hsl(0deg 0% 17%)' />
              <input type="text"
                name='email'
               
                className="login__input" placeholder=" Email" />
            </div>
            <div className="login__field">
              <Lock size={23} weight="fill" color='hsl(0deg 0% 17%)' />
              <input type="password"
                name='password'
               
                className="login__input" placeholder="Password" />
            </div>
            <button  type='submit' className="button login__submit">
              <span className="button__text">Log In Now</span>
              <PaperPlaneRight size={23} weight="fill" className='sgin' />
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;