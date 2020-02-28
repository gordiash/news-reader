import axios from "axios";

const KEY = "apiKey=925379af6d9e4229a6988be6c6c836fa";

const baseURL = "http://newsapi.org/v2/";


export const getHeadlines = async (country, category) => {


  const topHeadlinesURL =`${baseURL}top-headlines?country=${country}&category=${category}&` + KEY
   

  const result = await axios
    .get(topHeadlinesURL)
    .then(res => {
      return res;
    })
    .catch(e => {
      console.log(e);
    });

  return result;
};

export default getHeadlines;
