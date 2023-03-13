import React from 'react'
import List from './List';
import Create from './Create';
import ModalDelete from './ModalDelete';
import ModalAdd from './ModalAdd';
import ModalRem from './/ModalRem';
import Messages from './Messages';
import CookieMonster from './CookieMonster';
import Login from './Login';

function LuckyNumbers() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-5">
            <Login />
            <Create />
            <CookieMonster />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
    </div>
      <ModalDelete />
      <ModalAdd />
      <ModalRem />
      <Messages />
    </>
  )
}

export default LuckyNumbers;