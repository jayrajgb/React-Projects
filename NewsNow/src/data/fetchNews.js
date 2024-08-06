const fetchNews = async (url) => {
    const response = await fetch(`${url}`,{method: "GET"})
    const data = await response.json();
    console.log(data);
    return data;
}

export default fetchNews;