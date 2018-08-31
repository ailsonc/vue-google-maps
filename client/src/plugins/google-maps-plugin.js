import Vue from "vue";
import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.KEY = "[YOUR_API_KEY]";
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
