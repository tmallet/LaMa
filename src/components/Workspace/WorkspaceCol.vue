<template>
  <div
    :class="'lm-col' + (isResizing ? '' : ' easing')"
    @mousedown.left="mousedown"
    v-bind:style="{width: width+'px'}"
  >
    {{col.classes}}
    <div class="lm-remove-col" @click.left="removeCol">
      <font-awesome-icon icon="times"/>
    </div>
  </div>
</template>

<script>
const sizes = ["xs", "sm", "md", "lg"];
export default {
  name: "WorkspaceCol",
  props: ["col", "size"],
  data() {
    return {
      isResizing: null,
      initialX: null,
      width: null,
      prevWidth: null
    };
  },
  created() {
    const currentSizeIndex = sizes.indexOf(this.size);
    sizes.forEach((size, index) => {
      if (index < currentSizeIndex) this.col.classes[size] = 12;
      else this.col.classes[size] = 1;
    });
    this.width = 140 + (this.col.classes[this.size] - 2) * 75;
  },
  mounted() {
    document.addEventListener("mouseup", this.mouseup);
    document.addEventListener("mousemove", this.mousemove);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.mouseup);
    document.removeEventListener("mousemove", this.mousemove);
  },
  watch: {
    size(next) {
      const sizeValue = this.col.classes[next];
      this.width = 140 + (sizeValue - 2) * 75;
      this.prevWidth = this.width;
    }
  },
  methods: {
    mousedown(e) {
      e.preventDefault();
      this.isResizing = true;
      this.initialX = e.x;
    },
    mouseup() {
      // TODO : clean this
      if (this.isResizing) {
        if (this.width > 890) {
          this.width = 890;
          this.setClasses(12);
        } else {
          for (let i = 0; i < 12; i++) {
            if (
              this.width >= 107.5 + (i - 1) * 75 &&
              this.width < 182.5 + (i - 1) * 75
            ) {
              this.width = 140 + (i - 1) * 75;
              this.setClasses(i + 1);
              break;
            }
          }
        }
        this.initialX = null;
        this.isResizing = false;
        this.prevWidth = this.width;
      }
    },
    mousemove(e) {
      if (this.isResizing) this.width = this.prevWidth + e.x - this.initialX;
    },
    removeCol() {
      this.$emit("removed", this.col.id);
    },
    setClasses(nbCol) {
      const prevNbCol = this.col.classes[this.size];
      const newSizes = sizes.slice(sizes.indexOf(this.size) + 1, sizes.length);
      for (const size of newSizes) {
        if (this.col.classes[size] !== prevNbCol) break;
        this.col.classes[size] = nbCol;
      }
      this.col.classes[this.size] = nbCol;
    }
  }
};
</script>

<style>
.lm-workspace .lm-layout .lm-row .lm-col {
  position: relative;

  height: 150px;
  min-width: 65px;
  max-width: 890px;
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
