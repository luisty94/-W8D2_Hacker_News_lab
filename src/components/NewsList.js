import React, { useState, useEffect } from "react";
import SingleNews from "./SingleNews";

const NewsList = ({listOfNews}) => {

   const listNews = listOfNews.map((item, index) => {
    return (
      <SingleNews key={index} item={item} position ={index + 1} />
    )
   })
    
    
    return (
        <ul>
            {listNews}
 
        </ul>
    );
};

export default NewsList;