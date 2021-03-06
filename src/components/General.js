import React, { useState, useEffect } from "react";
import {getHeadlines} from "../API/ApiRequest";
import Card from "../components/Card/Card";
import CardsContainer from "../containers/CardsContainer";
import NewsOnPage from './NewsOnPage'

export default function General(props) {
  let [news, setArticles] = useState([]);

  let category = props.category;
  let language = props.language;
  let perPage = props.perPage


  useEffect(() => {
    if (news !==[]) {
      getHeadlines(language, category, perPage).then(
        ({ data }) => data.articles && setArticles(data.articles));
    }
  }, [category, language, perPage]);



  return (
    <CardsContainer>

<NewsOnPage
  selectedPerPage={props.selectedPerPage}
  perPage={props.perPage}
/>

  <Card data={news} />

    </CardsContainer>
  );
}
