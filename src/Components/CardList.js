
import React from "react";
import Card from "./Card";


const CardList = ( {kittens} ) => {
   return (
      <div className="cardList_container">
         {
            kittens.map(user => {
               return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
            })
         }
      </div>
   );
}

export default CardList;