import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { exercisingLevels } from "@/utils/functions";

interface Tables {
  exercisingRateForTableResult: string[];
}

const Tables = ({ exercisingRateForTableResult }: Tables) => {
  const tableHeads = [
    { text: "運動強度", widht: 15 },
    { text: "運動時心拍数", widht: 20 },
    { text: "運動レベル", widht: 20 },
    { text: "運動目的", widht: 45 },
  ];

  const tableBodies = [
    {
      strength: exercisingLevels[0],
      exercisingRate: exercisingRateForTableResult[0],
      level: "かなり楽である",
      purpose: "健康増進",
    },
    {
      strength: exercisingLevels[1],
      exercisingRate: exercisingRateForTableResult[1],
      level: "楽である",
      purpose: "脂肪燃焼",
    },
    {
      strength: exercisingLevels[2],
      exercisingRate: exercisingRateForTableResult[2],
      level: "ややきつい",
      purpose: "持久力向上、基礎的な心肺機能強化",
    },
    {
      strength: exercisingLevels[3],
      exercisingRate: exercisingRateForTableResult[3],
      level: "きつい",
      purpose: "体力向上、心肺機能強化",
    },
    {
      strength: exercisingLevels[4],
      exercisingRate: exercisingRateForTableResult[4],
      level: "かなりきつい",
      purpose: "体力強化、筋力増強",
    },
    {
      strength: exercisingLevels[5],
      exercisingRate: exercisingRateForTableResult[5],
      level: "非常にきつい",
      purpose: "瞬発力強化、最大パフォーマンス向上",
    },
  ];

  return (
    <Table className="text-xs sm:text-sm">
      <TableHeader>
        <TableRow className="">
          {tableHeads.map((tableHead) => {
            return (
              <TableHead
                key={tableHead.text}
                className={`w-[${tableHead.widht}%] px-2 sm:px-3 md:px-4`}
              >
                {tableHead.text}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>

      <TableBody>
        {tableBodies.map((tableBody) => {
          return (
            <TableRow key={tableBody.level}>
              <TableCell className="p-3 sm:p-4">{`${tableBody.strength}%`}</TableCell>
              <TableCell className="font-medium p-3 sm:p-4">
                {!Math.round(Number(tableBody.exercisingRate))
                  ? ""
                  : `${Math.round(Number(tableBody.exercisingRate))}bpm`}
              </TableCell>
              <TableCell className="p-3 sm:p-4">{tableBody.level}</TableCell>
              <TableCell className="p-3 sm:p-4">{tableBody.purpose}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Tables;
