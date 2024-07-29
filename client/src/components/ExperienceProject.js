import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";

function ExperienceProject() {
  return (
    <div>
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <h5>
              <b>Experiences</b>
            </h5>
            <hr />
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <div key={name} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "company"]}
                        rules={[
                          { required: true, message: "Missing Company Name" },
                        ]}
                        label="Company"
                      >
                        <Input placeholder="Company Name" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "role"]}
                        rules={[
                          { required: true, message: "Missing Company role" },
                        ]}
                        label="Role"
                      >
                        <Input placeholder="Work Role" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "years"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Years Of Experience",
                          },
                        ]}
                        label="Years"
                      >
                        <Input placeholder="Years Of Experience" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "place"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Company's Place",
                          },
                        ]}
                        label="Place"
                      >
                        <Input placeholder="Company's Place" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[
                          { required: true, message: "Missing Year Range" },
                        ]}
                        label="Year Range"
                      >
                        <Input placeholder="Year Range" />
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
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <h5>
              <b>Projects</b>
            </h5>
            <hr />
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <div key={name} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        rules={[
                          { required: true, message: "Missing Project Title" },
                        ]}
                        label="Title"
                      >
                        <Input placeholder="Title" />
                      </Form.Item>
                    </div>
                    <div className="col-md-6">
                      <Form.Item
                        {...restField}
                        name={[name, "description"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Project Description",
                          },
                        ]}
                        label="Description"
                      >
                        <TextArea placeholder="Project Description" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Project Year Range",
                          },
                        ]}
                        label="Year Range"
                      >
                        <Input placeholder="Project Year Range" />
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
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default ExperienceProject;
