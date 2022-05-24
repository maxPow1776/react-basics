import axios from "axios";

export default class AnimalsService {
  static url = "http://localhost:4000/animals";

  static async getAllAnimals() {
    const response = await axios.get(this.url);
    return response.data;
  }

  static async getAnimalById(id: string | undefined) {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }
}
