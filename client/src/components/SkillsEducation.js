import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function SkillsEducation() {
  return (
    <div>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <h5><b>Education</b></h5>
            <hr />
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "qualification"]}
                        rules={[{ required: true, message: "Missing Qualification" }]}
                        label="Qualification"
                      >
                        <Input placeholder="Qualification" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "percentage"]}
                        rules={[{ required: true, message: "Missing Percentage" }]}
                        label="Percentage"
                      >
                        <Input placeholder="Percentage" />
                      </Form.Item>
                    </div>
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "institution"]}
                        rules={[{ required: true, message: "Missing Institution" }]}
                        label="Institution"
                      >
                        <Input placeholder="Institution" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[{ required: true, message: "Missing Year Range" }]}
                        label="Year Range"
                      >
                        <Input placeholder="Year Range" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2" style={{ display: 'flex', alignItems: 'center' }}>
                      <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' }} onClick={() => remove(name)} />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <h5><b>Skills</b></h5>
            <hr />
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "technology"]}
                        rules={[{ required: true, message: "Missing Technology" }]}
                        label="Technology"
                      >
                        <Input placeholder="Technology" />
                      </Form.Item>
                    </div>
                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "rating"]}
                        rules={[{ required: true, message: "Missing Skill Rating" }]}
                        label="Rate Out Of 10"
                      >
                        <Input placeholder="Skill Rating" />
                      </Form.Item>
                    </div>
                    <div className="col-md-3" style={{ display: 'flex', alignItems: 'center' }}>
                      <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' }} onClick={() => remove(name)} />
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
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default SkillsEducation;
