<template>
  <div class="lm-col" @mousedown="mousedown">{{isResizing}}</div>
</template>

<script>
export default {
  name: "WorkspaceCol",
  data() {
    return {
      isResizing: null
    };
  },
  mounted() {
    document.addEventListener("mouseup", () => {
      this.isResizing = false;
    });
    document.addEventListener("mousemove", e => {
      if (this.isResizing) {
        console.log(e);
      }
    });
  },
  methods: {
    mousedown(e) {
      e.preventDefault();
      this.isResizing = true;
    }
  }
};
</script>

<style>
.lm-workspace .lm-layout .lm-row .lm-col {
  height: 150px;
  margin-left: 10px;
  margin-bottom: 15px;
  width: 65px;

  background-color: blueviolet;

  cursor: col-resize;
}
</style>
