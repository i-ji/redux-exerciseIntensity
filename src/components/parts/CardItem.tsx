import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AgeContext, RestingRateContext } from "@/features/Calculation";

type CardItem = {
  cardTitle: string;
  cardDescription: string;
  cardExample: string;
  placeholder: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  result: string;
  label: string;
  name: string;
};

const CardItem = ({
  cardTitle,
  cardDescription,
  cardExample,
  placeholder,
  value,
  onChangeHandler,
  onSubmitHandler,
  result,
  label,
  name,
}: CardItem) => {
  const age = useContext(AgeContext);
  const restingRate = useContext(RestingRateContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-3">{cardTitle}</CardTitle>
        <CardDescription className="font-thin text-xs text-gray-600">
          {cardDescription}
        </CardDescription>
        <CardDescription className="font-thin text-xs text-gray-600">
          {cardExample}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div>
            <label>
              {label}
              <Input
                type="number"
                placeholder={placeholder}
                className=" placeholder:opacity-40"
                name={name}
                value={value}
                onChange={(e) => onChangeHandler(e)}
              />
            </label>
          </div>

          <input type="hidden" value={age} />
          <input type="hidden" value={restingRate} />

          <div className="text-right">
            <Button>算出</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <p>{result}</p>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
