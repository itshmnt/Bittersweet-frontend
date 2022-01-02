import "./rightbar.css";
import { Users } from '../../dummyData';
import Online from "../online/Online";

export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have birthday today.</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                    <h4 className="rightbarTitle">User Friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hewa Gsra</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hafsr Lwuewiu</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Carter Ksaj</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hewa Gsra</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hafsr Lwuewiu</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Carter Ksaj</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hewa Gsra</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hafsr Lwuewiu</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Carter Ksaj</span>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
