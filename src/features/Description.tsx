import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Description = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          {/* <AccordionTrigger className="text-xs sm:text-sm md:text-base py-3 sm:py-[14px] md:py-4"> */}
          <AccordionTrigger>カルボーネン法とは？</AccordionTrigger>
          <AccordionContent>
            {/* <p className="text-[10px] sm:text-xs md:text-sm"> */}
            <p>
              <span className="font-bold">
                年齢や安静時心拍数から運動強度を算出する計算式
              </span>
              で、運動指導の場面でよく使用されています。
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          {/* <AccordionTrigger className="text-xs sm:text-sm md:text-base py-3 sm:py-[14px] md:py-4"> */}
          <AccordionTrigger>カルボーネン法の計算式</AccordionTrigger>
          <AccordionContent className=" space-y-1">
            <p className="font-bold mb-2">
              運動強度（％）=（運動時心拍数-安静時心拍数）÷（最大心拍数-安静時心拍数）×100
            </p>
            <p className=" text-xs">
              <span className="font-bold">最大心拍数</span>
              は、「最大心拍数=220-年齢」で一般的に求めることができます。
            </p>
            <p className=" text-xs">
              <span className="font-bold">安静時心拍数</span>
              は、朝起きてから一息ついて、立ち上がらずに寝たまま測ってください。
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Description;
