import React from "react";
import './Cards.css'

const Cards = (props) => { 
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="card bg-black">
                    <img src={props.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-title">
                             <p className="card-text mx-2 fs-3 text-primary fw-bold">{props.name}</p>
                         </div>
                        <div className="card-body">
                             <h4 className="fw-4 text-white">Age:<span className="text-primary fs-5"> {props.age}</span></h4>
                             <h4 className="fw-4 text-white">Team:<span className="text-primary fs-5"> {props.team}</span></h4>
                             <h4 className="fw-4 text-white">Nationality:<span className="text-primary fs-5"> {props.nationality}</span></h4>
                             <h4 className="fw-5 text-white">Jersey Number:<span className="text-primary fs-5"> {props.jerseyNumber}</span></h4>
                         </div>
                        </div>
                </div>
            </div>
        </div>

    )


}


export default Cards;