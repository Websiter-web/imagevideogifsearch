import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs1 = () => {
  const tabs = ["photos", "videos", "gif"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state)=>state.search.activeTab)
  // store current value of active tab  // active tab valueis photo in slice which will change with clicks on buttons

  return (
    <div className="flex gap-5 p-10 justify-center">
      {tabs.map(function (elem, idx) {
        return (
            <button
            //   className="bg-emerald-600 px-5 py-2 rounded uppercase cursor-pointer active:scale-95 "
              className= {` ${(activeTab==elem?'bg-blue-700':'bg-gray-500')} transition px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
              key={idx}
              onClick={() => {
                dispatch(setActiveTabs(elem));
                // console.log(elem);
                
              }}
            >
              {elem}
            </button>
        );
      })}
    </div>
  );
};

export default Tabs1;
