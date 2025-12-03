/* eslint-disable @typescript-eslint/no-explicit-any */

import {type WeatherData, type ForecastDay } from '../types/weather'

// You'll get this from openweathermap.org (free account)
const API_KEY = '1be9d1b4af73b6c8670a4a88e3a08195'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const weatherService = {
  // Get current weather by city name
  getCurrentWeather: async (city: string): Promise<WeatherData> => {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    )

    if (!response.ok) {
      throw new Error('City not found')
    }

    const data = await response.json()

    return {
      id: data.id,
      name: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
        wind_speed: data.wind?.speed || 0,
      visibility: data.visibility / 1000 // Convert to km
    }
  },

  // Get 5-day forecast
  getForecast: async (city: string): Promise<ForecastDay[]> => {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )

    if (!response.ok) {
      throw new Error('Forecast not available')
    }

    const data = await response.json()

    // Process forecast data (get one per day at noon)
    const dailyForecasts = data.list.filter((_: any, index: number) =>
      index % 8 === 0 // Every 8th item (3-hour intervals = 24hrs)
    ).slice(0, 5)

    return dailyForecasts.map((item: any) => ({
      date: new Date(item.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      }),
      temperature_max: Math.round(item.main.temp_max),
      temperature_min: Math.round(item.main.temp_min),
      description: item.weather[0].description,
      icon: item.weather[0].icon,
      humidity: item.main.humidity
    }))
  }
}