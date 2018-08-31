import Vue from "vue";
import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.KEY = "AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k";
GoogleMapsLoader.LIBRARIES = ["visualization"];

const GoogleMapsPlugin = {
  install(Vue, options) {
    Vue.mixin({
      data() {
        return {
          get google() {
            return GoogleMapsLoader;
          }
        };
      }
    });
  }
};

export default GoogleMapsPlugin;
