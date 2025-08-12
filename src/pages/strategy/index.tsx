import { sepNumbers } from "@/components/common/helper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OptionSearchListSelect } from "@/components/widget/optionSearchListSelect"
import { StrategiesTable } from "@/components/widget/strategiesTable"
import { WatchlistBySettlementDate } from "@/mockData/Data"
import { useState } from "react"

type SideMap = {
    buy?: IWatchlistBySettlementDate;
    sell?: IWatchlistBySettlementDate;
};

type Side = "buy" | "sell";



type WatchlistMap = {
    [strikePrice: number]: {
        call?: SideMap
        put?: SideMap;
    };
};

const Strategy = () => {

    const [state, setState] = useState("")

    const [leg, setLeg] = useState<WatchlistMap>({})

    // const [quantity, setquantity] = useState(1)
    // const [price, setprice] = useState(1)

    const [inputs, setInputs] = useState<Record<string, { price: number; quantity: number }>>({});


    const watchlistPut = WatchlistBySettlementDate.filter(item => item.symbolInfo.optionType === "Put").sort((a, b) => a.symbolInfo.strikePrice - b.symbolInfo.strikePrice)

    const watchlistCall = WatchlistBySettlementDate.filter(item => item.symbolInfo.optionType === "Call").sort((a, b) => a.symbolInfo.strikePrice - b.symbolInfo.strikePrice)

    const columnsCall: TableColumn<IWatchlistBySettlementDate>[] = [
        {
            header: 'نماد', accessor: (d) => d.symbolInfo.symbolTitle,
        },
        {
            header: 'موقعیت باز', accessor: (d) => sepNumbers(d.optionWatchlistData.openPositionCount),
        },
        {
            header: 'بهترین خرید', accessor: (d) => d.optionWatchlistData.bestBuyPrice,
        },
        {
            header: 'بهترین فروش', accessor: (d) => d.optionWatchlistData.bestSellPrice,
        },
        {
            header: "عملیات", type: "buy-cell"
        }
    ]

    const columnsPut: TableColumn<IWatchlistBySettlementDate>[] = [
        {
            header: "عملیات", type: "buy-cell"
        },
        {
            header: 'بهترین خرید', accessor: (d) => d.optionWatchlistData.bestBuyPrice,
        },
        {
            header: 'بهترین فروش', accessor: (d) => d.optionWatchlistData.bestSellPrice,
        },
        {
            header: 'موقعیت باز', accessor: (d) => sepNumbers(d.optionWatchlistData.openPositionCount),
        },
        {
            header: 'نماد', accessor: (d) => d.symbolInfo.symbolTitle,
        },

    ]

    const columnsSet: TableColumn<IWatchlistBySettlementDate>[] = [
        {
            header: 'اعمال', accessor: (d) => sepNumbers(d.symbolInfo.strikePrice), className: "bg-blue-100 py-4"
        }
    ]

    const handleClickAction = (row: IWatchlistBySettlementDate, type?: "buy" | "sell", optionType?: "call" | "put") => {
        // console.log({ row, type, optionType })
        setLeg(prev => ({
            ...prev,
            [row.symbolInfo.strikePrice]: {
                ...prev[row.symbolInfo.strikePrice],
                [optionType!]: {
                    [type!]: row
                }
            }
        })
        )
    }

    const result = Object.values(leg).reduce(
        (acc, strikeData) => {
            ["call", "put"].forEach(optionType => {
                const option = strikeData[optionType as keyof typeof strikeData];
                if (option) {
                    (["buy", "sell"] as Side[]).forEach(side => {
                        if (option[side]) {
                            acc[side].push(option[side]);
                        }
                    });
                }
            });
            return acc;
        },
        { buy: [] as IWatchlistBySettlementDate[], sell: [] as IWatchlistBySettlementDate[] }
    );



    return (
        <div dir="rtl" className="p-6">
            <OptionSearchListSelect {...{ state, setState }} />

            <div className="flex gap-2 mt-3">
                <div className="flex gap-2 w-2/3">
                    <div className="flex-1">
                        <p className="bg-green-500 text-white text-center rounded">کال</p>
                        <StrategiesTable
                            data={watchlistCall}
                            columns={columnsCall}
                            caption="call"
                            handleClickAction={(row, type) => handleClickAction(row, type, "call")}

                        />
                    </div>
                    <div className="">
                        <p>--------</p>
                        <StrategiesTable
                            data={watchlistCall}
                            columns={columnsSet}
                            caption="اعمال"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="bg-red-500 text-white text-center rounded">پوت</p>

                        <StrategiesTable
                            data={watchlistPut}
                            columns={columnsPut}
                            caption="put"
                            handleClickAction={(row, type) => handleClickAction(row, type, "put")}
                        />
                    </div>

                </div>

                <div className="w-1/3 flex flex-col">
                    <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold text-gray-700">سمت</th>
                                <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold text-gray-700">نماد</th>
                                <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold text-gray-700">نوع</th>
                                <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold text-gray-700">قیمت اعمال</th>
                                <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold text-gray-700">قیمت</th>
                                <th className="border border-gray-300 px-4 py-2 text-right text-sm font-semibold text-gray-700">تعداد</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {result.buy.map(item => {
                                    const key = item.symbolInfo.insCode;
                                    const rowInputs = inputs[key] || { price: 1, quantity: 1 };

                                    return (
                                        <tr key={key} className="text-center">
                                            <td className="bg-green-500">خرید</td>
                                            <td>{item.symbolInfo.symbolTitle}</td>
                                            <td>{item.symbolInfo.optionType}</td>
                                            <td>{item.symbolInfo.strikePrice}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-right text-sm">
                                                <Input
                                                    value={rowInputs.price}
                                                    onChange={e =>
                                                        setInputs(prev => ({
                                                            ...prev,
                                                            [key]: {
                                                                ...prev[key],
                                                                price: Number(e.target.value),
                                                            },
                                                        }))
                                                    }
                                                />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-right text-sm">
                                                <Input
                                                    value={rowInputs.quantity}
                                                    onChange={e =>
                                                        setInputs(prev => ({
                                                            ...prev,
                                                            [key]: {
                                                                ...prev[key],
                                                                quantity: Number(e.target.value),
                                                            },
                                                        }))
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}

                                {result.sell.map(item => {
                                    const key = item.symbolInfo.insCode;
                                    const rowInputs = inputs[key] || { price: 1, quantity: 1 };

                                    return (
                                        <tr key={key} className="text-center">
                                            <td className="bg-red-500">فروش</td>
                                            <td>{item.symbolInfo.symbolTitle}</td>
                                            <td>{item.symbolInfo.optionType}</td>
                                            <td>{item.symbolInfo.strikePrice}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-right text-sm">
                                                <Input
                                                    value={rowInputs.price}
                                                    onChange={e =>
                                                        setInputs(prev => ({
                                                            ...prev,
                                                            [key]: {
                                                                ...prev[key],
                                                                price: Number(e.target.value),
                                                            },
                                                        }))
                                                    }
                                                />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-right text-sm">
                                                <Input
                                                    value={rowInputs.quantity}
                                                    onChange={e =>
                                                        setInputs(prev => ({
                                                            ...prev,
                                                            [key]: {
                                                                ...prev[key],
                                                                quantity: Number(e.target.value),
                                                            },
                                                        }))
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        </tbody>
                    </table>

                </div>
            </div>

            <div dir="ltr">
                <Button>
                    ارسال همه
                </Button>
            </div>
        </div >
    )
}

export default Strategy

