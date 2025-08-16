import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { useState } from "react"

interface IStrategyData {
    name?: string;
    caption?: string
}

interface LegData {
    symbolISIN: string;
    price: number;
    quantity: number;
    executeBox: number;
    blockType: string;
}


const initLeg: LegData = { symbolISIN: "", price: 0, quantity: 0, executeBox: 0, blockType: "" }

const NewStrategy = () => {

    const [isLeg, setIsLeg] = useState(false);


    const [strategyData, setStrategyData] = useState<IStrategyData>({})

    const [legData, setLegData] = useState<LegData[]>([{ ...initLeg }]);

    const insertStrategy = () => {
        setIsLeg(prev => !prev)
    }

    const handleChange = <K extends keyof LegData>(index: number, field: K, value: LegData[K]) => {
        const updated = [...legData];
        updated[index][field] = value;
        setLegData(updated);
    };


    return (
        <div className="mt-4">
            <Accordion
                type="single"
                collapsible
                className="max-w-7xl mx-auto"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1" className="pb-4">
                    <AccordionTrigger dir="rtl">ساخت استراتژی</AccordionTrigger>
                    <AccordionContent className="p-1">
                        <div dir="rtl" className="flex gap-4 py-4">
                            <Input
                                placeholder="نام"
                                value={strategyData.name}
                                onChange={(e) => setStrategyData(prev => ({ ...prev, name: e.target.value }))}
                            />

                            {/* <Input placeholder="آیزین نماد پایه" /> */}
                            <Input
                                placeholder="توضیحات"
                                value={strategyData.caption}
                                onChange={(e) => setStrategyData(prev => ({ ...prev, caption: e.target.value }))}
                            />
                            <Button onClick={insertStrategy}>ثبت استراتژی</Button>
                        </div>
                        {
                            isLeg && (
                                <div dir="rtl" className="flex flex-col gap-2">
                                    {
                                        legData.map((item, ind) => (
                                            <Leg
                                                key={ind}
                                                item={item}
                                                onChange={(field, value) => handleChange(ind, field, value)}
                                                index={ind}
                                            />
                                        ))
                                    }

                                    <div className="flex justify-between mt-4">
                                        <span
                                            className="bg-blue-500 rounded-full w-10 h-10 inline-block text-center pt-0.5 text-2xl text-white cursor-pointer"
                                            onClick={() => setLegData(prev => [...prev, { ...initLeg }])}
                                            role="button"
                                        >
                                            +
                                        </span>

                                        <Button variant="green">اجرای همه</Button>
                                    </div>

                                </div>
                            )
                        }
                    </AccordionContent>

                </AccordionItem>

                <AccordionItem value="item-2" className="">
                    <AccordionTrigger dir="rtl">نمایش استراتژی</AccordionTrigger>
                    <AccordionContent className="p-1">

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}


export default NewStrategy


const Leg = ({
    item,
    onChange,
    index
}: {
    item: LegData;
    onChange: (field: keyof LegData, value: string) => void;
    index: number
}) => {
    return (
        <div className="flex gap-4 my-1">
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"symbolISIN" + index}>آیزین نماد آپشن</Label>
                <Input
                    value={item.symbolISIN}
                    onChange={(e) => onChange("symbolISIN", e.target.value)}
                    placeholder="آیزین نماد آپشن"
                    id={"symbolISIN" + index}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"price" + index}>قیمت</Label>

                <Input
                    value={item.price}
                    onChange={(e) => onChange("price", e.target.value)}
                    placeholder="قیمت"
                    id={"price" + index}

                />

            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"quantity" + index}>تعداد</Label>

                <Input
                    value={item.quantity}
                    onChange={(e) => onChange("quantity", e.target.value)}
                    placeholder="تعداد"
                    id={"quantity" + index}

                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"executeBox" + index}>اندازه اجرا</Label>

                <Input
                    value={item.executeBox}
                    onChange={(e) => onChange("executeBox", e.target.value)}
                    placeholder="اندازه اجرا"
                    id={"executeBox" + index}

                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"blockType" + index}>روش تضمین</Label>

                <Input
                    value={item.blockType}
                    onChange={(e) => onChange("blockType", e.target.value)}
                    placeholder="روش تضمین"
                    id={"blockType" + index}

                />
            </div>
        </div>
    )
}