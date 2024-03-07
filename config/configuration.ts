export default () => ({
  port: process.env.PORT,
  database: {
    url: process.env.DATABASE_URL,
    cloudpopSensors: process.env.CLOUDPOP_SENSORS_DATABASE_URL,
  },
  sensor: {
    id: process.env.SENSOR_ID,
    co2: process.env.SENSOR_CO2,
  },
});
