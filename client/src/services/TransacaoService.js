import axios from "axios";

class TransacaoService {
  getTransacao(idloja) {  
    let url = "http://localhost:3000";
    return axios.get(url + "/gis/transacoes/" + idloja);
  }
}

export default new TransacaoService();