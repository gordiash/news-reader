import React from 'react'



export default function Card(props) {
  
    return (
        <React.Fragment>
            {props.data.map(article => (
<div className=" col-12 col-sm-3 mx-3 mt-5">
          <div key={article.title} className="card text-center p-0">
            <div className="card-header">
              <h4 key={article.title} className="card-title">
                <a href={article.url}>
                  {article.title}
                </a>
              </h4>
            </div>
            
            <div className="card-body d-flex flex-wrap p-0">
            <div className="w-100 d-flex justify-content-center ">
            <img src={article.urlToImage} className="w-100 h-100" alt="imageAPI"></img>
            </div>
            
              <p className="d-block text-justify p-3 "><strong>{article.description}</strong></p>
            </div>
          </div>
          </div>
        ))}

        </React.Fragment>
    )
}
