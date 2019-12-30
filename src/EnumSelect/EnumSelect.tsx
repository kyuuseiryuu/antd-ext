import React, { forwardRef } from 'react';
import { Select } from "antd";
import { SelectProps } from "antd/es/select";

type Props = {
  enumerator?: any,
  nameAsValue?: boolean;
} & SelectProps;

export const EnumSelect: React.FC<Props> = forwardRef(props => {
  const { enumerator = {}, nameAsValue, ...selectProps } = props;
  const keys = Object.keys(enumerator);
  if (keys.length % 2 === 1) {
    keys.pop();
  }
  const labels = !isNaN(Number(keys[0])) ? keys.slice(keys.length / 2) : keys;
  return (
    <Select {...selectProps}>
      {labels.map((label, index) => (
        <Select.Option key={index} value={nameAsValue ? label : enumerator[label]}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
});

