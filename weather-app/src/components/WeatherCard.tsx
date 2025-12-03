import type {WeatherData} from '../types/weather'

interface WeatherCardProps {
  weather: WeatherData
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {weather.name}, {weather.country}
        </h2>
        <p className="text-gray-600 capitalize text-lg">
          {weather.description}
        </p>
      </div>

      {/* Temperature and Icon */}
      <div className="flex items-center justify-center mb-6">
        <img
          src={iconUrl}
          alt={weather.description}
          className="w-20 h-20"
        />
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-800">
            {weather.temperature}°
          </div>
          <div className="text-gray-600">
            Feels like {weather.feels_like}°
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-blue-600 font-semibold">Humidity</div>
          <div className="text-gray-800 text-lg">{weather.humidity}%</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-blue-600 font-semibold">Pressure</div>
          <div className="text-gray-800 text-lg">{weather.pressure} hPa</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-blue-600 font-semibold">Wind Speed</div>
          <div className="text-gray-800 text-lg">{weather.wind_speed} m/s</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-blue-600 font-semibold">Visibility</div>
          <div className="text-gray-800 text-lg">{weather.visibility} km</div>
        </div>
      </div>
    </div>
  )
}