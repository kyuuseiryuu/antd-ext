import React from 'react';
import {AdvancedForm} from "../../index";
import {Form, Input} from "antd";
import {WrappedFormUtils} from "antd/es/form/Form";

type Props = {
  form: WrappedFormUtils;
};

const AdvancedFormDemo: React.FC<Props> = props => {
  return (
    <div>
      <AdvancedForm
        form={props.form}
        fields={[
          { id: 'aaa', label: 'aaa', node: <Input /> },
          { id: 'bbb', label: 'bbb', node: <Input />, options: { rules: [{ required: true }] } },
          { id: 'ccc', label: 'ccc', node: <Input /> },
        ]}
        formProps={{
          layout: 'inline',
        }}
      />
    </div>
  );
};

export default Form.create<Props>()(AdvancedFormDemo);
