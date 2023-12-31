import './App.css';
import Input, { InputType } from './components/input/Input';

function App() {
  return (
    <div className="app">
      <div className="flex items-start gap-8 flex-col">
        input komponent:
        <Input label="Ladu" type={InputType.Selector} values={["valik 1", "valik 2"]}/>
        <Input label="Nimi" type={InputType.TextField}/>
        <Input label="Protsent" type={InputType.PrecentageField}/>
      </div>
    </div>
  );
}

export default App;
