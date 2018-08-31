<template>
  <div id="conteudo">
    <div id="floating-panel">
      <button id="return" v-on:click="onClickVoltar()">Voltar</button>
    </div>
    <div id="mapContratante"></div>
  </div>
</template>

<script>
export default {
  name: "ContratanteMap",
  data() {
    return {};
  },
  methods: {
    onClickVoltar: function() {
      this.$router.push({
        name: "Contratantes"
      });
    },
    onClick: function(element, eventName, handler) {
      //console.log(element, eventName, handler);
      if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, handler);
      } else {
        element["on" + eventName] = handler;
      }
    }
  },
  mounted: function() {
    const context = this;
    let data = this.$route.params.data;
    let center = { lat: data.LATITUDE , lng: data.LONGITUDE };
    let title = data.DESCRICAOEXIBIVELCLIENTE;

    this.google.load(function(googleInstance) {
      let map = new googleInstance.maps.Map(
        document.getElementById("mapContratante"),
        {
          zoom: 15,
          center: center
        }
      );

      let contentString =
        '<div id="container-iw">' +
        '<h1 id="title-iw">' +
        title +
        "</h1>" +
        '<div id="bodyContent">' +
        '</br>' +
        '<p class="left"><b>RUA: </b>' + data.LOGRADOURO + '</p>'+
        '<p class="left"><b>Número: </b>' + data.NUMERO + '</p>'+
        '<p class="left"><b>Bairro: </b>' + data.BAIRRO + '</p>'+
        '<p class="left"><b>Cidade: </b>' + data.CIDADE +'</p>'+
        '<p class="left"><b>UF: </b>' + data.ESTADO + '</p>'+
        '<p class="left"><b>CEP: </b>' + data.CEP +'</p>'+
        '</br>' +
        '<p><button class="button" id="transacao">Histórico de transações</button> ' +
        "</p>" +
        "</div>" +
        "</div>";

      let infowindow = new googleInstance.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,  
      });

      let marker = new googleInstance.maps.Marker({
        position: center,
        map: map,
        title: title
      });

      marker.addListener("click", function() {
        infowindow.open(map, marker);

        //var el = document.getElementById('container-iw').parentNode.parentNode.parentNode;       
        //el = (el.previousElementSibling)?el.previousElementSibling:el.previousSibling;
        //el.style.display = 'none';

        context.onClick(
          document.getElementById("transacao"),
          "click",
          function() {
            context.$router.push({
              name: "ContratanteHeat",
              params: { data: context.$route.params.data }
            });
          }
        );
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

#mapContratante {
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

.bodyContent{
  text-align: right;
}
</style>
