// // import { fetchGIF, fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi";
// import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi";

// const App = () => {
//   // function getPhotos(){
//   //   fetchPhotos()
//   // }

//   return (
//     <div className="h-screen w-ful text-white  bg-gray-950">
//       {/* <h1 className='text-6xl bg-red-600'>I am Piyush</h1> */}

//       {/* <button onClick={getPhotos}>Get photos</button> */}
//       {/* <button onClick={fetchPhotos}>Get photos</button>  */}
//       {/* to see fo to inspect -> network -> photos */}

//       <button
//         className=" bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           // fetchPhotos('cat')
//           // fetchPhotos('dog')
//           // console.log(fetchPhotos('cat'));
//           const data = await fetchPhotos("cat");

//           // console.log(data);
//           console.log(data.results);
//         }}
//       >
//         Get photos
//       </button>

//       <button
//         className=" bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchVideos("cat");
//           // console.log(data);
//           // console.log(data.results);
//           console.log(data.videos);
//         }}
//       >
//         Get Videos
//       </button>
//       {/* <button
//         className="bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchGifs("Dog");
//           if (data) {
//             console.log("Success! Here is your data:", data);
//           } else {
//             console.log("Fetch failed. Check the console for errors.");
//           }
//         }}
//       >
//         Get Gifs
//       </button> */}
//       <button
//         className=" bg-green-400 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchGIF("cat");
//           // console.log(data);
//           console.log(data.data.data);
//         }}
//       >
//         Get Gifs
//       </button>
//     </div>
//   );
// };

// export default App;

import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    // <div className="h-screen w-ful text-white  bg-gray-950">
    <div className="w-full min-h-screen text-white  bg-gray-950">

      <Navbar />
      <ToastContainer />

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/collection' element={<CollectionPage/>}/>
    </Routes>

    </div>
  );
};

export default App;
