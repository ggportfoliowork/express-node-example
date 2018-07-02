import axios from 'axios'

const HttpClient = axios.create({
    baseURL: process.env.APP_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    transformResponse: [function (data, response) {
        try {
            var json = JSON.parse(data);
            return json
        }
        catch(err) {
            return data
        }
    }],
})

export default HttpClient