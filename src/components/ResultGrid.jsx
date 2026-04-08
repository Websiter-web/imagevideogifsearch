import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
// one level up from current --> ..
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import { use } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return; // no value passed in query so stop ( used when we change tabs) without entering anything , to prevent error
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query); // using let bcz is is {} block scoped
            // console.log(data); // select photos then input query search then get data

            // console.log(response.data); // find url
            

            // data = response.results; // store results array in data
            data = response.results.map((item) => ({
              // () so the element can be created as obj // normalization - only these properites will show in array now
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url:item.links.html,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            // console.log(data);

            // console.log(response.videos); // find url
            

            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGIF(query);
            // console.log(data);
            // data = response.data.data

            // console.log(response.data.data);
            
            data = response.data.data.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title || "gif",
              // thumbnail: item.images.downsized.url,
              thumbnail: item.images.fixed_height_small_still.url,
              src: item.images.original.url,
              url: item.url,
            }));
          }
          // console.log(data);
          // console.log(data[0]); // different paths for each type of data so we will normalize the dat it in api calling sowe can write one method to call data(specifics) from all 3 using one normal method

          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1 className="px-6">loading...</h1>;

  return (
    <div className=" flex justify-center w-full flex-wrap gap-6 overflow-auto px-10">
      {/* <button onClick={}>Get Data</button> */}
      {results.map((item, idx) => {
        // return <div key={idx}>{item.title}</div>;
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>;
      })}
    </div>
  );
};

export default ResultGrid;
