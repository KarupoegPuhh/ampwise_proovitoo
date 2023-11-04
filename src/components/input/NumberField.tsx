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
    if (type === NumberFieldType.Precentage) {
      if (value_as_number > 100) {
        value_as_number = 100;
      } else if (value_as_number < 0) {
        value_as_number = 0;
      }
    }
    if (type !== NumberFieldType.Float) {
      value_as_number = Math.round(value_as_number);
    } // can change logic of what is allowed with each NumberFieldType
    onChange(value_as_number);
  }

  //Percentage
  return (
    <>
      <Input max={100}
             min={0}
             type="number"
             value={value}
             onInput={(e) => handleChange(e)}
             disabled={disabled}
             placeholder="%"
      />
    </>
  );
}

export default NumberField;
