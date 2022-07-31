<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'main' }">Vue Recipes</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
          <b-nav-item @click="showModalAbout">About</b-nav-item>
          <modalAbout v-show="isModalVisibleAbout" @close="closeModalAbout" />
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Hello Guest</em>
            </template>
            <b-dropdown-item :to="{ name: 'register' }">Register</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'login' }">Login</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item-dropdown text="Actions" right>
            <b-dropdown-item :to="{ name: 'MyFavorites' }">My Favorite Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'MyRecipes' }">My Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'MyFamilyRecipes' }">My Family Recipes</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item @click="showModal">Add New Recipe</b-nav-item>
          <modal v-show="isModalVisible" @close="closeModal" />
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ $root.store.username }}</em>
            </template>
            <b-dropdown-item @click="Logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <!-- <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <button type="button" class="btn" @click="showModalAbout"><b>About</b></button>|
      <modalAbout v-show="isModalVisibleAbout" @close="closeModalAbout" /> -->
      <!-- {{ !$root.store.username }} -->
      <!-- <span v-if="!$root.store.username">
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
    <router-view /> -->
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
