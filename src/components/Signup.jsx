import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

const title='register'
const socialTitle='login with social media'
const btnText='signup'

const Signup = () => {
    const [errorMessage, seterrorMessage]=useState('')
    const {signUpWithGmail, createUser}=useContext(AuthContext)
    const location=useLocation()
    const Navigate=useNavigate()

    const from=location.state?.from?.pathname || '/'

    const handleRegister=() => {
        signUpWithGmail().then((result) => {
            const user=result.user
            Navigate(from, {replace:true})
        }).catch((error) => {
            const errorMsg=error.message
            seterrorMessage('please provide valid email and password')
        })
    }
    const handleSignup=(event)=> {
        event.preventDefault()
        const form =event.target
        console.log(form)
        const email=form.email.value
        const password=form.password.value
        const confirmPassword=form.confirmPassword.value
        console.log(email, password ,confirmPassword)
        if(password !== confirmPassword){
            seterrorMessage('password does not match please provide acorrect password! ')
        }else{
            seterrorMessage('')
            createUser(email, password).then((userCredential) => {
                const user=userCredential.user
                alert('account created successfully done!!!')
                Navigate(from, {replace:true}) //////////error > navigate
            }).catch((error) => {
                console.log(error.message)
                alert(`${error.message}`)
            })
        }
    }
  return (
    <div>
                <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">{title}</h3>
                    <form className="account-form" onSubmit={handleSignup}>
                        <div className="form-group">
                            <input type="text" name='name' id='name' placeholder='full name' required />
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' id='email' placeholder='email address *' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='password' id='password' placeholder='password *' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='confirmPassword' id='confirmPassword' placeholder='confirm password *' required />
                        </div>
                        {/* showing message */}
                        <div>
                            {
                                errorMessage && (
                                    <div className="error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>


                        <div className="form-group">
                            <button type="submit" className='d-block lab-btn'>
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>
                
                    {/* account bottom */}
                    <div className="account-bottom">
                        <span className='d-block cate pt-10'>
                            have an account? <Link to='/login'>login</Link>
                        </span>
                        <span className="or">
                            <span>or</span>
                        </span>

                        {/* social login */}
                        <h5 className="subtitle">{socialTitle}</h5>
                        <ul className="lab-ul social-icons justify-content-center">
                            <li>
                                <button className='github' onClick={handleRegister}>
                                    <i className="icofont-github"></i></button>
                            </li>
                            <li>
                                <a href="/" className="facebook"><i className="icofont-facebook"></i></a>
                            </li>
                            <li>
                                <a href="/" className="twitter"><i className="icofont-twitter"></i></a>
                            </li>
                            <li>
                                <a href="/" className="linkedin"><i className="icofont-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="/" className="instagram"><i className="icofont-instagram"></i></a>
                            </li>

                        </ul>
                    </div>
                
                
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup