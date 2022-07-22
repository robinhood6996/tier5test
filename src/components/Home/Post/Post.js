import React, { useEffect, useState } from 'react';
import userImg from '../../../assets/img/user.jpg';
import postImg from '../../../assets/img/post.jpg';
import { FiThumbsUp } from 'react-icons/fi';
import { VscComment } from 'react-icons/vsc';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
const Post = ({ currentUser, post, user }) => {
    const [localPOst, setLocalPost] = useState({});
    const [localUser, setLocalUser] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState({});
    const [maxLikes, setMaxLikes] = useState();

    useEffect(() => {
        setLocalUser(user);
        setLocalPost(post);
        setLikes(post?.likes)
        setComments(post?.comments);
        setMaxLikes(post?.likes + 1);
        // setIsLiked(post?.liked)
        // console.log('post', post);
    }, [post, user]);


    const postComment = () => {
        let makeComment = { user: {} };
        makeComment.user.name = currentUser?.name;
        makeComment.user.profile_picture = currentUser?.profile_picture;
        makeComment.text = comment;
        setComments(prevComments => [...prevComments, makeComment])
    }

    return (
        <>
            <div className="post mx-auto mb-3">
                <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="user d-flex align-items-center">
                        <div className="user-img me-2">
                            <img src={localUser?.profile_picture} alt="" />
                        </div>
                        <div className="user-name fs-20">
                            <h4>{localUser?.name}</h4>
                        </div>
                    </div>
                    <div className="post-menu">
                        <BsThreeDots />
                    </div>
                </div>

                {/* post content  */}

                <div className="post-content">
                    <div className="post-caption">
                        <p className="caption">
                            {
                                localPOst?.body
                            }
                        </p>
                    </div>

                    <div className="post-image-inner">
                        <img src={localPOst?.image} alt="" className='post-img' />
                    </div>
                </div>

                {/* Post footer  */}
                <div className="post-footer">
                    <div className="container footer-options">
                        <div className="summaries">
                            <div className="likes">
                                {/* <div><FiThumbsUp /></div> */}
                                <div>{likes} Likes</div>
                            </div>

                            <div className="comment-share d-flex justify-content-between gap-2">
                                <p>{comments?.length} Comments</p>

                                <div className="comment-summary">
                                    <p>2 Shares</p>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="container actions ">
                            <div className={`like cursor-pointer ${isLiked ? 'liked' : ''}`} onClick={() => {

                                if (likes === maxLikes) {
                                    setLikes(likes - 1)
                                    setIsLiked(!isLiked)
                                } else {
                                    setLikes(likes + 1);
                                    setIsLiked(!isLiked)
                                }
                            }}><div><FiThumbsUp /></div><div>Like</div></div>
                            <div className="comment cursor-pointer"><VscComment />Comment</div>
                            <div className="share cursor-pointer"><RiShareForwardLine />Share</div>
                        </div>

                        {/* Comment box  */}
                        <div className="comment-area">
                            <hr />
                            <div className="post-comment">
                                <div className="user-img me-2">
                                    <img src={localUser?.profile_picture} alt="" />
                                </div>
                                <div className="write w-100">
                                    <input type="text" onKeyUp={(e) => {
                                        if (e.key === 'Enter') {
                                            postComment()
                                        } else {
                                            setComment(e.target.value);
                                            console.log('key', e.target.keyCode)
                                        }

                                    }} placeholder='Write your comment' className='w-100 border-0 write-comment-box' name="" id="" />
                                </div>
                            </div>

                            {
                                comments?.map((comment, index) => {
                                    return <div className="comment mt-3 d-flex justify-content-start" key={index}>
                                        <div className="user-img-commenter me-2">
                                            <img src={comment?.user?.profile_picture} alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <div>
                                                <h4 className='commenter-name'>{comment?.user?.name}</h4>
                                                <p className='comment-text'>{comment?.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;