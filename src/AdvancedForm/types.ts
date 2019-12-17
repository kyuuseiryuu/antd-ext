import React from "react";
import {GetFieldDecoratorOptions, WrappedFormUtils} from "antd/es/form/Form";
import {FormProps} from "antd/lib/form";
import {FormItemProps} from "antd/es/form";

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
