import { useState,useEffect } from "react"
import service from "../appwrite/config";
import { Container, PostCard } from "../components";


function AllPosts() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {}, []);

    service.getPosts([]).then((post) => {
        if(post){
            setPosts(post.documents);
        }
    })
  return (
    <div className="py-8 w-full">

        <Container>
            <div className="flex flex-wrap">
                {
                    posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post}/>
                        </div>
                    ))
                }
            </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
