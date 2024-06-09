import getWeatherData from "./get-weather-data";

const locations = [
  {
    city: "New York",
    state: "NY",
    latitude: 40.7128,
    longitude: -74.006,
    population: 8419600,
  },
  {
    city: "Los Angeles",
    state: "CA",
    latitude: 34.0522,
    longitude: -118.2437,
    population: 3980400,
  },
  {
    city: "Chicago",
    state: "IL",
    latitude: 41.8781,
    longitude: -87.6298,
    population: 2716000,
  },
  {
    city: "Houston",
    state: "TX",
    latitude: 29.7604,
    longitude: -95.3698,
    population: 2328000,
  },
  {
    city: "Phoenix",
    state: "AZ",
    latitude: 33.4484,
    longitude: -112.074,
    population: 1690000,
  },
  {
    city: "Philadelphia",
    state: "PA",
    latitude: 39.9526,
    longitude: -75.1652,
    population: 1584200,
  },
  {
    city: "San Antonio",
    state: "TX",
    latitude: 29.4241,
    longitude: -98.4936,
    population: 1547200,
  },
  {
    city: "San Diego",
    state: "CA",
    latitude: 32.7157,
    longitude: -117.1611,
    population: 1423800,
  },
  {
    city: "Dallas",
    state: "TX",
    latitude: 32.7767,
    longitude: -96.797,
    population: 1343000,
  },
  {
    city: "San Jose",
    state: "CA",
    latitude: 37.3382,
    longitude: -121.8863,
    population: 1035400,
  },
];

export default async function WeatherA() {
  const data = await getWeatherData(locations);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Population</th>
            <th>Temperature</th>
            <th>Weather Code</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.location.city}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td>{item.location.city}</td>
              <td>{item.location.state}</td>
              <td>{item.location.latitude}</td>
              <td>{item.location.longitude}</td>
              <td>{item.location.population}</td>
              <td>{item.temperature}</td>
              <td>{item.weatherCode}</td>
              <td>{item.windSpeed}</td>
              <td>{item.windDirection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
