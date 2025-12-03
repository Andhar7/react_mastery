import type { ForecastDay } from '../types/weather'

interface ForecastCardsProps {
  forecast: ForecastDay[]
}

export const ForecastCards = ({ forecast }: ForecastCardsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-4xl mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        5-Day Forecast
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => {
          const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`

          return (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition duration-200"
            >
              {/* Date */}
              <div className="text-sm font-semibold text-blue-600 mb-2">
                {day.date}
              </div>

              {/* Weather Icon */}
              <div className="flex justify-center mb-2">
                <img
                  src={iconUrl}
                  alt={day.description}
                  className="w-12 h-12"
                />
              </div>

              {/* Description */}
              <div className="text-xs text-gray-600 mb-2 capitalize">
                {day.description}
              </div>

              {/* Temperatures */}
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-gray-800">
                  {day.temperature_max}°
                </span>
                <span className="text-gray-500">
                  {day.temperature_min}°
                </span>
              </div>

              {/* Humidity */}
              <div className="text-xs text-blue-600 mt-1">
                {day.humidity}% humidity
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}