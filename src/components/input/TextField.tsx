import { HTMLInputTypeAttribute } from 'react';
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function TextField(props: { label: string, inputType: HTMLInputTypeAttribute, placeholderText?: string }) {
  const { label, inputType, placeholderText } = props;

  return (
    <div>
      TextField
      <Label htmlFor={`id_${label}`}>{label}</Label>
      <Input type={inputType} id={`id_${label}`} placeholder={placeholderText}/>
    </div>
  );
}

export default TextField;
