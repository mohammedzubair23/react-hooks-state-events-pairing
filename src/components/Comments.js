import React, { useState } from "react"
import Comment from "./Comment"


function Comments(comments) {

    const [toggleComment, setToggleComment] = useState(true)

    function handlesComments() {
        setToggleComment((toggleComment) => !toggleComment)
    }

    const commentsArr = comments.comments.map((comment) => {
        return (
            <Comment 
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
            />
        )
    })
    return (
    <div>
    <button onClick={handlesComments}> 
    {toggleComment ? "Hide Comments" : "Show Comments"}
    </button>
    <hr />
    <h3>{commentsArr.length} Comments</h3>
    <p>{toggleComment ? commentsArr : null}</p>
    </div>
    )
}

export default Comments