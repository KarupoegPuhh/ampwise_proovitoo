import { FormEvent, HTMLInputTypeAttribute } from 'react';
import { Input } from "../ui/input";

function TextField(props: {
  value: string,
  onChange: (v: string) => void,
  label: string,
  disabled: boolean,
  inputType: HTMLInputTypeAttribute,
  placeholderText?: string
}) {
  const { value, onChange, label, inputType, disabled, placeholderText } = props;

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  }

  return (
    <Input value={value}
           onInput={(e) => handleChange(e)}
           type={inputType}
           id={`id_${label}`}
           disabled={disabled}
           placeholder={placeholderText}/>
  );
}

export default TextField;
