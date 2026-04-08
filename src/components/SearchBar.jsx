import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()


    const submitHandler = (e)=>{
        e.preventDefault(e);

        // console.log('form Submitted');
        // console.log(text);
        dispatch(setQuery(text))

        setText('')
        
    }

  return (
    <div>
      {/* <form onSubmit={submitHandler} className="flex p-10 gap-5 bg-gray-900"> */}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex py-10 px-10 gap-5 bg-(--c1)">

        <input required
        value={text}
        onChange={(e)=>{
            // console.log("change");
            // console.log(e.target.value);
            setText(e.target.value); // two way binding
            
        }}
        className=" w-full border-2 px-4 py-2 text-xl rounded outline-none"
        type="text" 
        placeholder="Search anything.." 
        />
        <button 
        className="active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer ">
            Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
