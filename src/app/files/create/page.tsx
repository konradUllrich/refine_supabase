"use client";

import { Create, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import { Form, Input, Select, Upload, UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm({});

  console.log({ values: formProps.form?.getFieldsValue(["name", "image"]) });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          getValueFromEvent={(event: UploadChangeParam): string => {
            const { fileList } = event;
            return fileList[0].uid;
          }}
          noStyle
        >
          <Upload.Dragger
            action={"http://localhost:3000/api/upload"}
            listType="picture"
            maxCount={5}
            multiple
          >
            <p className="ant-upload-text">Drag & drop a file in this area</p>
          </Upload.Dragger>
        </Form.Item>
      </Form>
    </Create>
  );
}
