<template>
  <b-container>
    <h3>
      My Recipes:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <MyRecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MyRecipePreview from "../components/MyRecipePreview.vue";
export default {
  name: "MyRecipesPage",
  components: {
    MyRecipePreview
  },

  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/MyRecipes",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        // console.log(response.data);
        // const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
