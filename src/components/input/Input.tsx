import { useState } from 'react';
import { Label } from '../ui/label';
import NumberField, { NumberFieldType } from './NumberField';
import Selector from './Selector';
import TextField from './TextField';

export enum InputType {
  Selector,
  TextField,
  PrecentageField
} // can add more NumberField types like float and int when needed (see NumberFieldType)

function Input(props: { label: string, type: InputType }) {
  const { type, label } = props;

  let inputElement: JSX.Element;
  switch (type) {
    case InputType.Selector :
      inputElement = <Selector/>;
      break;
    case InputType.TextField :
      inputElement = <TextField label={label} inputType="text"/>;
      break;
    case InputType.PrecentageField :
      inputElement = <NumberField type={NumberFieldType.Precentage}/>
      break;
    default:
      return null;
  }

  return (
    <InputWrapper label={label} inputElement={inputElement}/>
  );
}

function InputWrapper(props: { inputElement: JSX.Element, label: string }) {
  const { label } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log("mouse in")
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="flex items-stretch gap-4" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Label className="font-bold float-left flex items-center justify-center" htmlFor={`id_${label}`}>{label}</Label>
        {props.inputElement}
        <p className={`flex items-center justify-center ${isHovering ? "visible" : "invisible"}`}>edit</p>
      </div>
    </>
  );
}

export default Input;
