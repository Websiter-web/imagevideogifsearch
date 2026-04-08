import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection, clearToast } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };

  const collection = useSelector((state) => state.collection.items);

  return (
    <div className=" overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between items-center mb-6">
          <h2 className=" text-3xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className=" active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 rounded text-lg font-medium "
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <h2 className=" text-3xl font-medium">Collection is Empty</h2>        
        </div>
      )}

      <div className=" flex justify-center w-full flex-wrap gap-6">
        <div></div>
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
