import axios from "axios";

class GoogleService {
  getGoogleapi(cidadeLoja) {  
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + cidadeLoja + '&components=country:BR&key=AIzaSyA2Q-yuxdDBFlisMhmHSJvJWzfUY5GettA&callback=initMap';
    return axios.get(url);
  }
}

export default new GoogleService();