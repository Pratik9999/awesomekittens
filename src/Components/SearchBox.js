
import React from 'react';

const SearchBox = ({ inputChange }) => {
   return (
      <div>
         <input
            className="searchbox" 
            type="search" 
            placeholder="search Kittens..." 
            onChange={inputChange}
         />
      </div>
   );
}

export default SearchBox;