import { Progress } from "@/components/ui/progress"
import { PaginationWidget } from "@/components/widget/paginationWidget"
import { StrategiesListSelect } from "@/components/widget/strategiesListSelect"
import { StrategiesTable } from "@/components/widget/strategiesTable"
import { coveredCallData, longCallData, longPutData } from "@/mockData/Data"
import { useState } from "react"

const Dashboard = () => {
  const [strategyName, setStrategyName] = useState("covered-call")

  const [pageNumber, setPageNumber] = useState(1)

  const pageSize = 12;

  const coveredCallDataWithChildren: ICoveredCall[] = coveredCallData.map(row => ({
    ...row,
    children: [
      {
        baseSymbolTitle: row.baseSymbolTitle,
        baseBestBuyLimitPrice: row.baseBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 30
      },
      {
        baseSymbolTitle: row.symbolTitle,
        baseBestBuyLimitPrice: row.optionBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 80
      }
    ]
  }))

  const longCallDataWithChildren: ILongCall[] = longCallData.map(row => ({
    ...row,
    children: [
      {
        baseSymbolTitle: row.baseSymbolTitle,
        baseBestBuyLimitPrice: row.baseBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 30
      },
      {
        baseSymbolTitle: row.symbolTitle,
        baseBestBuyLimitPrice: row.optionBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 80
      },
      {
        baseSymbolTitle: row.symbolTitle,
        baseBestBuyLimitPrice: row.optionBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 80
      },
      {
        baseSymbolTitle: row.symbolTitle,
        baseBestBuyLimitPrice: row.optionBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 80
      }
    ]
  }))

  const longPutDataWithChildren: ILongPut[] = longPutData.map(row => ({
    ...row,
    children: [
      {
        baseSymbolTitle: row.baseSymbolTitle,
        baseBestBuyLimitPrice: row.baseBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 30
      },
      {
        baseSymbolTitle: row.symbolTitle,
        baseBestBuyLimitPrice: row.optionBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 80
      },
      {
        baseSymbolTitle: row.symbolTitle,
        baseBestBuyLimitPrice: row.optionBestBuyLimitPrice,
        contractSize: row.contractSize,
        total: row.contractSize * row.baseBestBuyLimitPrice,
        finishPercent: 80
      }
    ]
  }))

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
    {
      header: "عملیات", type: "action", columnAnalyst: [
        // { header: "سمت", accessor: (d) => "خرید" },
        { header: "نماد", accessor: (d) => d.baseSymbolTitle },
        { header: "قیمت", accessor: (d) => d.baseBestBuyLimitPrice },
        { header: "تعداد", accessor: (d) => d.contractSize },
        { header: "مبلغ", accessor: (d) => d.contractSize * d.baseBestBuyLimitPrice },
        { header: "انجام", accessor: (d) => (<span>{<Progress value={d.finishPercent} />}</span>) },
      ]
    },
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
    {
      header: "عملیات", type: "action", columnAnalyst: [
        // { header: "سمت", accessor: (d) => "خرید" },
        { header: "نماد", accessor: (d) => d.baseSymbolTitle },
        { header: "قیمت", accessor: (d) => d.baseBestBuyLimitPrice },
        { header: "تعداد", accessor: (d) => d.contractSize },
        { header: "مبلغ", accessor: (d) => d.contractSize * d.baseBestBuyLimitPrice },
        { header: "انجام", accessor: (d) => (<span>{<Progress value={d.finishPercent} />}</span>) },
      ]
    },
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
    {
      header: "عملیات", type: "action", columnAnalyst: [
        // { header: "سمت", accessor: (d) => "خرید" },
        { header: "نماد", accessor: (d) => d.baseSymbolTitle },
        { header: "قیمت", accessor: (d) => d.baseBestBuyLimitPrice },
        { header: "تعداد", accessor: (d) => d.contractSize },
        { header: "مبلغ", accessor: (d) => d.contractSize * d.baseBestBuyLimitPrice },
        { header: "انجام", accessor: (d) => (<span>{<Progress value={d.finishPercent} />}</span>) },
      ]
    },
  ];

  const calcPagination = <T,>(data: T[]) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    return data.slice(startIndex, endIndex);
  }


  const handleClickAction = (row: ICoveredCall) => {
    console.log({ row })
  }

  return (
    <div dir="rtl" className="max-w-7xl mx-auto">
      <div className="py-4">
        <StrategiesListSelect {...{ strategyName, setStrategyName }} />
      </div>



      <div className="border-2 border-b-blue-950 rounded-2xl p-2">

        {
          strategyName === "covered-call" && (
            <StrategiesTable<ICoveredCall, IChildrenAnalyst>
              data={calcPagination<ICoveredCall>(coveredCallDataWithChildren)}
              columns={columnsCoverdCall}
              caption="کاورد کال (Covered Call)"
              handleClickAction={handleClickAction}
              children={(row: ICoveredCall) => row?.children}
            />
          )
        }

        {
          strategyName === "long-call" && (
            <StrategiesTable<ILongCall, IChildrenAnalyst>
              data={calcPagination<ILongCall>(longCallDataWithChildren)}
              columns={columnsLongCall}
              caption="لانگ کال (Long Call)"
              children={(row: ILongCall) => row?.children}
            />
          )
        }

        {
          strategyName === "long-put" && (
            <StrategiesTable<ILongPut, IChildrenAnalyst>
              data={calcPagination<ILongPut>(longPutDataWithChildren)}
              columns={columnsLongPut}
              caption="لانگ پوت (Long Put)"
              children={(row: ILongPut) => row?.children}
            />
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