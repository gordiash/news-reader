import React from 'react'

export default function Card(props) {

    return (
        <React.Fragment>
        <div className="card">
            <div className="card-header">
                <h4>{props.data.name}</h4>
            <small>{props.temp}</small>
            </div>

        </div>
    
        </React.Fragment>
    )
}
