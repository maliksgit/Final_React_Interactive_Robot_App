import React from 'react';
const Search =({searchField,searchTrigired})=>{
return(
		<input type='search' 
		placeholder='search by name'
		onChange={searchTrigired}/>
		);
}
export default Search;