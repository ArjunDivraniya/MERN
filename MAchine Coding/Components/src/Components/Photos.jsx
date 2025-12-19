import React, { useState, useEffect } from 'react';

const Photos = () =>{

    const [currpage, setCurrpage] = useState(1);
    const [photos, setPhotos] = useState(null);
    const [offset, setOffset] = useState(0);
    const [totalcount, setTotalcount] = useState(5000);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchdata, setSearchdata] = useState(null);



    const featchPhotos = (offset) => {

        fetch(`https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=10`)
            .then(responce => responce.json())
            .then(data => setPhotos(data));
           

    }
    useEffect (() => {
        featchPhotos(offset);

    } ,[currpage]); 

    const next = () => {
        setOffset((preof) => preof + 10);
        setCurrpage((page) => page + 1);
        featchPhotos(offset);


    }

    const previous = () => {
        if (currpage === 1) return false;
        if (offset >= 10) {
            setOffset((preof) => preof - 10);
            setCurrpage((page) => page - 1);
            featchPhotos(offset);
        }
    }

    const handlesearch = (e) => {
        setSearchQuery(e.target.value);
      
    }

    const searchbutton = () => {

          fetch(`http://localhost:5000/search?q=${searchQuery}`)
        .then (responce => responce.json())
        .then (data => setSearchdata(data));
        setPhotos(searchdata);
    }

    return (
        <>
        <div>
            <h2>Search Photos</h2>
            <input 
            type='text'
            value ={searchQuery}
            onChange={handlesearch}
            placeholder='Search photos by title'
            />
            <button onClick={searchbutton}>Search</button>
        </div>
          <div>
                <button
                    onClick={previous}
                    disabled={currpage === 1}
                    >Previous
                </button>
                <span>Page {currpage} </span>
                <button onClick={next} disabled={currpage >= Math.ceil(totalcount/10)}>Next</button>
            </div>

            <div>
                <h1>User Photos</h1>
                

                {photos ? (photos.map((i) => (
                    <div key={i.id}>
                        <h1>    Photo ID: {i.id}</h1>
                        <h1>{i.title}</h1>
                        <img src={i.url} alt={i.title} />


                    </div>
                ))) : (<p>Loading photos...</p>)}

            </div>


          


        </>

    )
}
export default Photos;