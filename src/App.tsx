import './App.css';
import Input, { InputType } from './components/input/Input';

function App() {
  return (
    <div className="app">
      <div className="box_white_bg">
        input komponent:
        <Input label="Ladu" type={InputType.Selector}/>
        <Input label="Nimi" type={InputType.TextField}/>
        <Input label="Protsent" type={InputType.PrecentageField}/>
      </div>
    </div>
  );
}

export default App;
