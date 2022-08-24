import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
const Header_Top = (props) => {
    return (
        <nav>
            <div className="container">
                <div className="row justify-content-center">
                    <h4 className="col-auto stolName">
                <FiCheckCircle />      {props.stolNumber}
                    </h4>
                </div>
                <div className="row justify-content-center">
                    <h1 className="col-auto restoranName">
                        {props.restoranName}
                    </h1>
                </div>
            </div>
        </nav>
    )
}

export default Header_Top;