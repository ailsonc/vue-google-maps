import axios from "axios";

class ContratanteService {
  getContratante() {
    let url = "http://localhost:3000";
    return axios.get(url + "/gis/contratantes");
  }
}

export default new ContratanteService();
