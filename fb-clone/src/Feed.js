import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from "./Post";
import Brett from "./image0.jpeg";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic={Brett}
                message='Wow this is cool'
                timestamp="this is a timestamp"
                username="Bwinterstrom"
                image="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
            />
            <Post
                profilePic={Brett}
                message='Wow this is cool'
                timestamp="this is a timestamp"
                username="Bwinterstrom"
            />
            <Post />
        </div>
    )
}

export default Feed
