const axios = require('axios');

let ax = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

class VideoController {
  static getVideos(req, res) {
    console.log(req.body.title, '====')
    ax
      .get(`/search?part=snippet&q=${req.body.title}&type=video&key=${process.env.YOUTUBE_TOKEN}`)
      .then(({ data })=> {
        console.log('ini info dari youtube ***************------', data.items[0])
        res.status(200).json({
          videoId: data.items[0].id.videoId,
          description: data.items[0].snippet.description})
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = VideoController;