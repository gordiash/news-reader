import React from 'react'

export default function CardsContainer(props) {
    return (
        <main className="d-flex flex-row flex-wrap justify-content-center mt-5">
            {props.children}
        </main>
    )
}
