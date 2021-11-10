import "./App.css";
import ClassCompo from "./components/ClassCompo";
import Counter from "./components/Counter";
import ListRender from "./components/ListRender";
import WithJSX from "./components/WithJSX";
import WithoutJSX from "./components/WithoutJSX";
import GeoLocation from "./components/GeoLocation";

function App() {
  return (
    <div className="App">
      <WithJSX name="JSX!" />
      <WithoutJSX />
      <ClassCompo />
      <Counter />
      <ListRender />
      <GeoLocation />
    </div>
  );
}

export default App;
