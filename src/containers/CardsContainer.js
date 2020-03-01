import React from 'react'

export default function CardsContainer(props) {
    return (
        <main className="container-fluid d-flex flex-wrap flex-rows justify-content-center mt-5">
            {props.children}
        </main>
    )
}
