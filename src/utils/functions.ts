// 運動時心拍数の算出式
export const exercisingRateHandler = (
  exerciseIntensity: string,
  age: string,
  rastingRate: string
) => {
  return (
    (Number(exerciseIntensity) / 100) *
      (220 - Number(age) - Number(rastingRate)) +
    Number(rastingRate)
  );
};

// 運動強度の算出式
export const exerciseIntensityHandler = (
  exercisingRate: string,
  age: string,
  rastingRate: string
) => {
  return (
    ((Number(exercisingRate) - Number(rastingRate)) /
      (220 - Number(age) - Number(rastingRate))) *
    100
  );
};

// 年齢のバリデーション
export const ageValidate = (age: string) => {
  if (Number(age) < 0 || Number(age) > 100) {
    return false;
  }

  return true;
};

// 安静時心拍数のバリデーション
export const rastingRateValidate = (rastingRate: string) => {
  if (Number(rastingRate) < 30 || Number(rastingRate) > 80) {
    return false;
  }

  return true;
};

// 運動強度一覧
export const exercisingLevels = ["50", "60", "70", "80", "90", "100"];
