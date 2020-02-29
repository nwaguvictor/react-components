import React from 'react'

function Header(props) {
    return (
        <div className={props.className}>
            {/* logo and navigation bars */}

            <div className="logo"><h1>Logo</h1></div>
            <div className="navbar">
                <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Articles</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
