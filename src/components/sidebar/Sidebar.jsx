import { Bookmark, Chat, Event, Group, QuestionMark, RssFeed, School, VideoLibrary, WorkOffOutlined } from "@mui/icons-material";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionMark className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOffOutlined className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Alter Fix</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Peter Sond</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane King</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Cheems</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/8.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Hogwortz</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/9.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
