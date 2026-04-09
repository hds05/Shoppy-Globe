import { useState } from "react";

function Search(props){
    const [searchText, setSearchText] = useState('')
    
    function handleSearch(e){
        setSearchText(e.target.value)
    }
    function handleSubmit(){
        // console.log(searchText)
        const filteredData = props.productData.filter((el)=>{
            return (
            el.title.toLowerCase().includes(searchText.toLowerCase()) || 
            el.category.toLowerCase().includes(searchText.toLowerCase())
        )})
        props.setProductData(filteredData)
        console.log(props.propductData, 'from search to check filtered product');
        
        // setSearchText('')
    }
    return (
        <div className="flex m-8 gap-4 justify-center">
            <input type="text" placeholder="Search here..." className="rounded-2xl w-lg shadow-[0px_2px_6px_gray] p-2" value={searchText} onChange={handleSearch} />
            <img src="/search.png" className="w-[40px] transition-all hover:scale-125 cursor-pointer" onClick={handleSubmit} alt="" />
        </div>
    )
}

export default Search;