import { PaginationWidget } from "@/components/widget/paginationWidget"
import { StrategiesListSelect } from "@/components/widget/strategiesListSelect"
import { StrategiesTable } from "@/components/widget/strategiesTable"
import { coveredCallData, longCallData, longPutData } from "@/mockData/Data"
import { useState } from "react"

const Dashboard = () => {
  const [strategyName, setStrategyName] = useState("covered-call")

  const [pageNumber, setPageNumber] = useState(1)

  const pageSize = 15;


  const columnsCoverdCall: TableColumn<ICoveredCall>[] = [
    { header: "نماد پایه", accessor: (d) => d.baseSymbolTitle },
    { header: "آخرین قیمت پایه", accessor: (d) => "\u200e" + d.baseTradePriceVarPreviousTradePercent },
    { header: "مانده تا سررسید", accessor: (d) => d.dueDays },
    { header: "کال", accessor: (d) => d.symbolTitle },
    { header: "قیمت اعمال", accessor: (d) => d.strikePrice },
    { header: "موقعیت باز", accessor: (d) => d.openPositionCount },
    { header: "قیمت سرخط خرید کال", accessor: (d) => d.optionBestBuyLimitPrice },
    { header: "حجم سرخط خرید کال", accessor: (d) => d.optionBestBuyLimitQuantity },
    { header: "سر به سر", accessor: (d) => d.coveredCallBEP },
    { header: "حداکثر بازه تا سررسید", accessor: (d) => "\u200e" + d.maxProfitPercent },
    { header: "ytm سالانه", accessor: (d) => "\u200e" + d.ytm },
  ];

  const columnsLongCall: TableColumn<ILongCall>[] = [
    { header: "نماد پایه", accessor: (d) => d.baseSymbolTitle },
    { header: "آخرین قیمت پایه", accessor: (d) => "\u200e" + d.baseTradePriceVarPreviousTradePercent },
    { header: "مانده تا سررسید", accessor: (d) => d.dueDays },
    { header: "کال", accessor: (d) => d.symbolTitle },
    { header: "قیمت اعمال", accessor: (d) => d.strikePrice },
    { header: "موقعیت باز", accessor: (d) => d.openPositionCount },
    { header: "اخرین قیمت call", accessor: (d) => "\u200e" + d.tradePriceVarPreviousTradePercent },
    { header: "قیمت سرخط فروش کال", accessor: (d) => d.optionBestSellLimitPrice },
    { header: "حجم سرخط فروش کال", accessor: (d) => d.optionBestSellLimitQuantity },
  ];

  const columnsLongPut: TableColumn<ILongPut>[] = [
    { header: "نماد پایه", accessor: (d) => d.baseSymbolTitle },
    { header: "آخرین قیمت پایه", accessor: (d) => "\u200e" + d.baseTradePriceVarPreviousTradePercent },
    { header: "مانده تا سررسید", accessor: (d) => d.dueDays },
    { header: "پوت", accessor: (d) => d.symbolTitle },
    { header: "قیمت اعمال", accessor: (d) => d.strikePrice },
    { header: "موقعیت باز", accessor: (d) => d.openPositionCount },
    { header: "اخرین قیمت put", accessor: (d) => "\u200e" + d.tradePriceVarPreviousTradePercent },
    { header: "قیمت سرخط فروش کال", accessor: (d) => d.optionBestSellLimitPrice },
    { header: "حجم سرخط فروش کال", accessor: (d) => d.optionBestSellLimitQuantity },
  ];

  return (
    <div dir="rtl" className="max-w-7xl mx-auto">
      <div className="py-4">
        <StrategiesListSelect {...{ strategyName, setStrategyName }} />
      </div>



      <div className="border-2 border-b-blue-950 rounded-2xl p-2">

        {
          strategyName === "covered-call" && (
            <StrategiesTable data={coveredCallData.slice(pageNumber === 1 ? 0 : ((pageNumber * pageSize) - pageSize), pageNumber * pageSize)} columns={columnsCoverdCall} caption="کاورد کال (Covered Call)" />
          )
        }

        {
          strategyName === "long-call" && (
            <StrategiesTable data={longCallData.slice(pageNumber === 1 ? 0 : ((pageNumber * pageSize) - pageSize), pageNumber * pageSize)} columns={columnsLongCall} caption="لانگ کال (Long Call)" />
          )
        }

        {
          strategyName === "long-put" && (
            <StrategiesTable data={longPutData.slice(pageNumber === 1 ? 0 : ((pageNumber * pageSize) - pageSize), pageNumber * pageSize)} columns={columnsLongPut} caption="لانگ پوت (Long Put)" />
          )
        }

      </div>
      <div dir="ltr" className="py-4">
        <PaginationWidget {...{ setPageNumber }} />
      </div>
    </div>
  )
}

export default Dashboard