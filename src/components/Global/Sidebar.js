import React from 'react';
import userImg from '../../assets/img/user.jpg'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="container">
                <div className="user-icon">
                    <div className="user-img">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="user-name">
                        <h4>Robinhood</h4>
                    </div>
                </div>
                <div className="online-fiends mt-3">
                    <h3 className='friend-list-title'>Online Friends</h3>
                    <div className="friends">
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="friend-name">
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
                            <div className="friend-name">
                                <h4>Arafat Hossen</h4>
                            </div>
                        </div>
                        <div className="friend">
                            <div className="friend-img">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="friend-name">
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