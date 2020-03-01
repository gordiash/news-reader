import React from 'react'


const newsOnPage = [10,20,30,40,50,60,70,80,90,100]

export default function NewsOnPage(props) {

  console.log(props)
    return (
        <div id="perPage" className="form-group mr-4 col-10 col-sm-12 m-0 p-0 d-flex justify-content-end">
      <label>News per Page:</label>
      <select value={props.perPage} className="form-control form-control-sm col-3 col-sm-1 ml-2" id="CountryList" onChange={props.selectedPerPage}>
        <option  value={props.perPage}>{props.perPage}</option>
          {newsOnPage.map(perPage => (
            <option key={perPage} value={perPage}>{perPage}</option>
          ))}
        </select>
      </div>
    )
}
