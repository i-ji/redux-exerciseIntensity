import "./App.css";
import Description from "./features/Description";
import Calculation from "./features/Calculation";

function App() {
  return (
    <div className="max-w-[768px] px-5 mx-auto my-10">
      <h1 className="text-center font-bold text-3xl mb-5">
        運動強度測定（カルボーネン法）
      </h1>
      <Description />
      <Calculation />
    </div>
  );
}

export default App;
