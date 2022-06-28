<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <input type="text" placeholder="Search.." name="name" id="nameRec">
    <input type="number" min="0" placeholder="Number of recipe.." name="number" id="numberRec">
    <button @click="afterclick()">Search</button>
    <div v-if="awesome">
      <SearchRecipe title="Searched Recipes" :recipeName="name" :recipeNumber="number" class="RandomRecipes center"/>
    </div>
  </div>
</template>

<script>
import SearchRecipe from "../components/SearchRecipe";
export default {
  components: {
    SearchRecipe
  },
  data() {
    return {
      awesome: false,
      name: "",
      number: ""
    };
  },
  mounted() {
    document.getElementById("nameRec").value = localStorage.getItem("nameRec");
    document.getElementById("numberRec").value = localStorage.getItem("numberRec");
    if (!(localStorage.getItem("nameRec") === null)) {
      this.name = localStorage.getItem("nameRec");
      this.number = localStorage.getItem("numberRec");
      this.awesome = true;
    }
  },
  methods: {
    afterclick() {
      this.awesome = !this.awesome;
      this.name = document.getElementById("nameRec").value;
      this.number = document.getElementById("numberRec").value;
      localStorage.setItem("nameRec", this.name);
      localStorage.setItem("numberRec", this.number);
    }
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
