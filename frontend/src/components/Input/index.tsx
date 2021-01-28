import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core'

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IInputProps> = ({
  name,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container defaultValue={defaultValue} ref={inputRef} {...rest} />
  );
};

export default Input;