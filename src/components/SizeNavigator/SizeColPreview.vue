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
  float: left;
  height: 20px;
  margin-right: 3px;
  margin-bottom: 3px;

  border-radius: 5px;
}

.lm-size-xs .lm-size-col-preview {
  background-color: #95412a;
}

.lm-size-sm .lm-size-col-preview {
  background-color: #375d9d;
}

.lm-size-md .lm-size-col-preview {
  background-color: rgb(42, 149, 134);
}

.lm-size-lg .lm-size-col-preview {
  background-color: #d96919;
}

.lm-size-xl .lm-size-col-preview {
  background-color: #edb143;
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
  background-color: rgba(95, 95, 95, 0.555);
  border-radius: 5px 0 0 5px;
}
</style>
