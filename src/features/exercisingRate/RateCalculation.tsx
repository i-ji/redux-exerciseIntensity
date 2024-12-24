import CardItem from "../../components/parts/CardItem";

interface RateCalculation {
  exerciseIntensity: string;
  inputExerciseIntensity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  exerciseRateCalculate: (e: React.FormEvent<HTMLFormElement>) => void;
  result: string;
}

const RateCalculation = ({
  exerciseIntensity,
  inputExerciseIntensity,
  exerciseRateCalculate,
  result,
}: RateCalculation) => {
  return (
    <CardItem
      cardTitle="運動時心拍数の算出"
      cardDescription="あなたが目標とする運動強度から、目安となる運動時心拍数を算出します。"
      cardExample="ex) 年齢が30歳、安静時心拍数が60bpm、練習強度が70%なら運動時心拍数は151bpmとなる。"
      placeholder="運動強度を入力してください"
      value={exerciseIntensity}
      onChangeHandler={inputExerciseIntensity}
      onSubmitHandler={exerciseRateCalculate}
      result={result}
      label="運動強度"
      name="exerciseIntensity"
    />
  );
};

export default RateCalculation;
