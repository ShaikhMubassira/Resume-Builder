import React, { useState } from "react";
import { Button, Form, message, Spin, Tabs } from "antd";
import DefaultLayout from "../components/DefaultLayout";
import PersonalInfo from "../components/personalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProject from "../components/ExperienceProject";
import axios from "axios";
import AchievementsAwards from "../components/AchievementsAwards";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("SimpliCV-user"));

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:5000/api/user/update', { ...values, _id: user._id });
      localStorage.setItem('SimpliCV-user' , JSON.stringify(result.data))
      setLoading(false);
      message.success("Profile update successful");
    } catch (error) {
      setLoading(false);
      message.error("Profile update failed");
    }
  };

  const items = [
    {
      key: "1",
      label: "Personal Info",
      children: <PersonalInfo />,
    },
    {
      key: "2",
      label: "Skills & Education",
      children: <SkillsEducation />,
    },
    {
      key: "3",
      label: "Experience / Projects",
      children: <ExperienceProject />,
    },
    {
      key: "4",
      label: "Achievements / Awards",
      children: <AchievementsAwards />,
    },
  ];

  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4>Update Profile</h4>
        <hr />
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={user}
          autoComplete="off"
        >
          <Tabs defaultActiveKey="1" items={items} />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              UPDATE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
