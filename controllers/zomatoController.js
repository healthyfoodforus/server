const axios = require('axios')
let ax = axios.create({ baseURL: 'https://developers.zomato.com/api/v2.1' })
ax.defaults.headers.common['user-key'] = `${process.env.ZOMATO_KEY}`

class zomatoController {
    static getCategories(req, res) {
        ax
            .get('/categories')
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }

    static getCity(req, res) {
        const { q, lat, lon, city_ids, count } = req.query
        ax
            .get(`/cities?q=${q}&lat=${lat}&lon=${lon}&city_ids${city_ids}&${count}`)
            .then(({ data }) => {
                res.status(200).json(data.location_suggestions[0])
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }

    static getCollections(req, res) {
        const { city_id, lat, lon, count } = req.query
        ax
            .get(`/collections?city_id=${city_id}&lat=${lat}&lon=${lon}&count=${count}`)
            .then(({ data }) => {
                res.status(200).json(data.collections)
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }

    static getCuisines(req, res) {
        const { city_id, lat, lon } = req.query
        ax
            .get(`/cuisines?city_id=${city_id}&lat=${lat}&lon=${lon}`)
            .then(({ data }) => {
                res.status(200).json(data.cuisines)
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }

    static getEstablishments(req, res) {
        const { city_id, lat, lon } = req.query
        ax
            .get(`/establishments?city_id=${city_id}&lat=${lat}&lon=${lon}`)
            .then(({ data }) => {
                res.status(200).json(data.establishments)
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }

    static getHealthyRestaurants(req, res) {
        const { entity_id, entity_type, q, start, count, lat, lon, radius, cuisines, establishment_type, collection_id, category, sort, order } = req.query
        ax
            .get(`/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${q}&start=${start}&count=${count}&lat=${lat}&lon=${lon}&radius=${radius}&cuisines=${cuisines}&establishment_type=${establishment_type}&collection_id=${collection_id}&category=${category}&sort=${sort}&order=${order}`)
            .then(({ data }) => {
                res.status(200).json(data.restaurants)
            })
            .catch((err) => {
                res.status(500).json(err.message)
            })
    }
}

module.exports = zomatoController