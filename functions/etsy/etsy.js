const process = require('process')

const axios = require('axios')
const qs = require('qs')

const handler = async function (event) {
  // apply our function to the queryStringParameters and assign it to a variable
 
  // Get env var values defined in our Netlify site UI

  // TODO: customize your URL and API keys set in the Netlify Dashboard
  // this is secret too, your frontend won't see this
  const { API_SECRET } = process.env
  const URL = `https://openapi.etsy.com/v2/listings/active?api_key=${API_SECRET}`;

  console.log('Constructed URL is ...', URL)

  try {
    const { data } = await axios.get(URL)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { data, headers, status, statusText } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
