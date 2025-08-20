
 
 interface ICoveredCall {
		baseBestBuyLimitPrice: number;
		baseBestSellLimitPrice: number;
		baseClosingPrice: number;
		baseHighThreshold: number;
		baseLastTradedDate: string;
		baseLastTradedPrice: number;
		baseLowThreshold: number;
		baseMarketUnit: string;
		baseSymbolDepthStatus: Strategy.TBaseSymbolDepthStatus;
		baseSymbolISIN: string;
		baseSymbolTitle: string;
		baseTradeCount: number;
		baseTradePriceVarPreviousTradePercent: number;
		baseTradeValue: number;
		baseTradeVolume: number;
		bepDifference: number;
		bepDifferencePercent: number;
		contractEndDate: string;
		contractSize: number;
		// profitPercent : number;
		// blackScholes : number;
		coveredCallBEP: number;
		dueDays: number;
		historicalVolatility: number;
		// profitAmount : number;
		inUseCapital: number;
		initialMargin: number;
		iotm: Option.IOTM;
		// longCallBEP : number;
		key: string;
        baseSymbolState : string;
        callSymbolState : string;
        allowIncremental : string;
		lastTradeDate: string;
        maxOP : number;
		marketUnit: string;
		maxProfit: number;
		maxProfitPercent: number;
		monthlyYTM: number;
		nonExpiredProfit: number;
		nonExpiredProfitPercent: number;
		nonExpiredYTM: number;
		openPositionCount: number;
		optionBestBuyLimitPrice: number;
		optionBestBuyLimitQuantity: number;
		optionBestSellLimitPrice: number;
		optionBestSellLimitQuantity: number;
		premium: number;
		priceType: string;
		requiredMargin: number;
		riskCoverage: number;
		strikePrice: number;
		symbolISIN: string;
		symbolTitle: string;
		totalCost: number;
		tradePriceVarPreviousTradePercent: number;
		tradeValue: number;
		tradeVolume: number;
		withCommission: boolean;
		ytm: number;
		children ?: IChildrenAnalyst[]
	}

 interface ILongCall {
		baseBestBuyLimitPrice: number;
		baseBestSellLimitPrice: number;
		baseHighThreshold: number;
		baseLastTradedDate: string;
		baseLastTradedPrice: number;
		baseLowThreshold: number;
		baseMarketUnit: string;
		baseSymbolDepthStatus: Strategy.TBaseSymbolDepthStatus;
		baseSymbolISIN: string;
		baseSymbolTitle: string;
		baseTradeCount: number;
		baseTradePriceVarPreviousTradePercent: number;
		baseTradeValue: number;
		baseTradeVolume: number;
		bepDifference: number;
		bepDifferencePercent: number;
		blackScholes: number;
		contractEndDate: string;
		contractSize: number;
		lastTradeDate : string;
		dueDays: number;
		historicalVolatility: number;
		initialMargin: number;
		intrinsicValue: number;
		callSymbolState : string;
		maxOP : number;
		allowIncremental : string;
		iotm: Option.IOTM;
		key: string;
		lastTradeDate: number;
		longCallBEP: number;
		marketUnit: string;
		openPositionCount: number;
		optionBestBuyLimitPrice: number;
		optionBestBuyLimitQuantity: number;
		optionBestSellLimitPrice: number;
		optionBestSellLimitQuantity: number;
		premium: number;
		priceType: string;
		profitAmount: number;
		profitPercent: number;
		requiredMargin: number;
		strikePrice: number;
		symbolISIN: string;
		symbolTitle: string;
		timeValue: number;
		tradePriceVarPreviousTradePercent: number;
		tradeValue: number;
		tradeVolume: number;
		withCommission: boolean;
		baseSymbolState : string;
		children ?: IChildrenAnalyst[]
	}

