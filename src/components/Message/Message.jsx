import React from "react";
import s from "./Message.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Message = (props) => {
  
  let newPostElement = React.createRef();

  // функция, которая добавляет новый пост пост 
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText("");
  }

  // функция, которая будет проверять изменения в textarea
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }

  // !!! обязательно бежим по массиву через map
  // Map – коллекция для хранения записей вида ключ:значение .
  let messageElements = props.messageData.map(message => <MessageItem
    src={message.src}
    name={message.name}
    message={message.message}
    addPost={props.addPost}
    updateNewPostText={props.updateNewPostText}
  />);

  return (
    <div className={s.message}>
      <div className={s.textA}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols="25" rows="3"></textarea>
        <br />
        <button onClick={addPost}>Add post</button>
      </div>

      {messageElements}

    </div>
  );
};

export default Message;