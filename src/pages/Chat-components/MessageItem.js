import React from 'react'

const MessageItem = ({message}) => {
    const {author, createdAt, text} = message;

    return (
        <li className="message-item" >

            <div className="message-item__info">
                <img src={author.avatar} alt=""/>
                <span>{author.name}</span>
            </div>

            <div className="message-item__msg">
                <span>{text}</span>
            </div>

        </li>
    )
}

export default MessageItem
