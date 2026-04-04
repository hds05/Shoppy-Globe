import { useState } from "react";

function Search(){
    const [searchText, setSearchText] = useState('')
    
    function handleSearch(e){
        setSearchText(e.target.value)
    }
    function handleSubmit(){
        console.log(searchText)
        setSearchText('')
    }
    return (
        <div className="flex m-8 gap-4 justify-center">
            <input type="text" required className="rounded-2xl w-[200px] shadow-[0px_2px_6px_gray] p-2" value={searchText} onChange={handleSearch} />
            <img src="/search.png" className="w-[40px] transition-all hover:scale-125 cursor-pointer" onClick={handleSubmit} alt="" />
        </div>
    )
}

export default Search;