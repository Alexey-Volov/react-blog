import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("John Doe")

    const [isPanding, setIsPanding] = useState(false) // Кнопка активируется или disable
    const navigate = useNavigate(); // Чтобы перейти на главную после add Post
    const clearForm = () => {
        setTitle("")
        setBody("")
        setAuthor("John Doe")
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        
        const blog = {
            title, body, author
        }
        
        setIsPanding(true)
        
        fetch("http://localhost:8000/posts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("add post");
                setIsPanding(false)
                clearForm()
                navigate("/")
            })
        // setTimeout(() => { 
            
        // }, 500)
        

    }
    return ( 
        <div className="create">
            <h2>Add a new post</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Post title</label>
                <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

                <label htmlFor="">Post content</label>
                <textarea value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>

                <label htmlFor="">Post author</label>
                <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer</option>
                </select>
                {isPanding && <button disabled>Adding Post...</button>}
                {!isPanding && <button>Create Post...</button>}
            </form>
        </div>
     );
}
 
export default Create;