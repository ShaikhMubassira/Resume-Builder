import React from "react";
import "./../resources/DefaultLayout.css";
import { Button, Dropdown } from "antd";
import { UserOutlined  } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("SimpliCV-user"));
  const navigate = useNavigate()
  const items = [
    {
      key: "1",
      label: (
        <Link to='/home'>
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to='/profile'>
          Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: <span onClick={()=>{
        localStorage.removeItem('SimpliCV-user')
        navigate('/login')
      }}>LogOut</span>,
    },
  ];

  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>SimpliCV</h1>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
