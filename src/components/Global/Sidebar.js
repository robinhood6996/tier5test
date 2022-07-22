import React from 'react';
import userImg from '../../assets/img/user.jpg'
const Sidebar = ({ currentUser }) => {
    return (
        <div className='sidebar'>
            <div className="container">
                <div className="current-user d-none d-lg-block">
                    <div className="user-icon ">
                        <div className="user-img">
                            <img src={currentUser?.profile_picture} alt="" />
                        </div>
                        <div className="user-name">
                            <h4>{currentUser?.name}</h4>
                        </div>
                    </div>
                </div>
                <div className="online-fiends mt-3 mb-3 mb-lg-0">
                    <h3 className='friend-list-title'>Online Friends</h3>
                    <div className="friends d-flex d-md-block ">
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="friend-name d-none d-md-block d-lg-block">
                                <h4>Hasan Ahmed</h4>
                            </div>
                        </div>
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                                <div className="online-icons">
                                    <span className='online-icon'></span>
                                </div>
                            </div>
                            <div className="friend-name d-none d-md-block d-lg-block">
                                <h4>Arafat Hossen</h4>
                            </div>
                        </div>
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="friend-name d-none d-md-block d-lg-block">
                                <h4>Maliha Tabassum</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;