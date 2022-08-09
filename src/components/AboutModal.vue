<template>
  <!-- <transition name="modal-fade"> -->
    <div class="aboutModal">
      <h1 class="modalTitle">About Us!</h1>
      <div class="aboutUs">
        We are Eyal and Roni, Third year information system engineering students <br>
        This is are final project in this course <br>
        If you want to check out our previous projects click this links: <br>
        For Our pacman game project click this link: <a href="https://web-development-environments-2022.github.io/assignment2-315302083_205580475/" style="color: blue">Pacman Project</a> <br>
        For Eyal's personal website project click this link: <a href="https://web-development-environments-2022.github.io/315302083/" style="color: blue">Eyal Website</a> <br>
        For Roni's personal website project click this link: <a href="https://web-development-environments-2022.github.io/205580475/" style="color: blue">Roni Website</a>
      </div>
      <button
        type="button"
        class="btn-green"
        @click="close"
        aria-label="Close modal"
       >
        Close me!
      </button>
    </div>
  <!-- </transition> -->
</template>
<script>
  export default {
    name: 'modalAbout',
    methods: {
      close() {
        this.$emit('close');
      }
    },
  };
</script>
<style>
  .aboutModal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.95;
    overflow-y: auto;
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

  .aboutUs {
    color: aliceblue;
  }
</style>