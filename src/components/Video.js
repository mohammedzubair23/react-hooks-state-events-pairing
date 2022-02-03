import React, { useState } from "react";
import video from "../data/video"

function Video() {

    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownVote] = useState(video.downvotes)

    function handlesUpvote() {
        setUpvote(upvote + 1)
    }

    function handlesDownvote() {
        setDownVote(downvote + 1)
    }

  
    return (
        <div>
        <button onClick={handlesUpvote} className="upvotes">
        👍 {upvote}
        </button>
        <button onClick={handlesDownvote} className="downvotes">
        👎 {downvote}
        </button>
        </div>
    )
}

export default Video;