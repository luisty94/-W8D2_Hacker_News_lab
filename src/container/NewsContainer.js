import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";

const NewsContainer = () => {
    const [ listOfNews, setListOfNews ] = useState([])
    const [ newsData, setNewsData ] = useState([])

    useEffect( () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then( res => res.json())
            .then( (data) => {
                const newData = data.slice(0,20);
                const promises = newData.map((id) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json());
                
                });
                Promise.all(promises)
                .then((results) => {
                    setListOfNews(results)
                })

            });
            
    }, []);
    return (
        <>
            <h1>Hacker News</h1>
            <NewsList listOfNews={listOfNews}/>
        </>
    )
};

export default NewsContainer;