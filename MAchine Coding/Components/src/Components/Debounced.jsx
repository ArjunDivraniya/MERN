
import React from 'react'
import {useState ,useEffect} from 'react';


const Debounced = () => {
    const [search ,setSearch] =useState('');
    const [result ,setResult] = useState([]);
    const [loading , setLoading] = useState(false);


    const Handlesearch = (e) => {
        setSearch(e.target.value)
        setLoading(true);
    }

    useEffect(() => {
        if(!search){
            setResult([]);
            setLoading(false);
            return;

        }
        const time = setTimeout(() => {
            fetch(`https://www.searchapi.io/api/v1/search?api_key=f8VizkeDZrECbwoy1oB4FDw6&engine=youtube&q=${search}`)
            .then((res) => res.json())
            .then((data) => setResult(data.videos));
            console.log("Api called");
        },2000)
setLoading(false);
        return () => clearTimeout(time);
    },[search])
  return (
    <>
    <div>Debounced Search</div>
    <input type='text' placeholder='Searh.....' value={search} onChange={Handlesearch}></input>
    <div>
        {result.map((item ,i) => (
            <div key={i}>
                <h1>{item.title}</h1>
                <p>{item.link}</p>
                <p>{item.description}</p>
                <p>{item.length}</p>
                <img src={item.thumbnail.static} alt='thumbnails'></img>
                <img src={item.thumbnail.rich} alt='thumbnails'></img>
            </div>
        ))}
    </div>
    </>
  )
}

export default Debounced