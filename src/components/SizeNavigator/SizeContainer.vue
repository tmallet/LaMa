<template>
  <div class="lm-size-container">
    <div class="lm-size-preview-rows" :style="{width: rowWidth + 'px'}">
      <SizeRowPreview
        v-for="row in rows"
        :key="row.id"
        :cols="row.cols"
        :size="size"
        :rowWidth="rowWidth"
      />
    </div>
  </div>
</template>

<script>
import SizeRowPreview from "./SizeRowPreview";

export default {
  name: "SizeContainer",
  props: ["rows", "size"],
  components: { SizeRowPreview },
  computed: {
    rowWidth() {
      if (this.size === "xs") return 50.4;
      if (this.size === "sm") return 79.2;
      if (this.size === "md") return 115.2;
      if (this.size === "lg") return 144;
      if (this.size === "xl") return 144;
      return 0;
    }
  }
};
</script>

<style>
.lm-size-container {
  position: absolute;
  top: 32px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 15px;
  overflow-y: auto;

  background-color: #fff;
  border-radius: 15px;

  transition: border-radius 500ms ease;
}

.lm-size.active .lm-size-container,
.lm-size:hover .lm-size-container {
  border-radius: 0 0 15px 15px;
}

.lm-size-preview-rows {
  padding-top: 8px;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
}
</style>
