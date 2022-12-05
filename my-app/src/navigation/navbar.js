import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from "@fortawesome/free-solid-svg-icons"
import "/Users/willoxtoby/Documents/GitHub/personal-portfolio/my-app/src/styles/navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" className="navBrand">
                <FontAwesomeIcon icon={faCode} size="2x"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;