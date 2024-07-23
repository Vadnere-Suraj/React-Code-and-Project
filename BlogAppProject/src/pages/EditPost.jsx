import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
    const [post,setPost] = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                setPost(post);
            })
        } else {
            navigate('/');
        }
    }, [navigate,slug]);

    return post ? (<div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>) : null
  
}

export default EditPost
