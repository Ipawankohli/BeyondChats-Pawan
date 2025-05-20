import React from 'react';

const ChatWindow = () => {
    return (
        <div className="chat-window">
            <h2>Chat with Support</h2>
            <div className="messages">
                <div className="message">Hello! How can I help you today?</div>
            </div>
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
        </div>
    );
};

export default ChatWindow;
