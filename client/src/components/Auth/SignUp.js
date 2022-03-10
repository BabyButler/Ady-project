import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {signUp,signIn} from '../../Redux/Action/Action'
import {useHistory} from 'react-router-dom'
import style from './Sign.css'

function SignUp() {
	const dispatch = useDispatch()
	const history = useHistory()
	const [username,setUserName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const signup = () =>{
		dispatch(signUp({username,email,password},history))
	}
	const [emailSignIn,setEmailSignIn] = useState('')
	const [passwordSignIn,setPasswordSignIn] = useState('')
	const signin = () =>{
		dispatch(signIn({email:emailSignIn,password:passwordSignIn},history))
	}
  return (
    <body className='body-sign'>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<div className="signupinput">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" onChange={e => setUserName(e.target.value)} />
					<input type="email" name="email" placeholder="Email" required="" onChange={e => setEmail(e.target.value)} />
					<input type="password" name="pswd" placeholder="Password" required="" onChange={e => setPassword(e.target.value)}/>
					<button onClick={() => signup()}>Sign up</button>
					</div>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" onChange={e => setEmailSignIn(e.target.value)} />
					<input type="password" name="pswd" placeholder="Password" required="" onChange={e => setPasswordSignIn(e.target.value)} />
					<input className='btn' onClick={()=> signin()} defaultValue='Login' />
				</form>
			</div>
	</div>
</body>
  )
}
export default SignUp