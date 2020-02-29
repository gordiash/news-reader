import React, { useState, useEffect } from "react";
import getHeadlines from "../API/ApiRequest";
import Card from "../components/Card/Card";
import CardsContainer from "../containers/CardsContainer";

export default function General(props) {
  let [data, setArticles] = useState([]);

  let category = props.location.state.category;

  useEffect(() => {
    if (data !==[]) {
      getHeadlines("pl", category).then(
        ({ data }) => data.articles && setArticles(data.articles));
    }
  }, [category]);

console.log(data)

  return (
    <CardsContainer>
      <Card data={data} />
    </CardsContainer>
  );
}
