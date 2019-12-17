import React from 'react';
import { Form } from "antd";
import {GetFieldDecoratorOptions, WrappedFormUtils} from "antd/es/form/Form";
import {FormItemProps} from "antd/es/form";
import {FormProps} from "antd/lib/form";

export interface Field {
  id: string;
  label: React.ReactNode;
  node: React.ReactNode;
  options?: GetFieldDecoratorOptions;
  formItemProps?: FormItemProps;
}
export interface AdvancedFormProps {
  fields: Field[];
  form: WrappedFormUtils;
  formProps?: FormProps;
}

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

