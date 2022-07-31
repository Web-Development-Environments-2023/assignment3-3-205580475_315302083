<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <button id="button" v-if="$root.store.username" @click="AddToFavorites()">Add To Favorites</button>
       
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>popularity: {{ recipe.popularity }} likes</div>
              <div>servings: {{ recipe.servings }} </div>
              <div>Gluten Free: {{ recipe.glutenFree }} </div>
              <div>vegan: {{ recipe.vegan }} </div>
              <div>vegetarian: {{ recipe.vegetarian }} </div>
            </div>
            Ingredients:
            <ol>
               <div> {{ recipe.extendedIngredients }} </div>
              <!-- <li v-for="s in recipe.instructions" :key="s.number">
                {{ s.step }}
              </li> -->
            </ol>
            <!-- Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul> -->
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
               <div> {{ recipe.instructions }} </div>
              <!-- <li v-for="s in recipe.instructions" :key="s.number">
                {{ s.step }}
              </li> -->
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          //this.$root.store.server_domain + "/recipes/9",
          this.$root.store.server_domain + "/users/MyRecipes/"+this.$route.params.recipeId,
          // {
          //   params: { id: this.$route.params.recipeId }
          // }
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      console.log(response)
      let {
        instructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        servings,
        glutenFree,
        vegan,
        vegetarian
      } = response.data;

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //     return fstep.steps;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        // _instructions,
        //analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        servings,
        glutenFree,
        vegan,
        vegetarian
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async AddToFavorites() {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipeId: this.$route.params.recipeId
          }
        );
        // console.log(response.data);
        // const recipes = response.data.recipes;
        // const recipes = response.data;
        // this.recipes = [];
        // this.recipes.push(...recipes);
        // console.log(this.recipes);
        document.getElementById("button").disabled = true;
        alert("Recipe added to favorites!!");
      } catch (error) {
          alert("Recipe not added");
          console.log(error);
      }
    }
}};

</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
