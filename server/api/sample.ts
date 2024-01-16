export default defineEventHandler(async (event) => {
  //handle query params
  const { name } = getQuery(event);

  //handle post data
  const { age } = await readBody(event);

  return {  message: `Hello, ${name}! you are ${age} years old.` };

  // const data = await $fetch(
  //   "https://api.currencyapi.com/v3/latest?apikey=cur_live_YsPK7oJa3olC1Vjp1R1t993UZpDLvkLTtAmqn37W"
  // );

  // return data
});
