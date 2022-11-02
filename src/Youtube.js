import axios from 'axios'

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3/api',
    params: 'snippet',
    maxResults: 23,
    key: 'AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc',
    chart: 'mostPopular',
    maxResults: 10,
    regionCode: 'NG'
})