const axios = require('axios');

// let edamam = axios.create({
//   baseURL: `https://api.edamam.com/search?app_id=07a4fc76&app_key=4b813df2c75cab2382098db2577c342b`
// });

class recipeController {
    static getRecipe(req,res) {
        console.log("masuk ke method getRecipe", req.query)
        let keywords = req.query;
        let edamam = `https://api.edamam.com/search?app_id=07a4fc76&app_key=4b813df2c75cab2382098db2577c342b`
        let link = `${edamam}&q=${keywords.q}&from=0&to=${keywords.to}&health=${keywords.health}`

        console.log("ini link nya", link)
        axios
            .get(link)
            .then(({data})=> {
                console.log("dapat recipe", data)
                res.status(200).json(data.hits);
            })
            .catch(err => {
                console.log("terjadi error get recipe")
                res.status(500).json(err.message)
            })
    }
}

module.exports = recipeController;