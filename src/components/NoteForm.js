import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const NoteForm = props => {
  const [value, setValue] = useState({ content: props.content || '' });
  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.action({
      variables: {
        ...value
      }
    });
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note Content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
};

export default NoteForm;

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;
