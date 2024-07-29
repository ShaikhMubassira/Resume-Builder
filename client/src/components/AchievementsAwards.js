import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function AchievementsAwards() {
  return (
    <div>
      <Form.List name="achievements">
        {(fields, { add, remove }) => (
          <>
            <h5>
              <b>Achievements</b>
            </h5>
            <hr />
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Achievement Title",
                          },
                        ]}
                        label="Title"
                      >
                        <Input placeholder="Achievement Title" />
                      </Form.Item>
                    </div>
                    <div className="col-md-5">
                      <Form.Item
                        {...restField}
                        name={[name, "description"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Achievement Description",
                          },
                        ]}
                        label="Description"
                      >
                        <TextArea placeholder="Description" />
                      </Form.Item>
                    </div>
                    <div
                      className="col-md-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Achievement
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.List name="awards">
        {(fields, { add, remove }) => (
          <>
            <h5>
              <b>Awards</b>
            </h5>
            <hr />
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "award"]}
                        rules={[
                          { required: true, message: "Missing Award Name" },
                        ]}
                        label="Award"
                      >
                        <Input placeholder="Award Name" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "organization"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Awarding Organization",
                          },
                        ]}
                        label="Organization"
                      >
                        <Input placeholder="Awarding Organization" />
                      </Form.Item>
                    </div>
                    <div className="col-md-1">
                      <Form.Item
                        {...restField}
                        name={[name, "year"]}
                        rules={[
                          { required: true, message: "Missing Award Year" },
                        ]}
                        label="Year"
                      >
                        <Input placeholder="Year" />
                      </Form.Item>
                    </div>
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "description"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Achievement Description",
                          },
                        ]}
                        label="Description"
                      >
                        <TextArea placeholder="Description" />
                      </Form.Item>
                    </div>
                    <div
                      className="col-md-1"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Award
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default AchievementsAwards;
