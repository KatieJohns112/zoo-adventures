import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"



export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()
// handleInputChange changes the state of the code each time a user types in the input box
    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem("app_user_id", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                 <img className="logo" src="../../../public/images/ZooAdventuresLOGO.png.png" alt="logo"></img>
                  <h1 className="zoo-adventures">Zoo Adventures</h1>
                    <h2>Please sign in</h2>
                    <fieldset className="login_fieldset">
                        <label className="email_input" htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="login_fieldset">
                        <button className="sign_in" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="register_link">
                <Link className="register-link" to="/register">Register for an account</Link>
            </section>
        </main>
    )
}

