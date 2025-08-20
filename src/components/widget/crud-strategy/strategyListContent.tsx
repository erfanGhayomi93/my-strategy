

import { dateFormatter } from "@/components/common/helper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { QueryGetMultiLegOrderByInstanceId, QueryGetAllStrategy } from "@/query/strategy";
import { useEffect, useState } from "react";
import { StrategiesTable } from "../strategiesTable";



function StrategyListContent() {
    const [tabId, setTabId] = useState<string>("");


    const { data } = QueryGetAllStrategy()

    const { data: legData } = QueryGetMultiLegOrderByInstanceId(tabId)


    const onValueChange = (value: string) => {
        setTabId(value)
    }

    useEffect(() => {
        console.log({ tabId })
    }, [tabId])

    const columnsCoverdCall: TableColumn<LegData>[] = [
        { header: "نماد", accessor: (d) => d.symbolISIN },
        { header: "ساید", accessor: (d) => d.orderSide },
        { header: "قیمت", accessor: (d) => d.price },
        { header: "تعداد", accessor: (d) => d.quantity }
    ]


    return (
        <div dir="rtl" className="max-w-7xl mx-auto">
            <Accordion
                type="single"
                className="max-w-7xl mx-auto px-1.5"
                value={tabId}
                onValueChange={onValueChange} // ← مقدار مستقیم

            >
                {
                    data?.map((item) => {
                        return (<AccordionItem key={item.id} value={String(item.id)} className="pb-4">
                            <AccordionTrigger dir="rtl">
                                <div className="flex gap-x-4 flex-1">
                                    <span className="flex-1" >{item.algorithmInstanceName}</span>
                                    <span className="flex-1" dir="ltr">{dateFormatter(item.createDate, "datetime")}</span>
                                    <span className="flex-1" dir="ltr">{dateFormatter(item.createDate, "datetime")}</span>
                                    <span className="flex-1">{item.settlementDate}</span>
                                    <span className="flex-1">{item.note}</span>
                                    <span className="flex-1">{item.legsCount}</span>
                                    <span className="flex-1">{item.isEnable ? "فعال" : "غیرفعال"}</span>
                                    <span className="flex-1">{item.isComplateExecute ? "اجرای کامل" : "اجرای کامل نشده است"}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-3">

                                {legData && legData.length > 0 ? (
                                    <div className="space-y-2 text-sm bg-secondary">
                                        <StrategiesTable
                                            columns={columnsCoverdCall}
                                            data={legData}
                                            caption=""
                                        />
                                    </div>
                                ) : (
                                    <div className="py-2 text-sm font-bold text-center bg-secondary text-gray-500">دیتا موجود نیست</div>
                                )}
                            </AccordionContent>
                        </AccordionItem>)
                    })
                }
            </Accordion>
        </div>)
}

export default StrategyListContent