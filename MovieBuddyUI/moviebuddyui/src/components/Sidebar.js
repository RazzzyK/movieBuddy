import React from 'react';
import '../css/Sidebar.css';

const Sidebar = ({ friends, isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? 'Hide' : 'Show'}
            </button>
            {isOpen && (
                <div className="friends-list">
                    <h2>Movie Buddies!</h2>
                    <ul>
                        {friends.map((friend, index) => (
                            <li key={index}>{friend.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
