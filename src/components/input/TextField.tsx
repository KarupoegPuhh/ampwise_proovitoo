import { HTMLInputTypeAttribute } from 'react';
import { Input } from "../ui/input";

function TextField(props: { label: string, inputType: HTMLInputTypeAttribute, placeholderText?: string }) {
  const { label, inputType, placeholderText } = props;

  return (
    <Input className="float-right" type={inputType} id={`id_${label}`} placeholder={placeholderText}/>
  );
}

export default TextField;
