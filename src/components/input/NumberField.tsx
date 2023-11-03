import { FormEvent } from 'react';
import { Input } from '../ui/input';

export enum NumberFieldType {
  Precentage,
  Float,
  Int
}

function NumberField(props: {
  value: number, onChange: (v: number) => void, type: NumberFieldType, disabled: boolean
}) {
  const { value, onChange, type, disabled } = props;
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    let value_as_number = Number(e.currentTarget.value);
    if (type === NumberFieldType.Precentage && value_as_number > 100) {
      value_as_number = 100;
    }
    onChange(value_as_number);
  }

  return (
    <Input max={100} type="number" value={value} onInput={(e) => handleChange(e)} disabled={disabled}/>
  );
}

export default NumberField;
