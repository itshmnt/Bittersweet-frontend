import { MoreVert } from "@mui/icons-material";
import "./post.css";
// import { Users } from '../../dummyData';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchUser = async () => {
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    },[])

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || PF+"person/noAvatar.png" } alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="PostCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" onClick={likeHandler} className="likeIcon" />
                        <img src={`${PF}heart.png`} alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
