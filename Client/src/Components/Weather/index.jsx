import  { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('Baku'); // Şəhər adı
  const [weatherData, setWeatherData] = useState(null); // Hava məlumatlarını saxlayacaq state
  const [loading, setLoading] = useState(true); // Yüklənmə halı üçün state
  const [error, setError] = useState(null); // Xətalar üçün state

  const apiKey = 'd0104f9617135d3d3b2a262ce5c51aae'; // API açarınız
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL (metric: dərəcəni selsi ilə göstərir)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setWeatherData(response.data); // Gələn məlumatları state-ə yazırıq
        setLoading(false);
      } catch (error) {
        setError(""); // Xəta halında error state-i doldururuq
        setLoading(false);
      }
    };

    fetchWeather(); // Hava məlumatlarını çağır
  }, [city, apiUrl]); // `city` və `apiUrl` dəyişəndə yenidən yüklə

  if (loading) {
    return <p>Yüklənir...</p>;
  }

  if (error) {
    return <p>Xəta: {error}</p>;
  }

  return (
    <div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatur: {weatherData.main.temp}°C</p>
          <p>Hava: {weatherData.weather[0].description}</p>
          <p>Külək Sürəti: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
