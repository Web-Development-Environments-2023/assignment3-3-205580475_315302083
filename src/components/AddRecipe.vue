<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <h1 class="modalTitle">Add New Recipe</h1>
      <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
        <b-form-group
          id="input-group-recipeName"
          class="input-group"
          label-cols-sm="1"
          label="Recipe Name:"
          label-for="recipeName"
          label-align="center"
        >
          <b-form-input
            id="recipeName"
            v-model="$v.form.recipeName.$model"
            type="text"
            :state="validateState('recipeName')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.recipeName.required">
            Recipe name is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-readyInMinutes"
          class="input-group"
          label-cols-sm="1"
          label="preparation Time:"
          label-for="readyInMinutes"
          label-align="center"
        >
          <b-form-input
            id="readyInMinutes"
            v-model="$v.form.readyInMinutes.$model"
            type="text"
            :state="validateState('readyInMinutes')"
          ></b-form-input>
          <b-form-invalid-feedback>
            preparation time is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-image"
          class="input-group"
          label-cols-sm="1"
          label="Image:"
          label-for="image"
          label-align="center"
        >
          <b-form-input
            id="image"
            v-model="$v.form.image.$model"
            type="text"
            :state="validateState('image')"
          ></b-form-input>
          <b-form-invalid-feedback>
            Image is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-popularity"
          class="input-group"
          label-cols-sm="1"
          label="Popularity:"
          label-for="popularity"
          label-align="center"
        >
          <b-form-input
            id="popularity"
            v-model="$v.form.popularity.$model"
            type="text"
            :state="validateState('popularity')"
          ></b-form-input>
          <b-form-invalid-feedback>
            Popularity is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-vegan"
          class="input-group"
          label-cols-sm="1"
          label="Is Vegan:"
          label-for="vegan"
          label-align="center"
        >
          <b-form-input
            id="vegan"
            type="text"
            v-model="$v.form.vegan.$model"
            :state="validateState('vegan')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.vegan.required">
            Vegan is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-vegetarian"
          class="input-group"
          label-cols-sm="1"
          label="Is Vegetarian:"
          label-for="vegetarian"
          label-align="center"
        >
          <b-form-input
            id="vegetarian"
            type="text"
            v-model="$v.form.vegetarian.$model"
            :state="validateState('vegetarian')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.vegetarian.required">
            Vegetarian is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-glutenFree"
          class="input-group"
          label-cols-sm="1"
          label="Is Gluten Free:"
          label-for="glutenFree"
          label-align="center"
        >
          <b-form-input
            id="glutenFree"
            type="text"
            v-model="$v.form.glutenFree.$model"
            :state="validateState('glutenFree')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.glutenFree.required">
            Gluten free is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-extendedIngredients"
          class="input-group"
          label-cols-sm="1"
          label="Ingredients:"
          label-for="extendedIngredients"
          label-align="center"
        >
          <b-form-input
            id="extendedIngredients"
            type="text"
            v-model="$v.form.extendedIngredients.$model"
            :state="validateState('extendedIngredients')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.extendedIngredients.required">
            Ingredients is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-instructions"
          class="input-group"
          label-cols-sm="1"
          label="Instructions:"
          label-for="instructions"
          label-align="center"
        >
          <b-form-input
            id="instructions"
            type="text"
            v-model="$v.form.instructions.$model"
            :state="validateState('instructions')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.instructions.required">
            Instructions is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-servings"
          class="input-group"
          label-cols-sm="1"
          label="How Many Servings:"
          label-for="servings"
          label-align="center"
        >
          <b-form-input
            id="servings"
            type="text"
            v-model="$v.form.servings.$model"
            :state="validateState('servings')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.servings.required">
            Servings is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button
          type="submit"
          variant="primary"
          style="width:250px;"
          class="ml-5 w-75"
          >Register</b-button>
        <b-button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </b-button>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Register failed: {{ form.submitError }}
      </b-alert>
    </div>
  </transition>
</template>
<script>
  import {
    required
  } from "vuelidate/lib/validators";
  export default {
    name: 'modal',
    data() {
      return {
        form: {
          recipeName: "",
          readyInMinutes: "",
          image: "",
          popularity: "",
          vegan: "",
          vegetarian: "",
          glutenFree: "",
          extendedIngredients: "",
          instructions: "",
          servings: "",
          submitError: undefined
        },
        errors: [],
        validated: false
      }
    },
    validations: {
      form: {
        recipeName: {
          required
        },
        readyInMinutes: {
          required
        },
        image: {
          required
        },
        popularity: {
          required
        },
        vegan: {
          required
        },
        vegetarian: {
          required
        },
        glutenFree: {
          required
        },
        extendedIngredients: {
          required
        },
        instructions: {
          required
        },
        servings: {
          required
        }
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      async Register() {
        try {
          const response = await this.axios.post(
            // "https://test-for-3-2.herokuapp.com/user/Register",
            this.$root.store.server_domain + "/users/MyRecipes",
            {
              title: this.form.recipeName,
              readyInMinutes: this.form.readyInMinutes,
              image: this.form.image,
              popularity: this.form.popularity,
              vegan: this.form.vegan,
              vegetarian: this.form.vegetarian,
              glutenFree: this.form.glutenFree,
              extendedIngredients: this.form.extendedIngredients,
              instructions: this.form.instructions,
              servings: this.form.servings
            }
          );
          this.$router.push("/users/MyRecipes");
          this.close();
          // console.log(response);
        } catch (err) {
          console.log(err.response);
          this.form.submitError = err.response.data.message;
        }
      },
      onRegister() {
        // console.log("register method called");
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        // console.log("register method go");
        this.Register();
      },
      onReset() {
        this.form = {
          recipeName: "",
          readyInMinutes: "",
          image: "",
          popularity: "",
          vegan: "",
          vegetarian: "",
          glutenFree: "",
          extendedIngredients: "",
          instructions: "",
          servings: ""
        };
        this.$nextTick(() => {
          this.$v.$reset();
        });
      }
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flow-root;
    justify-content: center;
    align-items: center;
    opacity: 1;
    z-index: -1;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .container {
    max-width: 500px;
  }

  .modalTitle {
    font-weight: 900;
    color: aliceblue;
  }

  .input-group {
    color: #4AAE9B;
    background: green;
    font-weight: bold;
  }
</style>