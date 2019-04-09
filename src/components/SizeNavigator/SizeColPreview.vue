<template>
  <div class="lm-size-col-preview">
    <div class="lm-size-col-preview-offset" :style="{width: offsetWidth}"></div>
    <div class="lm-size-col-preview-width" :style="{width}"></div>
  </div>
</template>

<script>
export default {
  name: "SizeColPreview",
  props: ["col", "size", "rowWidth"],
  computed: {
    width() {
      const nbCols = this.col.sizes[this.size];
      return (this.rowWidth / 12) * nbCols - 3 + "px";
    },
    offsetWidth() {
      const nbCols = this.col.offsets[this.size];
      if (nbCols === 0) return 0;
      return (this.rowWidth / 12) * nbCols + "px";
    }
  }
};
</script>

<style>
.lm-size-col-preview {
  background-color: red;

  float: left;
  height: 20px;
  margin-right: 3px;
  margin-bottom: 3px;
}

.lm-size-col-preview:last-child {
  margin-right: 0;
}

.lm-size-col-preview-width {
  display: inline-block;
  height: 20px;
  transition: width 500ms ease;
}

.lm-size-col-preview-offset {
  display: inline-block;
  height: 20px;
  transition: width 500ms ease;
  background-color: rgba(82, 42, 42, 0.555);
}
</style>
