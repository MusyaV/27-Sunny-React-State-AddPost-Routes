import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Message from './components/Message/Message';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Nav />
        <Routes>
          <Route path='/*' element={<Main />} />
          <Route path='/home' element={<Home nameData={props.state.nameData} />} />
          <Route path='/message' element={<Message
            messageData={props.state.messageData}
            addPost={props.addPost}
            newPostText={props.state.newPostText}
            updateNewPostText={props.updateNewPostText}
          />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <aside className="aside">aside</aside>
        <footer className="footer">footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
