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
  type ?: "action" 
  className?: string;
  columnAnalyst?: TableColumn<IChildrenAnalyst>[]
}