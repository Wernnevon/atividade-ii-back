const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi({
  clientId: "0756baf4507b4ef094ca1779dd336f3d",
  clientSecret: "8b4863e4b40944079c4cf5d650012030",
});
spotifyApi.gran
var tknSpotify;
module.exports = {
  async spotify(req, res) {
      await spotifyApi.clientCredentialsGrant().then(data => {
        tknSpotify = data.body['access_token'];
      }) .catch(err => {
        console.log('Something went wrong when retrieving an access token', err);
      });
    
    spotifyApi.setAccessToken(tknSpotify);
    console.log("Server UP");
    return res.json({messege: "Token generated"});
    },

  async show(req, res) {
    let artist;
    await spotifyApi.getArtist(req.params.id).then(
      function (data) {
        artist = data.body;
        console.log("Artist information", data.body);
      },
      function (err) {
        console.error(err);
      }
    );
    return res.json(artist);
  },
  async showRelated(req, res) {
    let artist;
    await spotifyApi.getArtistRelatedArtists(req.params.id).then(
      function (data) {
        artist = data.body;
        console.log("Artist information", data.body);
      },
      function (err) {
        console.error(err);
      }
    );
    return res.json(artist);
  },
  async indexByName(req, res) {
    let artist;
    await spotifyApi.searchArtists(req.params.name).then(
      function (data) {
        artist = data.body;
        console.log("Artist information", data.body);
      },
      function (err) {
        console.error(err);
      }
    );
    return res.json(artist);
  },
};
