import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";

function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{

      const res = await axios.get("/timeline/6423dca96e3e7af176c251ba");
      console.log(res);
    }
    fetchPosts();

    
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Share />
        {Posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })} */}
      </div>
    </div>
  );
}

export default Feed;
