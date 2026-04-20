import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchText, setInputEmpty, setSearchText } from "../utils/searchSlice";

function Search(props) {

    // getting searched text from redux store
    const search = useSelector(selectSearchText)

    // dispatch hook to send actions to Redux store
    const dispatch = useDispatch()

    // function to dispatch the searched text to Redux store whenever the user types
    function handleSearch(e) {
        dispatch(setSearchText(e.target.value))
    }

    return (
        // container for search input
        <div className="flex m-8 gap-4 justify-center">
            <input type="text" placeholder="Search here..." className="bg-white rounded-2xl w-lg shadow-[0px_2px_6px_gray] p-2"
                // input value comes from redux store
                value={search}
                // updates the Reduux state whenever input changes
                onChange={handleSearch} />

            {/* Button to clear the input */}
            {
                search.length ? (<button onClick={() => dispatch(setInputEmpty())} className="cursor-pointer">
                    <img src="/cancel.png" className="w-[35px]" alt="" />
                </button>) : ''
            }

        </div>
    )
}

export default Search;