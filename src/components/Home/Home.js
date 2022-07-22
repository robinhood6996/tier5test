import React, { useState } from 'react';
import Header from '../Global/Header';
import Sidebar from '../Global/Sidebar';
import Posts from './Post/Posts';

const Home = () => {
    const [currentUser, setCurrentUser] = useState({ name: 'Fakrul Islam', profile_picture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' })
    return (
        <>
            <Header currentUser={currentUser} />
            <div className="">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <Sidebar currentUser={currentUser} />
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <Posts currentUser={currentUser} />
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;