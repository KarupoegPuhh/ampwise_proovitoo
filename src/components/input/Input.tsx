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
    <InputWrapper inputElement={inputElement}/>
  );
}

function InputWrapper(props: { inputElement: JSX.Element }) {
  return (
    <>
      {props.inputElement}
      Input Edit
    </>
  );
}

export default Input;
