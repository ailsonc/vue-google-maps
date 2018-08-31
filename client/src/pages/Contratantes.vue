<template>
  <div id="contratantes">
    <div class="container-box">
      <header class="box">
        <img src="@/assets/img/logo.png">
      </header>
      <main class="box">
        <h3 class="title-contratantes">Selecione com qual contratante deseja:</h3>
	      <div class="list-contratantes">
		      <input v-model="search" class="search-contratante" type="text" placeholder="Pesquisar Contratante">
		      <ul>
				    <li v-for="(item , i) in filteredItems" 
              :cod="item.IDLOJA" 
              :nome="item.DESCRICAOEXIBIVELCLIENTE"
              v-on:click="onClick(item)" 
              v-bind:ref="item">
              <a href="#"><span class="cod">{{item.IDLOJA}}</span><span class="nome">{{item.DESCRICAOEXIBIVELCLIENTE}}</span></a>
            </li>
		      </ul>
	      </div>
      </main>
      <footer class="box">
        <div class="signature">© Copyright 2018</div>
      </footer>
    </div>   
  </div>
</template>

<script>
import contratanteService from "../services/ContratanteService";

export default {
  name: "Contratantes",
  data() {
    return {
      search: "",
      items: []
    };
  },
  mounted: function() {
    contratanteService.getContratante().then(res => {
      this.items.push(...res.data);
    });
  },
  methods: {
    onClick: function(item) {
      this.$router.push({
        name: "Contratante",
        params: { data: item }
      });
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return (
          item.DESCRICAOEXIBIVELCLIENTE.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          String(item.IDLOJA).toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    }
  }
};
</script>

<style scoped>
/* CSS Grid Layout */
.container-box {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  grid-template-rows: 100px 400px 50px;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
}

header {
  grid-area: header;
}

aside {
  grid-area: aside;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

.signature {
  font-size: 14px;
  top: 0;
  text-align: right;
}

img {
  float: left;
}
/******************************************************/
h3 {
  font-size: 25px;
  font-weight: 700;
  color: #808080;
  text-align: left;
}

.title-contratantes {
  left: 0;
}

.list-contratantes-sub,
.list-contratantes {
  width: 100%;
  border: 1px solid #c1c1c1;
  border-radius: 6px;
  overflow: hidden;
}

.list-contratantes-sub > input,
.list-contratantes > input {
  width: 100%;
  border: 0;
  padding: 5px;
  border-bottom: 1px solid #c1c1c1;
}

.list-contratantes-sub ul,
.list-contratantes ul {
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 285px;
  overflow-y: scroll;
}

.list-contratantes-sub ul li a,
.list-contratantes ul li a {
  display: block;
  border-bottom: 1px solid #e5e5e5;
  background: none repeat scroll 0% 0% #fff;
  height: 29px;
  overflow: hidden;
}

.list-contratantes-sub ul li.active a .cod,
.list-contratantes-sub ul li a:hover .cod,
.list-contratantes ul li.active a .cod,
.list-contratantes ul li a:hover .cod {
  background: #d1202f;
  color: #fff;
  text-decoration: none;
}

.list-contratantes-sub ul li.active a,
.list-contratantes-sub ul li a:hover,
.list-contratantes ul li.active a,
.list-contratantes ul li a:hover {
  background: #d1202f;
}

.list-contratantes-sub ul li.active a .nome,
.list-contratantes-sub ul li a:hover .nome,
.list-contratantes ul li.active a .nome,
.list-contratantes ul li a:hover .nome {
  color: #fff;
}

.list-contratantes-sub ul li a .cod,
.list-contratantes ul li a .cod {
  background: none repeat scroll 0% 0% #efefef;
  float: left;
  display: block;
  padding: 5px;
  width: 75px;
  text-align: center;
}

.list-contratantes-sub ul li a .nome,
.list-contratantes ul li a .nome {
  float: left;
  display: block;
  padding: 5px;
}

.list-contratantes-sub ul li a .tipo,
.list-contratantes ul li a .tipo {
  float: right;
  display: block;
  padding: 5px;
}

.list-contratantes ul li a .nome {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #808080;
}

.list-contratantes ul li a .cod {
  font-family: "Lato", sans-serif;
  color: #d1202f;
  text-decoration: none;
}
</style>
