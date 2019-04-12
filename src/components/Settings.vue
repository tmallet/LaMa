<template>
  <div class="lm-settings">
    <pre v-highlightjs="generatedCode"><code class="html"></code></pre>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ["rows"],
  computed: {
    generatedCode() {
      let generatedCode = "";
      for (const row of this.rows) {
        generatedCode += `<div class="${this.computeRowClasses(row)}">`;
        if (row.cols.length !== 0) generatedCode += "\n";
        for (const col of row.cols) {
          generatedCode += `  <div class="${this.computeColClasses(
            col
          )}"></div>\n`;
        }
        generatedCode += `</div>\n`;
      }
      return generatedCode;
    }
  },
  methods: {
    computeRowClasses(row) {
      return ["row", ...row.customClasses].join(" ");
    },
    computeColClasses(col) {
      return [
        ...col.sizeClasses,
        ...col.offsetClasses,
        ...col.customClasses
      ].join(" ");
    }
  }
};
</script>

<style>
.lm-settings {
  position: absolute;
  height: 100%;
  width: 400px;
  right: 0;

  background-color: #333;
}
</style>
