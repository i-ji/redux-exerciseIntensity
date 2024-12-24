import { useState } from "react";
import RateCalculation from "@/features/exercisingRate/RateCalculation";
import StrengthCalculation from "@/features/exercisingIntensity/StrengthCalculation";
import Tables from "@/features/exercisingRateForTable/Tables";
import Form from "@/components/parts/Form";
import {
  exerciseIntensityHandler,
  exercisingRateHandler,
  ageValidate,
  rastingRateValidate,
} from "@/utils/functions";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  showExercisingRateResult,
  showExercisingIntensityResult,
  showExercisingRateForTableResult,
} from "./exercisingResultSlice";
import { createContext } from "react";
import { exercisingLevels } from "@/utils/functions";

export const AgeContext = createContext("");
export const RestingRateContext = createContext("");

const Calculation = () => {
  // redux(運動時心拍数)
  const exercisingRateResult = useAppSelector(
    (state) => state.exercisingResult.exercisingRateResult
  );

  // redux(運動強度)
  const exercisingIntensityResult = useAppSelector(
    (state) => state.exercisingResult.exercisingIntensity
  );

  // redux(テーブル用の運動時心拍数)
  const exercisingRateForTableResult = useAppSelector(
    (state) => state.exercisingResult.exercisingRateForTable
  );

  // redux(dispatch)
  const dispatch = useAppDispatch();

  // 入力された年齢を取得
  const [age, setAge] = useState<string>("");
  const inputAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  // 入力された安静時心拍数を取得
  const [restingRate, setRestingRate] = useState<string>("");
  const inputRestingRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestingRate(e.target.value);
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

  // 結果表示（運動時心拍数）
  const exerciseRateCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 年齢、安静児心拍数、運動強度のどれか一つでも空欄ならリターン
    if (age === "" || restingRate === "" || exerciseIntensity === "") {
      dispatch(showExercisingRateResult(""));
      return;
    }

    // 運動強度が100%より上、または0%未満なら結果を削除してリターン
    if (Number(exerciseIntensity) > 100 || Number(exerciseIntensity) < 0) {
      setExerciseIntensity("");
      dispatch(showExercisingRateResult(""));
      return;
    }

    // 年齢のバリデーション
    if (!ageValidate(age)) {
      setAge("");
      dispatch(showExercisingRateResult(""));
      return;
    }

    // 安静時心拍数のバリデーション
    if (!rastingRateValidate(restingRate)) {
      setRestingRate("");
      dispatch(showExercisingRateResult(""));
      return;
    }

    // テーブル用運動時心拍数の算出
    const exercisingRateArray = [];
    for (let i = 0; i < exercisingLevels.length; i++) {
      exercisingRateArray.push(
        Math.round(exercisingRateHandler(exercisingLevels[i], age, restingRate))
      );
    }
    dispatch(showExercisingRateForTableResult(exercisingRateArray));

    // 運動時心拍数の結果
    dispatch(
      showExercisingRateResult(
        `あなたの運動時心拍数は${Math.round(
          exercisingRateHandler(exerciseIntensity, age, restingRate)
        )}bpmです。`
      )
    );
  };

  // 結果表示（運動強度）
  const exerciseIntensityCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 年齢、安静児心拍数、運動時心拍数のどれか一つでも空欄ならリターン
    if (age === "" || restingRate === "" || exercisingRate === "") {
      dispatch(showExercisingIntensityResult(""));
      return;
    }

    // 年齢のバリデーション
    if (!ageValidate(age)) {
      setAge("");
      dispatch(showExercisingIntensityResult(""));
      return;
    }

    // 安静時心拍数のバリデーション
    if (!rastingRateValidate(restingRate)) {
      setRestingRate("");
      dispatch(showExercisingIntensityResult(""));
      return;
    }

    // 運動時心拍数が安静時心拍数未満、または最大心拍数より上なら結果を削除してリターン
    // 先に年齢と安静時心拍数のバリデーション処理をしてからこの処理をする
    if (
      Number(exercisingRate) < Number(restingRate) ||
      Number(exercisingRate) > 220 - Number(age)
    ) {
      setExercisingRate("");
      dispatch(showExercisingIntensityResult(""));
      return;
    }

    // テーブル用運動時心拍数の算出
    const exercisingRateArray = [];
    for (let i = 0; i < exercisingLevels.length; i++) {
      exercisingRateArray.push(
        Math.round(exercisingRateHandler(exercisingLevels[i], age, restingRate))
      );
    }
    dispatch(showExercisingRateForTableResult(exercisingRateArray));

    // 運動強度の結果
    dispatch(
      showExercisingIntensityResult(
        `あなたの運動強度は${Math.round(
          exerciseIntensityHandler(exercisingRate, age, restingRate)
        )}%です。`
      )
    );
  };

  return (
    <AgeContext.Provider value={age}>
      <RestingRateContext.Provider value={restingRate}>
        <Form inputAge={inputAge} inputRestingRate={inputRestingRate} />
        <div className="mt-10 sm:flex gap-5 space-y-5 sm:space-y-0 mb-10">
          <RateCalculation
            exerciseIntensity={exerciseIntensity}
            inputExerciseIntensity={inputExerciseIntensity}
            exerciseRateCalculate={exerciseRateCalculate}
            result={exercisingRateResult}
          />
          <StrengthCalculation
            exercisingRate={exercisingRate}
            inputExercisingRate={inputExercisingRate}
            exerciseIntensityCalculate={exerciseIntensityCalculate}
            result={exercisingIntensityResult}
          />
        </div>

        <Tables exercisingRateForTableResult={exercisingRateForTableResult} />
      </RestingRateContext.Provider>
    </AgeContext.Provider>
  );
};

export default Calculation;
