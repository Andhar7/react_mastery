import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { ForecastCards } from './components/ForecastCards'
import { weatherService } from './services/weatherService'
import type {ForecastDay, WeatherData} from './types/weather'

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (city: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Fetch both current weather and forecast
      const weatherData = await weatherService.getCurrentWeather(city)
      const forecastData = await weatherService.getForecast(city)

      setWeather(weatherData)
      setForecast(forecastData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setWeather(null)
      setForecast(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🌤️ Weather App
        </h1>
        <p className="text-blue-100">
          Get current weather for any city worldwide
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {/* Weather Display */}
      {weather && <WeatherCard weather={weather} />}

        {/* Forecast Display */}
        {forecast && <ForecastCards forecast={forecast} />}

      {/* Instructions */}
      {!weather && !error && (
        <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center text-white max-w-md">
          <p className="text-lg mb-2">👆 Search for a city above</p>
          <p className="text-sm text-blue-100">
            Try: London, Paris, Tokyo, New York...
          </p>
        </div>
      )}
    </div>
  )
}

export default App