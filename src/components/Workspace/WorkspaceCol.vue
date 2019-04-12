<template>
  <div>
    <div
      :class="'lm-col-offset' + (isDragging ? '' : ' easing')"
      @mousedown.left="drag"
      :style="{width: offsetWidth + 'px', maxWidth: (890-prevWidth) + 'px'}"
    />
    <div
      :class="'lm-col' + (isResizing ? '' : ' easing')"
      @mousedown.left="mousedown"
      :style="{width: width + 'px', maxWidth: (890-prevOffsetWidth) + 'px'}"
    >
      <div class="lm-col-header">
        <input type="text" v-model="customClasses" placeholder="Custom classes">
      </div>
      <div class="lm-remove-col" @click.left="removeCol">
        <font-awesome-icon icon="times"/>
      </div>
      <div v-if="size !== 'xs'" class="lm-offset" @mousedown.left="drag"></div>
    </div>
  </div>
</template>

<script>
const sizes = ["xs", "sm", "md", "lg", "xl"];
const offsets = ["sm", "md", "lg", "xl"];
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
      prevWidth: 65,
      prevOffsetWidth: 0,
      customClasses: ""
    };
  },
  created() {
    const currentSizeIndex = sizes.indexOf(this.size);
    sizes.forEach((size, index) => {
      if (index < currentSizeIndex) this.col.sizes[size] = 12;
      else this.col.sizes[size] = 1;
    });
    this.width = 140 + (this.col.sizes[this.size] - 2) * 75;
    offsets.forEach(offset => {
      this.col.offsets[offset] = 0;
    });
    this.col.sizeClasses = this.computeSizeClasses();
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
      const offsetValue = this.col.offsets[next] ? this.col.offsets[next] : 0;
      this.offsetWidth = 150 + (offsetValue - 2) * 75;
      this.prevOffsetWidth = this.offsetWidth;

      const sizeValue = this.col.sizes[next];
      this.width = 140 + (sizeValue - 2) * 75;
      this.prevWidth = this.width;
    },
    customClasses() {
      this.col.customClasses = [...this.customClasses.trim().split(" ")];
    }
  },
  methods: {
    mousedown(e) {
      if (
        !e.target.classList.contains("lm-offset") &&
        e.target.nodeName !== "INPUT"
      ) {
        e.preventDefault();
        this.isResizing = true;
        this.initialX = e.x;
      }
    },
    mouseup() {
      // TODO : clean this
      if (this.isResizing) {
        if (890 - this.prevOffsetWidth < this.width) {
          this.width = 890 - this.offsetWidth;
          this.setSizes(12);
        } else if (this.width < 65) {
          this.width = 65;
          this.setSizes(1);
        } else {
          for (let i = 0; i < 12; i++) {
            if (
              this.width >= 107.5 + (i - 1) * 75 &&
              this.width < 182.5 + (i - 1) * 75
            ) {
              this.width = 140 + (i - 1) * 75;
              this.setSizes(i + 1);
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
          this.setOffsets(12 - this.col.sizes[this.size]);
        } else if (this.offsetWidth < 32.5) {
          this.offsetWidth = 0;
          this.setOffsets(0);
        } else {
          for (let i = 0; i < 12; i++) {
            if (
              this.offsetWidth >= 107.5 + (i - 1) * 75 &&
              this.offsetWidth < 182.5 + (i - 1) * 75
            ) {
              this.offsetWidth = 150 + (i - 1) * 75;
              this.setOffsets(i + 1);
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
    setSizes(nbCol) {
      const prevNbCol = this.col.sizes[this.size];
      const newSizes = sizes.slice(sizes.indexOf(this.size) + 1, sizes.length);
      for (const size of newSizes) {
        if (this.col.sizes[size] !== prevNbCol) break;
        this.col.sizes[size] = nbCol;
      }
      this.col.sizes[this.size] = nbCol;
      this.col.sizeClasses = this.computeSizeClasses();
    },
    setOffsets(nbCol) {
      const prevNbCol = this.col.offsets[this.size];
      const newSizes = offsets.slice(
        offsets.indexOf(this.size) + 1,
        offsets.length
      );
      for (const size of newSizes) {
        if (this.col.offsets[size] !== prevNbCol) break;
        this.col.offsets[size] = nbCol;
      }
      this.col.offsets[this.size] = nbCol;
      this.col.offsetClasses = this.computeOffsetClasses();
    },
    computeSizeClasses() {
      const sizeClasses = [];
      const xs = this.col.sizes["xs"];
      const sm = this.col.sizes["sm"];
      const md = this.col.sizes["md"];
      const lg = this.col.sizes["lg"];
      const xl = this.col.sizes["xl"];
      if (xs !== 12) sizeClasses.push("col-" + xs);
      if (sm !== xs) sizeClasses.push("col-sm-" + sm);
      if (md !== sm) sizeClasses.push("col-md-" + md);
      if (lg !== md) sizeClasses.push("col-lg-" + lg);
      if (xl !== lg) sizeClasses.push("col-xl-" + xl);
      return sizeClasses;
    },
    computeOffsetClasses() {
      const offsetClasses = [];
      const xs = this.col.offsets["xs"];
      const sm = this.col.offsets["sm"];
      const md = this.col.offsets["md"];
      const lg = this.col.offsets["lg"];
      const xl = this.col.offsets["xl"];
      if (sm !== xs && sm !== 0) offsetClasses.push("offset-sm-" + sm);
      if (md !== sm && md !== 0) offsetClasses.push("offset-md-" + md);
      if (lg !== md && lg !== 0) offsetClasses.push("offset-lg-" + lg);
      if (xl !== lg && xl !== 0) offsetClasses.push("offset-xl-" + xl);
      return offsetClasses;
    }
  }
};
</script>

<style>
.lm-col {
  display: inline-block;
  position: relative;

  height: 150px;
  min-width: 65px;
  margin-bottom: 15px;

  background-color: blueviolet;

  cursor: col-resize;
}

.lm-remove-col {
  position: absolute;
  top: 0;
  right: 0;

  width: 25px;
  height: 25px;

  text-align: center;

  cursor: pointer;
}

.lm-col-header {
  position: absolute;

  top: 0;
  right: 25px;
  left: 10px;

  padding: 0 10px;
}

.lm-col-header input,
input::placeholder {
  width: 100%;

  background: none;
  border: none;

  color: #fff;
  opacity: 0.5;
}

.lm-col-header input:focus {
  outline: none;

  opacity: inherit;
}

.lm-col.easing {
  transition: width 500ms ease;
}

.lm-col-offset.easing {
  transition: width 500ms ease;
}

.lm-offset {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10px;

  cursor: -webkit-grab;

  background-color: black;
}

.lm-col-offset {
  display: inline-block;
  position: relative;

  height: 150px;
  margin-left: 10px;
  margin-bottom: 15px;

  cursor: -webkit-grab;

  background-color: rgba(137, 43, 226, 0.329);
}
</style>
