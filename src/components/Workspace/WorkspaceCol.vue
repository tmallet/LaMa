<template>
  <div>
    <div
      :class="'lm-col-offset' + (isDragging ? '' : ' easing')"
      :style="{width: offsetWidth + 'px', maxWidth: (890-prevWidth) + 'px'}"
    />
    <div
      :class="'lm-col' + (isResizing ? '' : ' easing')"
      @mousedown.left="mousedown"
      :style="{width: width + 'px', maxWidth: (890-prevOffsetWidth) + 'px'}"
    >
      <div class="lm-remove-col" @click.left="removeCol">
        <font-awesome-icon icon="times"/>
      </div>
      <div v-if="size !== 'xs'" class="lm-offset" @mousedown.left="drag"></div>
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
      isResizing: false,
      isDragging: false,
      initialX: null,
      width: 65,
      offsetWidth: 0,
      prevWidth: null,
      prevOffsetWidth: 0
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
      if (!e.target.classList.contains("lm-offset")) {
        this.isResizing = true;
        this.initialX = e.x;
      }
    },
    mouseup() {
      // TODO : clean this
      if (this.isResizing) {
        if (890 - this.prevOffsetWidth < this.width) {
          this.width = 890 - this.offsetWidth;
        } else if (this.width > 890) {
          this.width = 890;
          this.setClasses(12);
        } else if (this.width < 65) {
          this.width = 65;
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
      } else if (this.isDragging) {
        if (this.offsetWidth > 890 - this.width) {
          this.offsetWidth = 890 - this.width;
        } else if (this.offsetWidth < 32.5) {
          this.offsetWidth = 0;
        } else {
          for (let i = 0; i < 12; i++) {
            if (
              this.offsetWidth >= 107.5 + (i - 1) * 75 &&
              this.offsetWidth < 182.5 + (i - 1) * 75
            ) {
              this.offsetWidth = 150 + (i - 1) * 75;
              break;
            }
          }
        }
        this.initialX = null;
        this.isDragging = false;
        this.prevOffsetWidth = this.offsetWidth;
      }
    },
    mousemove(e) {
      if (this.isResizing) {
        const newWidth = this.prevWidth + e.x - this.initialX;
        this.width = newWidth;
      } else if (this.isDragging) {
        this.offsetWidth = this.prevOffsetWidth + e.x - this.initialX;
      }
    },
    drag(e) {
      e.preventDefault();
      this.isDragging = true;
      this.initialX = e.x;
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
  display: inline-block;
  position: relative;

  height: 150px;
  min-width: 65px;
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

.lm-workspace .lm-layout .lm-row .lm-col-offset.easing {
  transition: width 500ms ease;
}

.lm-workspace .lm-layout .lm-row .lm-col .lm-offset {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10px;

  cursor: -webkit-grab;

  background-color: black;
}

.lm-workspace .lm-layout .lm-row .lm-col-offset {
  display: inline-block;
  position: relative;

  height: 150px;
  margin-left: 10px;
  margin-bottom: 15px;

  background-color: rgba(137, 43, 226, 0.329);
}
</style>