interface ILongPut {
		baseBestBuyLimitPrice: number;
		baseBestSellLimitPrice: number;
		baseHighThreshold: number;
		baseLastTradedDate: string;
		baseLastTradedPrice: number;
		baseLowThreshold: number;
		baseMarketUnit: string;
		baseSymbolDepthStatus: Strategy.TBaseSymbolDepthStatus;
		baseSymbolISIN: string;
		baseSymbolTitle: string;
		baseTradeCount: number;
		baseTradePriceVarPreviousTradePercent: number;
		baseTradeValue: number;
		baseTradeVolume: number;
		bepDifference: number;
		bepDifferencePercent: number;
		blackScholes: number;
		contractEndDate: string;
		putSymbolState: string;
		contractSize: number;
		dueDays: number;
		historicalVolatility: number;
		initialMargin: number;
		intrinsicValue: number;
		iotm: string;
		key: string;
		longPutBEP: number;
		marketUnit: string;
		lastTradeDate : string;
		openPositionCount: number;
		optionBestBuyLimitPrice: number;
		optionBestBuyLimitQuantity: number;
		optionBestSellLimitPrice: number;
		optionBestSellLimitQuantity: number;
		premium: number;
		priceType: string;
		profitAmount: number;
		profitPercent: number;
		requiredMargin: number;
		strikePrice: number;
		symbolISIN: string;
		symbolTitle: string;
		timeValue: number;
		totalCost: number;
		tradePriceVarPreviousTradePercent: number;
		tradeValue: number;
		tradeVolume: number;
		withCommission: boolean;
		ytm: number;
		baseSymbolState : string;
		maxOP : number;
		allowIncremental : string;
      	children ?: IChildrenAnalyst[]
	}

interface IChildrenAnalyst {
	    baseSymbolTitle: string,
        baseBestBuyLimitPrice: number,
        contractSize: number,
        total: number,
		finishPercent : number
}

 interface TableColumn<T> {
  header: string;
  accessor?: (row: T) => React.ReactNode;
  type ?: "action" | "buy-cell"
  className?: string;
  columnAnalyst?: TableColumn<IChildrenAnalyst>[]
}


interface IOptionBaseSearch {
		symbolISIN: string;
		symbolTitle: string;
		companyISIN: string;
		companyName: string;
		insCode: null | string;
		symbolTradeState: Symbol.TradeState;
		isFreeze : boolean
}

 interface SymbolInfo {
  symbolISIN: string;
  baseSymbolISIN: string;
  dueDays: number;
  strikePrice: number;
  symbolTitle: string;
  baseSymbolTitle: string;
  baseMarketUnit: string;
  contractSize: number;
  contractEndDate: string; // ISO date string
  optionType: string;
  initialMargin: number;
  sectorName: string;
  companyISIN: string;
  companyName: string;
  marketUnit: string;
  insCode: string;
}

 interface OptionWatchlistData {
  symbolISIN: string;
  companyISIN: string | null;
  premium: number;
  baseSymbolPrice: number;
  breakEvenPoint: number;
  leverage: number;
  openPositionCount: number;
  impliedVolatility: number;
  bestBuyPrice: number;
  bestSellPrice: number;
  bestBuyQuantity: number;
  bestSellQuantity: number;
  closingPrice: number;
  iotm: string;
  historicalVolatility: number;
  timeValue: number;
  blackScholes: number;
  delta: number;
  theta: number;
  rho: number;
  vega: number;
  gamma: number;
  lambda: number;
  tradeCount: number;
  spread: number;
  blackScholesDifference: number;
  blackScholesDifferencePercent: number;
  baseClosingPrice: number;
  requiredMargin: number;
  individualBuyVolume: number;
  individualSellVolume: number;
  legalBuyVolume: number;
  legalSellVolume: number;
  lastTradeDate: string; // ISO date string
  notionalValue: number;
  intrinsicValue: number;
  tradeValue: number;
  tradeVolume: number;
  tradePriceVarPreviousTradePercent: number;
  baseTradePriceVarPreviousTradePercent: number;
  baseHighThreshold: number;
  baseLowThreshold: number;
  closingPriceVarReferencePricePercent: number;
  baseClosingPriceVarReferencePricePercent: number;
  symbolTradeState: string;
  symbolOrderState: string;
  symbolState: string;
  allowIncremental: string;
}

 interface IWatchlistBySettlementDate {
	symbolInfo : SymbolInfo ;
    optionWatchlistData: OptionWatchlistData;
 }


 interface LegData {
	multiLegOrderId ?: number
    symbolISIN?: string;
    quantity?: number;
    price: number;
	orderSide : string
    executedOrder: number;
	algorithmInstanceId ?: number
	executeBox : number
    blockType?: string;
}


interface IStrategyData {
    algorithmName?: string;
    algorithmNote?: string
}

interface IGetMultiLegAlgorithmInstance{
      id: number,
      algorithmInstanceName: string,
      createDate: string;
      settlementDate: string,
      note: string,
      legsCount: number,
      isEnable: boolean,
      isComplateExecute: boolean,
      algorithmStatus: string,
      customerIsin: string   
}