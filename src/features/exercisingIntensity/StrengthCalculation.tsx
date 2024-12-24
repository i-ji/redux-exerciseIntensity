import CardItem from "../../components/parts/CardItem";

interface StrengthCalculation {
  exercisingRate: string;
  inputExercisingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  exerciseIntensityCalculate: (e: React.FormEvent<HTMLFormElement>) => void;
  result: string;
}

const StrengthCalculation = ({
  exercisingRate,
  inputExercisingRate,
  exerciseIntensityCalculate,
  result,
}: StrengthCalculation) => {
  return (
    <CardItem
      cardTitle="運動強度の算出"
      cardDescription="スマートウォッチ等で測定した運動時心拍数から、運動強度を算出します。"
      cardExample="ex) 年齢が30歳、安静時心拍数が60bpm、運動時心拍数が130bpmなら運動強度は53.8%となる。"
      placeholder="運動時心拍数を入力してください"
      value={exercisingRate}
      onChangeHandler={inputExercisingRate}
      onSubmitHandler={exerciseIntensityCalculate}
      result={result}
      label="運動時心拍数"
      name="exercisingRate"
    />
  );
};

export default StrengthCalculation;
