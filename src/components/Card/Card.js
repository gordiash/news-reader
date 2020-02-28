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
            <img src={article.urlToImage} className="card-img" alt="image"></img>
            <div className="card-body">
              <p className="card-text">{article.description}</p>
            </div>
          </div>
        ))}
        </React.Fragment>
    )
}
