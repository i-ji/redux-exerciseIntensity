import { useState } from "react";
import RateCalculation from "@/components/layout/RateCalculation";
import StrengthCalculation from "@/components/layout/StrengthCalculation";
import Tables from "@/components/layout/Tables";
import Form from "@/components/parts/Form";
import {
  exerciseIntensityHandler,
  exercisingRateHandler,
  ageValidate,
  rastingRateValidate,
} from "@/utils/functions";

const Calculation = () => {
  // 入力された年齢を取得
  const [age, setAge] = useState<string>("");
  const inputAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  // 入力された安静時心拍数を取得
  const [rastingRate, setRastingRate] = useState<string>("");
  const inputRastingRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRastingRate(e.target.value);
  };
  // 入力された運動時心拍数を取得
  const [exercisingRate, setExercisingRate] = useState<string>("");
  const inputExercisingRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExercisingRate(e.target.value);
  };
  // 入力された運動強度を取得
  const [exerciseIntensity, setExerciseIntensity] = useState<string>("");
  const inputExerciseIntensity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExerciseIntensity(e.target.value);
  };

  const [ageForTable, setAgeForTable] = useState("");
  const [rastingRateForTable, setRastingRateForTable] = useState("");

  // 結果表示（運動時心拍数）
  const [exercisingRateResult, setExercisingRateResult] = useState<string>("");
  const exerciseRateCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 年齢、安静児心拍数、運動時心拍数のどれか一つでも空欄ならリターン
    if (age === "" || rastingRate === "" || exerciseIntensity === "") {
      setExercisingRateResult("");
      return;
    }

    // 運動強度が100%より上、または0%未満なら結果を削除してリターン
    if (Number(exerciseIntensity) > 100 || Number(exerciseIntensity) < 0) {
      setExerciseIntensity("");
      setExercisingRateResult("");
      return;
    }

    // 年齢のバリデーション
    if (!ageValidate(age)) {
      setAge("");
      setExercisingRateResult("");
      return;
    }

    // 安静時心拍数のバリデーション
    if (!rastingRateValidate(rastingRate)) {
      setRastingRate("");
      setExercisingRateResult("");
      return;
    }

    // テーブル用の年齢
    setAgeForTable(age);
    // テーブル用の安静時心拍数
    setRastingRateForTable(rastingRate);

    setExercisingRateResult(
      `あなたの運動時心拍数は${Math.round(
        Number(exercisingRateHandler(exerciseIntensity, age, rastingRate))
      )}bpmです。`
    );
  };

  // 結果表示（運動強度）
  const [exerciseIntensityResult, setExercisingIntensityResult] =
    useState<string>("");

  const exerciseIntensityCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 年齢、安静児心拍数、運動時心拍数のどれか一つでも空欄ならリターン
    if (age === "" || rastingRate === "" || exercisingRate === "") {
      setExercisingIntensityResult("");
      return;
    }

    // 運動時心拍数が安静時心拍数未満、または最大心拍数より上なら結果を削除してリターン
    if (
      Number(exercisingRate) < Number(rastingRate) ||
      Number(exercisingRate) > 220 - Number(age)
    ) {
      setExercisingRate("");
      setExercisingIntensityResult("");
      return;
    }

    // 年齢のバリデーション
    if (!ageValidate(age)) {
      setAge("");
      setExercisingRateResult("");
      return;
    }

    // 安静時心拍数のバリデーション
    if (!rastingRateValidate(rastingRate)) {
      setRastingRate("");
      setExercisingRateResult("");
      return;
    }

    // テーブル用の年齢
    setAgeForTable(age);
    // テーブル用の安静時心拍数
    setRastingRateForTable(rastingRate);

    setExercisingIntensityResult(
      `あなたの運動強度は${Math.round(
        Number(exerciseIntensityHandler(exercisingRate, age, rastingRate))
      )}%です。`
    );
  };

  return (
    <div>
      <Form
        age={age}
        inputAge={inputAge}
        rastingRate={rastingRate}
        inputRastingRate={inputRastingRate}
      />
      <div className="mt-10 sm:flex gap-5 space-y-5 sm:space-y-0 mb-10">
        <RateCalculation
          exerciseIntensity={exerciseIntensity}
          inputExerciseIntensity={inputExerciseIntensity}
          onSubmitHandler={exerciseRateCalculate}
          age={age}
          rastingRate={rastingRate}
          result={exercisingRateResult}
        />
        <StrengthCalculation
          exercisingRate={exercisingRate}
          inputExercisingRate={inputExercisingRate}
          onSubmitHandler={exerciseIntensityCalculate}
          age={age}
          rastingRate={rastingRate}
          result={exerciseIntensityResult}
        />
      </div>

      <Tables age={ageForTable} rastingRate={rastingRateForTable} />
    </div>
  );
};

export default Calculation;
