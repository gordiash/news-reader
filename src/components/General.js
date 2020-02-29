import React, { useState, useEffect } from "react";
import getHeadlines from "../API/ApiRequest";
import Card from "../components/Card/Card";
import CardsContainer from "../containers/CardsContainer";

export default function General(props) {
  let [data, setArticles] = useState([]);

  let category = props.location.state.category;
  let language = props.location.state.language;

  useEffect(() => {
    if (data !==[]) {
      getHeadlines(language, category).then(
        ({ data }) => data.articles && setArticles(data.articles));
    }
  }, [category, language]);



  return (
    <CardsContainer>
      <Card data={data} />
    </CardsContainer>
  );
}
