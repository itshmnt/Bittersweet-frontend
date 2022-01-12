import "./rightbar.css";
import { Users } from '../../dummyData';
import Online from "../online/Online";

export default function Rightbar({user}) {
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
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return(
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">{user.relationship === 1 
                            ? "Single" 
                            : user.relationship === 2 
                            ? "Married" 
                            : "None" }</span>
                    </div>
                    <h4 className="rightbarTitle">User Friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hewa Gsra</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/7.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/8.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hafsr Lwuewiu</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/9.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Carter Ksaj</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hewa Gsra</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/7.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/8.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hafsr Lwuewiu</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/9.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Carter Ksaj</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hewa Gsra</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/7.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">John Carter</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/8.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Hafsr Lwuewiu</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}/person/9.jpeg`} alt="" className="rightbarFollowingImg" />
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
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
