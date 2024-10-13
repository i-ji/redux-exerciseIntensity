import CardItem from "../parts/CardItem";

interface StrengthCalculation {
  exercisingRate: string;
  inputExercisingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  age: string;
  rastingRate: string;
  result: string;
}

const StrengthCalculation = ({
  exercisingRate,
  inputExercisingRate,
  onSubmitHandler,
  age,
  rastingRate,
  result,
}: StrengthCalculation) => {
  const strengthCalculation = "運動時心拍数";

  return (
    <CardItem
      cardTitle="運動強度の算出"
      cardDescription="スマートウォッチ等で測定した運動時心拍数から、運動強度を算出します。"
      cardExample="ex) 年齢が30歳、安静時心拍数が60bpm、運動時心拍数が130bpmなら運動強度は53.8%となる。"
      placeholder="運動時心拍数を入力してください"
      value={exercisingRate}
      onChangeHandler={inputExercisingRate}
      onSubmitHandler={onSubmitHandler}
      hiddenAge={age}
      hiddenRastingRate={rastingRate}
      result={result}
      label={strengthCalculation}
    />
  );
};

export default StrengthCalculation;
