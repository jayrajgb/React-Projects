const fetchNews = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=eeab0111904b4256873321997b6ed7b5",{method: "GET"})
    const data = await response.json();
    console.log(data);
    return data;
}

export default fetchNews;