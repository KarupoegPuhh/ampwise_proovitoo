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

interface InputBaseProps {
  label: string;
  type: InputType;
  values?: never;
}

interface InputPropsSelectorStringValues {
  label: string;
  type: InputType;
  values: string[];
} // add interfaces with different values type if needed

type InputProps = InputBaseProps | InputPropsSelectorStringValues;

type InputValue = string | number | null; //needs changing

enum InputState {
  new,
  readOnly,
  edit
}

function Input(props: InputProps) {
  const { type, label } = props;
  const [value, setValue] = useState<InputValue>(null);
  const [state, setState] = useState(InputState.new);
  const readOnly = state === InputState.readOnly;

  let inputElement: JSX.Element;
  switch (type) {
    case InputType.Selector :
      if (!props.values) {
        return null; // Selector type without values prop not allowed
      }
      inputElement = <Selector values={props.values} disabled={readOnly}/>;
      break;
    case InputType.TextField :
      inputElement = <TextField label={label} inputType="text" disabled={readOnly}/>;
      break;
    case InputType.PrecentageField :
      inputElement = <NumberField type={NumberFieldType.Precentage} disabled={readOnly}/>
      break;
    default:
      return null;
  }

  return (
    <InputWrapper label={label}
                  inputElement={inputElement}
                  state={state}
                  setState={setState}
                  value={value}
                  setValue={setValue}/>
  );
}

function InputWrapper(props: {
  inputElement: JSX.Element,
  label: string,
  state: InputState,
  setState: (s: InputState) => void,
  value: InputValue,
  setValue: (v: InputValue) => void
}) {
  const { label, state } = props;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="flex items-stretch gap-4" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Label className="font-bold float-left flex items-center justify-center" htmlFor={`id_${label}`}>{label}</Label>
        <div className="float-right">{props.inputElement}</div>
        {state !== InputState.new &&
          (state === InputState.edit ?
              <><p>y</p><p>cancel</p></> :
              <div className={`flex items-center justify-center ${isHovering ? "visible" : "invisible"}`}>
                <p>edit</p>
                <p>copy</p>
              </div>
          )
        }
      </div>
    </>
  );
}

export default Input;
