import { useState } from 'react';
import { Button } from '../ui/button';
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

type InputValue = string | number; //needs changing based on input type. better implementation possible!!!

enum InputState {
  new,
  readOnly,
  edit
}

function Input(props: InputProps) {
  const { type, label } = props;
  const [value, setValue] = useState<InputValue>("");
  const [valueTemp, setValueTemp] = useState<InputValue>("");
  const [state, setState] = useState(InputState.new);
  const readOnly = state === InputState.readOnly;

  const handleValueChange = (v: string | number) => {
    setValue(v);
    if (state === InputState.new && type === InputType.Selector) {
      setState(InputState.readOnly);
    }
  }

  const handleValueSubmit = () => {
    setValue(value);
    setValueTemp("");
    setState(InputState.readOnly);
  }

  const handleValueCancel = () => {
    setValue(valueTemp);
    setValueTemp("");
    setState(InputState.readOnly);
  }

  const handleEdit = () => {
    setValueTemp(value);
    setState(InputState.edit);
  }

  let inputElement: JSX.Element;
  switch (type) {
    case InputType.Selector :
      if (!props.values) {
        return null; // Selector type without values prop not allowed
      }
      inputElement = <Selector values={props.values}
                               selectedValue={value as string}
                               onChange={handleValueChange}
                               disabled={readOnly}/>;
      break;
    case InputType.TextField :
      inputElement = <TextField value={value as string}
                                onChange={handleValueChange}
                                label={label}
                                inputType="text"
                                disabled={readOnly}/>;
      break;
    case InputType.PrecentageField :
      inputElement = <NumberField value={value as number}
                                  onChange={handleValueChange}
                                  type={NumberFieldType.Precentage}
                                  disabled={readOnly}/>
      break;
    default:
      return null;
  }

  return (
    <InputWrapper label={label}
                  inputElement={inputElement}
                  state={state}
                  value={value}
                  handleValueSubmit={handleValueSubmit}
                  handleValueCancel={handleValueCancel}
                  handleEdit={handleEdit}
    />
  );
}

function InputWrapper(props: {
  inputElement: JSX.Element,
  label: string,
  state: InputState,
  value: InputValue,
  handleValueSubmit: () => void,
  handleValueCancel: () => void,
  handleEdit: () => void
}) {
  const { label, value, state, handleValueSubmit, handleValueCancel, handleEdit } = props;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const valueHasValue = () => value !== undefined && value !== null && value !== "";

  return (
    <>
      <div className="flex items-stretch gap-4" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Label className="font-bold float-left flex items-center justify-center" htmlFor={`id_${label}`}>{label}</Label>
        <div className="float-right">{props.inputElement}</div>
        {state !== InputState.new ?
          (state === InputState.edit ?
              <>
                <Button onClick={handleValueSubmit}>y</Button>
                <Button onClick={handleValueCancel}>cancel</Button>
              </>
              : // InputState.readOnly
              <div className={`flex items-center justify-center gap-4 ${isHovering ? "visible" : "invisible"}`}>
                <Button onClick={handleEdit}>edit</Button>
                <Button onClick={() => {
                  if (valueHasValue()) {
                    navigator.clipboard.writeText(value as string).then(
                      // value copied. add code here
                    );
                  }
                }}>copy</Button>
              </div>
          )
          :
          <Button disabled={!valueHasValue()} onClick={handleValueSubmit}>y</Button>
        }
      </div>
    </>
  );
}

export default Input;
