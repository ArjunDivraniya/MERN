// import { set } from 'mongoose';
import React, {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("")
    const [filter, setFilter] = useState([])

    let data = [
        {
            name: "Arjun",
            adress: "Junagadh",
            items: ["Mobile", "laptop", "watch"]

        },
        {
            name: "Divraniya",
            adress: "Rajkot",
            items: ["TV", "Fridge", "AC"]   
        }  ,
        {
            name: "Gita",
            adress: "Ahmedabad",
            items: ["Tablet", "Camera", "Speakers"]   
        },
        {
            name: "Mehta",
            adress: "Surat",
            items: ["Printer", "laptop", "Hard Disk"]
        } 
    ]

    const handlesearch = (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            setSearch("Please enter searchh term");
            return;
        }
       const result = data.filter((i) => i.name.includes(search.toLowerCase().trim()) || i.items.filter((item) => item.toLowerCase().trim().includes(search.toLowerCase().trim())).length > 0 );
       setFilter(result);
       setSearch("");
    }
    return (
        <>
            <div>
                <form onSubmit={handlesearch}>
                    <input type='text' placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type='submit' >Search</button>
                </form>
            </div>

            <div>
                {filter.map((item ,i)=> (
                    <div key={i}>
<h1>{item.name}</h1>
<h3>{item.adress} </h3>
<ul>
    {item.items.map((it, i) => (
        <li key={i}>{it}</li>
    ))}
</ul>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Search