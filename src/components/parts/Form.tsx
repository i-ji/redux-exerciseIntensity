import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { AgeContext, RestingRateContext } from "@/features/Calculation";

interface Form {
  inputAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRestingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ inputAge, inputRestingRate }: Form) => {
  const age = useContext(AgeContext);
  const restingRate = useContext(RestingRateContext);

  return (
    <div className="mt-10">
      <div className="mb-3">
        <label>
          年齢
          <Input
            type="number"
            name="age"
            placeholder="年齢を入力してください"
            className=" placeholder:opacity-40"
            value={age}
            onChange={(e) => inputAge(e)}
          />
        </label>
      </div>

      <div>
        <label>
          安静時心拍数
          <Input
            type="number"
            name="restingRate"
            placeholder="安静時心拍数を入力してください"
            className=" placeholder:opacity-40"
            value={restingRate}
            onChange={(e) => inputRestingRate(e)}
          />
        </label>
      </div>
    </div>
  );
};

export default Form;
