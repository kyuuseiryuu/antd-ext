import React from 'react';
import { Form } from "antd";
import { AdvancedFormProps } from "./types";

export const AdvancedForm: React.FC<AdvancedFormProps> = props => {
  return (
    <Form {...props.formProps}>
      {props.fields.map((field) => (
        <Form.Item key={field.id} label={field.label} {...field.formItemProps}>
          {props.form.getFieldDecorator(field.id, field.options)(field.node)}
        </Form.Item>
      ))}
    </Form>
  );
};

