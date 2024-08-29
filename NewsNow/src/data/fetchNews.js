const fetchNews = async (url) => {
    const response = await fetch(`${url}`,{method: "POST"})
    const data = await response.json();
    console.log("Data: ",data);
    // Filter the data
    // const filterData = await data.articles.filter((item)=> item.title !== "[Removed]" || item.description !== "[Removed]");
    // console.log("Filtered: ",filterData);
    return data;
}

export default fetchNews;