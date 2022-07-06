<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <h1 class="modalTitle">About Us!</h1>
      <button
        type="button"
        class="btn-green"
        @click="close"
        aria-label="Close modal"
       >
        Close me!
      </button>
    </div>
  </transition>
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
</style>