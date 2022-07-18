import React from 'react';
import userImg from '../../../assets/img/user.jpg';
import postImg from '../../../assets/img/post.jpg';
import { FiThumbsUp } from 'react-icons/fi';
import { VscComment } from 'react-icons/vsc';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
const Post = () => {
    return (
        <>
            <div className="post mx-auto">
                <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="user d-flex align-items-center">
                        <div className="user-img me-2">
                            <img src={userImg} alt="" />
                        </div>
                        <div className="user-name fs-20">
                            <h4>Robinhood</h4>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, cum doloribus necessitatibus nostrum tempora laudantium adipisci corporis unde sunt dignissimos.
                        </p>
                    </div>

                    <div className="post-image-inner">
                        <img src={postImg} alt="" className='post-img' />
                    </div>
                </div>

                {/* Post footer  */}
                <div className="post-footer">
                    <div className="container footer-options">
                        <div className="summaries">
                            <div className="likes">
                                <p>  <FiThumbsUp /> Robin, samy and 5 other</p>
                            </div>

                            <div className="comment-share d-flex justify-content-between gap-5">
                                <p>500 Comments</p>
                                <p>2 Shares</p>
                            </div>
                        </div>
                        <hr />
                        <div className="container actions d-flex justify-content-between pb-2">
                            <div className="like cursor-pointer"><FiThumbsUp />Like</div>
                            <div className="comment cursor-pointer"><VscComment />Comment</div>
                            <div className="share cursor-pointer"><RiShareForwardLine />Share</div>
                        </div>

                        {/* Comment box  */}
                        <div className="comment-area">
                            <hr />
                            <div className="post-comment">
                                <div className="user-img me-2">
                                    <img src={userImg} alt="" />
                                </div>
                                <div className="write w-100">
                                    <input type="text" placeholder='Write your comment' className='w-100 border-0 write-comment-box' name="" id="" />
                                </div>
                            </div>

                            <div className="comment mt-3 d-flex justify-content-start">
                                <div className="user-img-commenter me-2">
                                    <img src={userImg} alt="" />
                                </div>
                                <div className="comment-content">
                                    <div>
                                        <h4 className='commenter-name'>Rafayet Hossain</h4>
                                        <p className='comment-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;