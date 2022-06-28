<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "SearchRecipe",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipeName: {
      type: String,
      required: true
    },
    recipeNumber: {
      type: String
    },
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.searchRecipe();
  },
  methods: {
    async searchRecipe() {
      if (this.recipeNumber === "0") {
        this.recipeNumber = "5";
      }
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/recipesByName/" + this.recipeName + "/" + this.recipeNumber,
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
