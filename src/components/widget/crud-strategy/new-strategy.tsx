import { MutationNewLeg, MutationNewStrategy } from "@/query/strategy";
import { useState } from "react"
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Leg } from "./Leg";
import { initLeg } from "@/mockData/Data";
import { useQueryClient } from "@tanstack/react-query";



const StrategyNew = () => {
    const [isLeg, setIsLeg] = useState(false);

    const [strategyData, setStrategyData] = useState<IStrategyData>({})

    const [legData, setLegData] = useState<LegData[]>([{ ...initLeg }]);

    const [activeId, setActiveId] = useState<number | undefined>()

    const { mutate } = MutationNewStrategy()

    const { mutate: mutateLeg } = MutationNewLeg()

    const queryClient = useQueryClient();


    const insertStrategy = () => {
        const data = { algorithmName: strategyData.algorithmName, algorithmNote: strategyData.algorithmNote }
        mutate(data, {
            onSuccess(res) {
                setIsLeg(prev => !prev)
                setActiveId(res.result)
                queryClient.invalidateQueries({ queryKey: ["get-strategy"] })
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


    const onClickRunLeg = () => {
        if (!activeId) {
            return;
        }
        const data: LegData[] = legData.map(item => ({ ...item, algorithmInstanceId: activeId }))

        mutateLeg(data, {
            onSuccess() {
                queryClient.invalidateQueries({ queryKey: ["multiLeg", activeId] })
            }
        })
    }


    return (

        <AccordionItem value="item-2" className="pb-4">
            <AccordionTrigger dir="rtl" className="text-blue-500">ساخت استراتژی</AccordionTrigger>
            <AccordionContent className="p-1">
                <div dir="rtl" className="flex gap-4 py-4">
                    <Input
                        placeholder="نام"
                        value={strategyData.algorithmName}
                        onChange={(e) => setStrategyData(prev => ({ ...prev, algorithmName: e.target.value }))}
                    />

                    {/* <Input placeholder="آیزین نماد پایه" /> */}
                    <Input
                        placeholder="توضیحات"
                        value={strategyData.algorithmNote}
                        onChange={(e) => setStrategyData(prev => ({ ...prev, algorithmNote: e.target.value }))}
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

                                <div className="gap-3 flex">
                                    <Button
                                        variant="green"
                                        onClick={onClickRunLeg}

                                    >
                                        ثبت لگ ها
                                    </Button>

                                    <Button
                                        disabled={true}
                                    >
                                        اجرای همه
                                    </Button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </AccordionContent>

        </AccordionItem>
    )
}

export default StrategyNew