<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <button type="button" class="btn" @click="showModalAbout"><b>About</b></button>|
      <modalAbout v-show="isModalVisibleAbout" @close="closeModalAbout" />
      <!-- {{ !$root.store.username }} -->
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        <router-link :to="{ name: 'MyFavorites' }">My Favorite Recipes</router-link>|
        <router-link :to="{ name: 'MyRecipes' }">My Recipes</router-link>|
        <router-link :to="{ name: 'MyFamilyRecipes' }">My Family Recipes</router-link>|
        <button type="button" class="btn" @click="showModal"><b>Add New Recipe</b></button>|
      <modal v-show="isModalVisible" @close="closeModal" />
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import modal from './components/AddRecipe.vue';
import modalAbout from './components/AboutModal.vue';
export default {
  name: "App",
  components: {
      modal,
      modalAbout
    },
  data () {
      return {
        isModalVisible: false,
        isModalVisibleAbout: false,
      };
    },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    showModal() {
        this.isModalVisible = true;
      },
    closeModal() {
        this.isModalVisible = false;
      },
    showModalAbout() {
        this.isModalVisibleAbout = true;
      },
    closeModalAbout() {
        this.isModalVisibleAbout = false;
      }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn {
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

.btn:hover {background: #eee;}
</style>
