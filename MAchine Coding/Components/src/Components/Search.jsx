import React from 'react'

const search = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("")

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
            items: ["Printer", "Router", "Hard Disk"]
        } 
    ]

    const hadndlesearch = () => {
        if (search.trim() == " ") {
            setSearch("Please enter searchh term");
            return;
        }
       const result = data.filter((i) => i.name.includes(search.name.toLowerCase().trim()) || i.)
    }
    return (
        <>
            <div>
                <form onClick={handlesearch}>
                    <input type='text' placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button tyoe='sebmit' >Search</button>
                </form>
            </div>
        </>
    )
}

export default search