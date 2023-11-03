export enum NumberFieldType {
  Precentage,
  Float,
  Int
}

function NumberField(props: { type: NumberFieldType }) {
  return (
    <div>
      Number field
    </div>
  );
}

export default NumberField;
