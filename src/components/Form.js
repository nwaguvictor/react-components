import React from 'react'

const Form = () => {
    return (
        <div>
            <form action="" className="reg_form">
                <h2>Register with Us</h2><hr/><br/>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" placeholder="Jane" />
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" placeholder="Doe" />
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder="janedoe@mail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" />
                <input type="submit" value="Join Now"/>
            </form>
        </div>
    )
}

export default Form
