import CardItem from "../parts/CardItem";

interface RateCalculation {
  exerciseIntensity: string;
  inputExerciseIntensity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  age: string;
  rastingRate: string;
  result: string;
}

const RateCalculation = ({
  exerciseIntensity,
  inputExerciseIntensity,
  onSubmitHandler,
  age,
  rastingRate,
  result,
}: RateCalculation) => {
  const RateCalculationLabel = "運動強度";
  return (
    <CardItem
      cardTitle="運動時心拍数の算出"
      cardDescription="あなたが目標とする運動強度から、目安となる運動時心拍数を算出します。"
      cardExample="ex) 年齢が30歳、安静時心拍数が60bpm、練習強度が70%なら運動時心拍数は151bpmとなる。"
      placeholder="運動強度を入力してください"
      value={exerciseIntensity}
      onChangeHandler={inputExerciseIntensity}
      onSubmitHandler={onSubmitHandler}
      hiddenAge={age}
      hiddenRastingRate={rastingRate}
      result={result}
      label={RateCalculationLabel}
    />
  );
};

export default RateCalculation;
