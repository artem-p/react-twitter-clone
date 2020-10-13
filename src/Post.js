import { CodeRounded } from '@material-ui/icons';
import React from 'react'
import "./Post.css";
import {Avatar} from "@material-ui/core";

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            </div>
        </div>
    )
}

export default Post
