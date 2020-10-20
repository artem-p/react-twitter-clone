import React, {useState} from 'react'
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

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

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
