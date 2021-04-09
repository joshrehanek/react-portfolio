import React from 'react';
import { Link } from "react-router-dom";


export default function CardData(props) {
    return (
        <>
            <li className="card-data">
                <Link className="card-data-link" to={props.path}>
                    <figure className="card-data-wrap" data-category={props.label}>
                        <img
                            src={props.src}
                            alt="Accessibility"
                            className="card-data-img" />
                    </figure>
                    <div className="card-data-info">
                        <h4 className="card-data-text">
                            {props.text}
                        </h4>
                    </div>
                </Link>
            </li>
        </>
    )
}
