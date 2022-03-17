import { Card, Form, Input, Button, Space } from "antd";
import React, { useState, Fragment } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const CreateQuiz = () => {
  const [questionList, setQuestionList] = useState([]);
  const [questionTitle, setQuestionTitle] = useState("");

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const onClear = () => {
    setQuestionList([]);
  };
  const addQuestion = () => {
    setQuestionList(
      questionList.concat(
        <>
          {" "}
          <Card
            className="card-quiz"
            title={questionTitle}
            bordered={false}
            style={{ width: "100% " }}
          >
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item label="Question title" name="question">
                <Input />
              </Form.Item>
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "question"]}
                          fieldKey={[fieldKey, "question"]}
                          label="Option"
                        >
                          <Input
                            style={{ display: "block", margin: "0 auto" }}
                            placeholder="Question title"
                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form>
          </Card>
          <br />
        </>
      )
    );
  };

  return (
    <>
      <div className="toolbar">
        <div className="tool-section tool-section--lrg"></div>

        <div>
          <button className="btn btn--main btn--block" onClick={addQuestion}>
            Add Question
          </button>
          <button className="btn btn--block" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="site-card-border-less-wrapper">{questionList}</div>
    </>
  );
};
export default CreateQuiz;
