import { HTMLInputTypeAttribute } from 'react';
import { Input } from "../ui/input";

function TextField(props: {
  label: string,
  disabled: boolean,
  inputType: HTMLInputTypeAttribute,
  placeholderText?: string
}) {
  const { label, inputType, placeholderText } = props;

  return (
    <Input type={inputType} id={`id_${label}`} placeholder={placeholderText}/>
  );
}

export default TextField;
