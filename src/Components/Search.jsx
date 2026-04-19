import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchText, setSearchText } from "../utils/searchSlice";

function Search(props) {

    const search = useSelector(selectSearchText)
    const dispatch = useDispatch()

    function handleSearch(e) {
        dispatch(setSearchText(e.target.value))
    }

    return (
        <div className="flex m-8 gap-4 justify-center">
            <input type="text" placeholder="Search here..." className="bg-white rounded-2xl w-lg shadow-[0px_2px_6px_gray] p-2" value={search} onChange={handleSearch} />

        </div>
    )
}

export default Search;