import { Input } from "@/components/ui/input";
interface Form {
  age: string;
  rastingRate: string;
  inputAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRastingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ age, rastingRate, inputAge, inputRastingRate }: Form) => {
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
            value={rastingRate}
            onChange={(e) => inputRastingRate(e)}
          />
        </label>
      </div>
    </div>
  );
};

export default Form;
