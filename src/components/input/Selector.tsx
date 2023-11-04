import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

function Selector(props: {
  values: string[],
  selectedValue: string,
  onChange: (v: string) => void,
  disabled: boolean,
  placeholderText?: string
}) {
  const { values, selectedValue, onChange, disabled, placeholderText } = props;

  return (
    <Select disabled={disabled} value={selectedValue} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholderText}/>
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => <SelectItem value={value}>{value}</SelectItem>)}
      </SelectContent>
    </Select>
  );
}

export default Selector;
