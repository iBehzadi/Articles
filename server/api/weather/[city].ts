export default defineEventHandler(async (event) => {
  const city = event.context.params?.city;
  const { weatherKey } = useRuntimeConfig();
  const uri = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weatherKey}`;
  const data = await $fetch(uri);
  return data;
});
