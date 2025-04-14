import { useAuth } from "../auth/auth";

function CreatePost() {
    const auth = useAuth();

    const canCreate = auth.user?.rolIs === "admin" || auth.user?.rolIs === "author";

    return (
        <div className="create-post-page">
            <h1>Create a New Post</h1>
            {canCreate ? (
                <form>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" required></textarea>

                    <button type="submit">Create Post</button>
                </form>
            ) : (
                <p>You do not have permission to create a post.</p>
            )}
        </div>
    )
}

export default CreatePost;