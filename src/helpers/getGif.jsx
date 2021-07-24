


export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=FKxJiuIP8C7a3eJpySc8mHp2GJP1R7MG`;
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    })
    return gifs;
} 