import { useState } from "react";


const Search = () => {
  const [searchTerm, setSearchTerm]=useState('');


  return (
    <>
    <form>
      <input type="text"  placeholder="Search GitHub Username"value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button type="submit">Search</button>
    </form>
    </>
  )
}

export default Search;