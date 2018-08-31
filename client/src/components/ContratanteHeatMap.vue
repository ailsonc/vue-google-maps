<template>
  <div id="conteudo">
    <div id="floating-panel">
      <button id="return" v-on:click="onClickVoltar()">Voltar</button>
    </div>
    <div id="mapContratanteHeat"></div>
  </div>  
</template>

<script>
import transacaoService from "../services/TransacaoService";
import googleService from "../services/GoogleService";

export default {
  name: "HeatMap",
  data() {
    return {
      items: []
    };
  },
  methods: {
    onClickVoltar: function() {
      this.$router.push({
        name: "Contratante",
        params: { data: this.$route.params.data }
      });
    },
    processar: function(locations) {
      const context = this;
      this.google.load(function(googleInstance) {
        let map = new googleInstance.maps.Map(
          document.getElementById("mapContratanteHeat"),
          {
            zoom: 4,
            center: { lat: -22.868147, lng: -47.044716 }
          }
        );
        let heatmap = new googleInstance.maps.visualization.HeatmapLayer({
          data: [...context.createGoogleLatLng(locations, googleInstance)],
          map: map
        });
      });
    },
    createGoogleLatLng: function(locations, googleInstance) {
      if (locations && locations.length > 0 && googleInstance) {
        let array = [];
        locations.forEach(location => {
          array.push(
            new googleInstance.maps.LatLng(location.lat, location.lng)
          );
        });
        return array;
      }
      return [];
    },
    getLocations: function(items) {
      return new Promise((resolve, reject) => {
        if (!items || items.length == 0) resolve([]);
        const locations = [];
        let count = 0;
        items.forEach(item => {
          googleService.getGoogleapi(item.ADDRESS).then(res => {
            console.log(item.ADDRESS,' :', res.data.status);
            if(res.data.status == 'OK'){
              locations.push(res.data.results[0].geometry.location);
            }
            count++;
            if (count == items.length) {
              resolve(locations);
            }
          });
        });
      });
    }
  },
  mounted: function() {
    transacaoService.getTransacao(this.$route.params.data.IDLOJA).then(res => {
      this.items.push(...res.data);

      console.log('getTransacao', this.items)

      this.getLocations(this.items).then(locations => {
        this.processar(locations);
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#conteudo {
  width: 100%;
  height: 100%;
}

#mapContratanteHeat {
  width: 100%;
  height: 100%;
}

#return {
  position: absolute;
  top: 70px;
  left: 10px;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 0px;
  text-align: center;
  font-family: "Roboto", "sans-serif";
}

#floating-panel {
  margin-left: -52px;
}
</style>
