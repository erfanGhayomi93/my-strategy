import { ModeToggle } from "@/components/mode-toggle";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { MutationNewStrategy, QueryNewStrategy } from "@/query/strategy";
import { useState } from "react"
import { BlockTypeListSelect } from "../blockTypeListSelect";
// import { toast } from "react-toastify";

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

    const [tabId, setTabId] = useState<string[]>(["item-2"]);

    const [strategyData, setStrategyData] = useState<IStrategyData>({})

    const [legData, setLegData] = useState<LegData[]>([{ ...initLeg }]);

    const { data } = QueryNewStrategy()

    const { mutate } = MutationNewStrategy()

    console.log({ data })

    const insertStrategy = () => {
        mutate({ name: strategyData.name, caption: strategyData.caption }, {
            onSuccess(data) {
                console.log({ data })
                setIsLeg(prev => !prev)
            },
            onError(error) {
                console.log({ error })
            }
        })
    }

    const handleChange = <K extends keyof LegData>(index: number, field: K, value: LegData[K]) => {
        const updated = [...legData];
        updated[index][field] = value;
        setLegData(updated);
    };


    return (
        <div className="pt-4">
            <ModeToggle />

            <Accordion
                type="multiple"
                className="max-w-7xl mx-auto"
                value={tabId}
                onValueChange={(value) => setTabId(value)} // ← مقدار مستقیم
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
                            <Button variant="secondary" onClick={insertStrategy}>ثبت استراتژی</Button>
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
                                        <button
                                            className="bg-blue-500 !rounded-full w-10 h-10 leading-11 inline-block text-center !text-2xl text-white cursor-pointer !p-0 focus:!outline-1 !focus-visible:!outline-1"
                                            onClick={() => setLegData(prev => [...prev, { ...initLeg }])}
                                        >
                                            +
                                        </button>

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
                        محتوا
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
                    type="number"
                    min={0}
                />

            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"quantity" + index}>تعداد</Label>

                <Input
                    value={item.quantity}
                    onChange={(e) => onChange("quantity", e.target.value)}
                    placeholder="تعداد"
                    id={"quantity" + index}
                    type="number"
                    min={0}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"executeBox" + index}>اندازه اجرا</Label>

                <Input
                    value={item.executeBox}
                    onChange={(e) => onChange("executeBox", e.target.value)}
                    placeholder="اندازه اجرا"
                    id={"executeBox" + index}
                    type="number"
                    min={0}
                />
            </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor={"blockType" + index}>روش تضمین</Label>

                {/* <Input
                    value={item.blockType}
                    onChange={(e) => onChange("blockType", e.target.value)}
                    placeholder="روش تضمین"
                    id={"blockType" + index}
                /> */}

                <BlockTypeListSelect
                    state={item.blockType}
                    setState={(value: string) => onChange("blockType", value)}
                />
            </div>
        </div>
    )
}