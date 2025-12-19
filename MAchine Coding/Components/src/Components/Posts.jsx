import react , {useState ,useEffect} from 'react';


const Posts = () => {
const [posts ,usePosts] =useState(null);

useEffect(()=> {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => usePosts(data));
},[]);

return (

    <div>
      <h1>User Posts</h1>
      { posts ? (posts.map( (i) => (
        <div key = {i.id}>
            <div> 
            <h2>{i.title}</h2> 
            <h3>by User {i.userId}</h3>
            </div>
            <h4>{i.body}</h4>
        </div>
      ))) : (<p>Loading posts...</p>) }
    </div>

    )
}


export default Posts;