import React from "react";
import Link from "next/Link";

export const Menu = () =>{
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/" legacyBehavior>
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/speakers" legacyBehavior>
                        <a className="nav-link">Speakers</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};