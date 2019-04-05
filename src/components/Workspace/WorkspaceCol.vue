<template>
  <div
    :class="'lm-col' + (isResizing ? '' : ' easing')"
    @mousedown.left="mousedown"
    v-bind:style="{width: width+'px'}"
  >
    <div class="lm-remove-col" @click.left="removeCol">
      <font-awesome-icon icon="times"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceCol",
  props: ["col"],
  data() {
    return {
      isResizing: null,
      initialX: null,
      width: 65,
      prevWidth: 65
    };
  },
  mounted() {
    console.log(this.col.id + " mounted");
    document.addEventListener("mouseup", this.mouseup);
    document.addEventListener("mousemove", this.mousemove);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.mouseup);
    document.removeEventListener("mousemove", this.mousemove);
  },
  methods: {
    mousedown(e) {
      e.preventDefault();
      this.isResizing = true;
      this.initialX = e.x;
    },
    mouseup() {
      this.isResizing = false;
      this.initialX = null;
      if (this.width > 0 && this.width < 107.5) {
        this.width = 65;
      } else if (this.width > 890) {
        this.width = 890;
      } else {
        for (let i = 0; i < 12; i++) {
          if (this.width >= 107.5 + i * 75 && this.width < 182.5 + i * 75) {
            this.width = 140 + i * 75;
            break;
          }
        }
      }
      this.prevWidth = this.width;
    },
    mousemove(e) {
      if (this.isResizing) {
        const newWidth = this.prevWidth + e.x - this.initialX;
        if (newWidth >= 65) {
          this.width = this.prevWidth + e.x - this.initialX;
        }
      }
    },
    removeCol() {
      this.$emit("removed", this.col.id);
    }
  }
};
</script>

<style>
.lm-workspace .lm-layout .lm-row .lm-col {
  position: relative;

  height: 150px;
  margin-left: 10px;
  margin-bottom: 15px;

  background-color: blueviolet;

  cursor: col-resize;
}

.lm-workspace .lm-layout .lm-row .lm-col .lm-remove-col {
  position: absolute;
  top: 0;
  right: 0;

  width: 25px;
  height: 25px;

  text-align: center;

  cursor: pointer;
}

.lm-workspace .lm-layout .lm-row .lm-col.easing {
  transition: width 500ms ease;
}
</style>
