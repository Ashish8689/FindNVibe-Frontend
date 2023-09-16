import React from 'react'
import { GoogleLogin } from 'react-google-login'

function Login() {

    const googleSuccess = async (res) =>{
        const result = await res;
        localStorage.setItem("profile", JSON.stringify({profile: result.profileObj, token: result.tokenId}))
    }

    const googleFaliure = (error) =>{
        console.log("Falied",error);
    }


    return (
        <GoogleLogin
        clientId='368294222481-t6cnktr942mnk7ptsbsicfmjbo4mt3rh.apps.googleusercontent.com'
        render={(renderProps)=>(
            <button className="google-login-button" onClick={renderProps.onClick} disabled={renderProps.disabled} >Google Login</button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFaliure}
        cookiePolicy="single_host_origin"
        />
    )
}

export default Login
