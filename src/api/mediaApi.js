// code from where we will call api and fetch api

import axios from "axios";

// api key import method
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
// const KLIPY_KEY = import.meta.env.VITE_KLIPY_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

// export async function fetchPhotos(query, page = 1, per_page = 20) {
//   // const res = axios.get('https://api.unsplash.com/search/photos') // to get photos
//   // <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next" // we use shorter method intead of hard code writing with {} // shorter and structured method

//   // const res = axios.get('https://api.unsplash.com/search/photos',{
//   const res = await axios.get("https://api.unsplash.com/search/photos", {
//     // pass query in params
//     params: { query, page, per_page }, // passing query in params
//     headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }, //make sure to write everything same
//   });
//   // console.log(res);
//   return res.data;
// }

// // export async function fetchVideos(query,page=1 , per_page=15){
// export async function fetchVideos(query, per_page = 15) {
//   const res = await axios.get("https://api.pexels.com/v1/videos/search", {
//     // params:{query,page,per_page},
//     params: { query, per_page },
//     // headers:{Authorization:`Client-ID ${PEXELS_KEY}`} // nop need for client ( always check documentation to check how to use such keys etc)
//     headers: { Authorization: PEXELS_KEY },
//   });
//   return res.data;
// }


// // export async function fetchGIF(query,limit=20) {
// //   const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
// //     params:{q:query,key:GIGHY_KEY,limit},
// //   })
// //   return res
// // }
// export async function fetchGIF(query,limit=20) {
//   const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
//     params:{api_key:GIPHY_KEY,q:query,limit},
//   })
//   return res
// }



// normalize method 1 do in media api 
// method 2 do directly in component file




export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

export async function fetchVideos(query, per_page = 15) {
  const res = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return res.data;
}


export async function fetchGIF(query,limit=20) {
  const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
    params:{api_key:GIPHY_KEY,q:query,limit},
  })
  return res
}