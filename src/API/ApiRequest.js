import axios from "axios";

const KEY = "apiKey=925379af6d9e4229a6988be6c6c836fa";

const baseURL = "http://newsapi.org/v2/";

const getHeadlines = async (country, category, perPage) => {
  const topHeadlinesURL =
    `${baseURL}top-headlines?pageSize=${perPage}&country=${country}&category=${category}&` +
    KEY;

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



export{
  getHeadlines
 
}
