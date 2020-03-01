import React from "react";

const list =
  "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za";
const listArray = list.split(" ");


export default function CountryList(props) {
  

  return (
    
      <div className="form-group mr-4 col-10 col-sm-3 m-0 p-0">
      <label>Select Country:</label>
      <select value={props.language} className="form-control form-control-sm col-4" id="CountryList" onChange={props.selectedLanguage}>
        <option  value={props.language}>{props.language}</option>
          {listArray.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
  
  );
}
