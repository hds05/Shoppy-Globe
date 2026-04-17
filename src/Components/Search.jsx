import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../utils/searchSlice";

function Search(props) {
    // const [searchingText, setSearchingText] = useState('')

    const search = useSelector((state) => state.search.text)
    const dispatch = useDispatch()

    function handleSearch(e) {
        dispatch(setSearchText(e.target.value))
    }
    // function handleSubmit(e) {

    //     e.preventDefault();
    //     dispatch(setSearchText(searchingText))
        // // console.log(searchText)
        // const filteredData = props.productData.filter((el)=>{
        //     return (
        //     el.title.toLowerCase().includes(searchText.toLowerCase()) || 
        //     el.category.toLowerCase().includes(searchText.toLowerCase())
        // )})
        // props.setProductData(filteredData)
        // console.log(props.propductData, 'from search to check filtered product');

        // setSearchText('')
    // }
    return (
        <div className="flex m-8 gap-4 justify-center">
            <input type="text" placeholder="Search here..." className="rounded-2xl w-lg shadow-[0px_2px_6px_gray] p-2" value={search} onChange={handleSearch} />
            {/* <button type="submit">
                <img src="/search.png" className="w-[40px] transition-all hover:scale-125 cursor-pointer" alt="" />
            </button> */}
        </div>
    )
}

export default Search;