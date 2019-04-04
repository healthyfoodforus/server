const axios = require('axios');

let ax = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

class VideoController {

  static getVideos(req, res) {
    ax
      .get(`/search?part=snippet&q=${req.params.keyword}&type=${req.params.type}&key=${process.env.YOUTUBE_TOKEN}`)
      .then(videos => {
        res.status(200).json(videos)
      })
      .catch(err => {
        console.log(err.message)
        res.status(400).json(err)
      })
  }
}

module.exports = VideoController;