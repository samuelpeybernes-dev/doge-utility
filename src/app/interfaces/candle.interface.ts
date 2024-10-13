export interface Candle {
    priceUsd: string;
    time: number;
  }

export interface CandleApiResponse {
    data: Candle[];
  } 

export interface chartData {
    labels: string[], 
    prices: number[] 
}