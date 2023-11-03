import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

function Selector(props: { values: string[], disabled: boolean, placeholderText?: string }) {
  const { values, disabled, placeholderText } = props;

  return (
    <Select disabled={disabled}>
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
