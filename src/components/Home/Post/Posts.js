import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = ({ currentUser }) => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/facebook-posts')
            .then(res => {
                setPosts(res?.data);
                console.log('post', res?.data);
            }).catch(err => {

            })
    }, []);


    return (
        <>
            <section className='posts-section'>
                <div className='container my-2 my-lg-5'>
                    <div className="posts ">
                        {
                            posts?.map(mainposts => {
                                return mainposts?.posts?.map(post => {
                                    return <Post key={post?.id} currentUser={currentUser} post={post} user={mainposts?.user} />
                                })

                            })
                        }


                    </div>
                </div>
            </section>
        </>
    );
};

export default Posts;