import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import StrategyListContent from "./strategyListContent"



export const StrategyList = () => {

    return (
        <AccordionItem value="item-1" className="pb-4">
            <AccordionTrigger dir="rtl" className="text-blue-500">لیست استراتژی</AccordionTrigger>
            <AccordionContent className="p-1">
                <StrategyListContent />
            </AccordionContent>
        </AccordionItem>
    )
}
