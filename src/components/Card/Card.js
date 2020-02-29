import React from 'react'

export default function Card(props) {
    return (
        <React.Fragment>
            {props.data.map(article => (
          <div key={article.title} className="card my-3 mx-3 col-11 col-sm-5 text-center">
            <div className="card-header">
              <h4 key={article.title} className="card-title">
                <a href={article.url}>
                  {article.title}
                </a>
              </h4>
            </div>
            
            <div className="card-body d-flex align-content-center">
            <img src={article.urlToImage} className="w-50 h-50 mx-auto my-auto d-block" alt="image"></img>
              <p className="card-text align-self-center ml-2"><strong>{article.description}</strong></p>
            </div>
          </div>
        ))}
        </React.Fragment>
    )
}
