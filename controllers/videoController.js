const axios = require('axios');

let ax = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

class VideoController {
  static getVideos(req, res) {
    ax
      .get(`/search?part=snippet&q=${req.body.title}&type=video&key=${process.env.YOUTUBE_TOKEN}`)
      .then(({ data })=> {
        console.log(data)
        res.status(200).json(data.items[0].id.videoId)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = VideoController;