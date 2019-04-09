<template>
  <div class="lm-size-preview-row">
    <SizeColPreview v-for="col in cols" :key="col.id" :col="col" :size="size" :rowWidth="rowWidth"/>
  </div>
</template>

<script>
import SizeColPreview from "./SizeColPreview";

export default {
  name: "SizeRowPreview",
  props: ["cols", "size", "rowWidth"],
  components: { SizeColPreview }
};
</script>

<style>
.lm-size-preview-row {
  overflow: hidden;
  clear: both;
}
</style>
