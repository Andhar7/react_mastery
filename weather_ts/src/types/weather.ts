// Data
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface WeatherData {
    id: number;
    name: string;
    country: string;
    temperature: number;
    description: string;
    icon: string;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    visibility: number;
}

export interface ForecastDay {
    date: string;
    temperature_max: number;
    temperature_min: number;
    description: string;
    icon: string;
    humidity: number;
}

export interface WeatherResponse {
    current: WeatherData;
    forecast: ForecastDay[];
}

export interface SearchState {
    city: string;
    isLoading: boolean;
    error: string | null;
}


















