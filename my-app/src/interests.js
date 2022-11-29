import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHtml5,
    faCss3,
    faReact
} from '@fortawesome/free-brands-svg-icons'
import '/Users/willoxtoby/Documents/GitHub/personal-portfolio/my-app/src/styles/interests.css';


const Interests = () => {
    return (
        <div>
            <h3>My Skills</h3>
            <div>
            <FontAwesomeIcon icon={faHtml5} size="3x" className='skillIcon'/>
            <FontAwesomeIcon icon={faCss3}  size="3x" className='skillIcon'/>
            <FontAwesomeIcon icon={faReact} size="3x" className='skillIcon'/>
            </div>
        </div>
    );
}

export default Interests;