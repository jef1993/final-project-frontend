import React from "react"

import Banner from "../components/Banner"

// export const SignUp = ({setUsername, setPassword, submitHandler}) => {
//     return (
//         <form onSubmit={submitHandler}>
//             <input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
//             <input placeHolder="Password" onChange={(e) => setPassword(e.target.value)}/>
//             <button type="submit">Sign In</button>
//         </form>
//     )
// }

function SignInPage (props) {
    return (
        <div>
            <Banner title={props.title} subTitle={props.subTitle} text={props.text}/>
            <form>
                <input placeholder="Username"/>
                <input placeholder="Password"/>
                <buttton type ="submit">Sign In</buttton>
            </form>
        </div>
    )
}

export default SignInPage