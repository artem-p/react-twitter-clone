import React, { useState } from 'react'
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        
        let image = tweetImage ? tweetImage : "https://picsum.photos/500/300?random=" + Math.random();

        db.collection('posts').add({
            displayName: "Rafeh Qazi",
            username: "cleverqazi",
            verified: true,
            text: tweetMessage,
            image: image,
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        })

        
        setTweetMessage("");
        setTweetImage("");
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        type="text">
                    </input>

                </div>

                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text">
                </input>

                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
