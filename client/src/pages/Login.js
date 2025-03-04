import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, Form, Input, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post(
        "http://localhost:5000/api/user/login",
        values
      );
      message.success("Login Successful");
      localStorage.setItem("SimpliCV-user", JSON.stringify(user.data));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      message.error("Login Failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("SimpliCV-user")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <h3 className="welcome">Welcome Back...</h3>
      <h1 className="brand">SimpliCV User</h1>
      <div className="app-description">
        <p>
          <strong>SimpliCV</strong> is a user-friendly resume builder
          application designed to simplify the process of creating professional
          resumes. Whether you are a fresh graduate or a seasoned professional,
          SimpliCV offers customizable templates and an intuitive interface to
          help you craft a standout resume in minutes. With SimpliCV, you can:
        </p>
        <ul>
          <li>Choose from a variety of modern and elegant resume templates.</li>
          <li>
            Easily input and format your personal information, work experience,
            education, and skills.
          </li>
          <li>Preview your resume in real-time as you build it.</li>
          <li>
            Save and download your resume in multiple formats, including PDF and
            Word.
          </li>
        </ul>
        <p>
          Our goal is to make resume building effortless and accessible for
          everyone. Start creating your resume today with SimpliCV and take the
          first step towards your next career opportunity.
        </p>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here to Register</Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
