import React, {useState, useEffect} from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from "./Post";
import db from './firebase';


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post 
                avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                displayName="Rafeh Qazi"
                username="cleverqazi"
                verified
                text="I challenge you to build a Twitter clone!"
                image="https://picsum.photos/500/300"
            />
        </div>
    )
}

export default Feed
