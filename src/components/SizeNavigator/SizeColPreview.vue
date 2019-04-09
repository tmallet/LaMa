<template>
  <div class="lm-size-col-preview">
    <div class="lm-size-col-preview-offset"></div>
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
    }
  }
};
</script>

<style>
.lm-size-navigator .lm-size .lm-size-container .lm-size-col-preview {
  background-color: red;

  float: left;
  height: 20px;
  display: inline-block;
  margin-right: 3px;
  margin-bottom: 3px;
}

.lm-size-navigator .lm-size .lm-size-container .lm-size-col-preview:last-child {
  margin-right: 0;
}

.lm-size-navigator
  .lm-size
  .lm-size-container
  .lm-size-col-preview
  .lm-size-col-preview-width {
  display: inline-block;
  height: 20px;
}
</style>
