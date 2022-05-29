// import axios from "axios";

export class HttpClient {
  async get(url: string) {
    // const { data, status } = await axios.get(url);
    const reponse = await fetch(url);
    const data = reponse.json();
    const status = reponse.status;
    console.log(`GET ${url} ${status}`);
    return { data, status };
  }
}
