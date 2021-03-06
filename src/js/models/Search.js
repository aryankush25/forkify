import axios from "axios";

class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const result = await axios(
        `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
      );
      this.recipes = result.data.recipes;
      console.log(this.recipes);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
}

export default Search;
