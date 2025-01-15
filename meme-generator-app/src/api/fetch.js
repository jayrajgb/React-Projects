export const fetchData = async () => {
    let response = await fetch("https://api.imgflip.com/get_memes");
    let data = await response.json();
    return data;
}