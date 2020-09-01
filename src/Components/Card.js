
import React from 'react';


const Card = ( {id, name, email} ) => {
   return (
      <div className="card">
         <img  src={`https://robohash.org/${id}?set=set4&size=160x160`} alt="kitty" />
         <div className="userInfo">
            <h2>{name}</h2>
            <p>{email}</p>
         </div>
      </div>
   );
}

export default Card;
