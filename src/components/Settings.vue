<template>
  <div class="lm-settings">
    <pre v-highlightjs="generatedCode"><code class="html"></code></pre>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ["rows"],
  data() {
    return {
      generatedCode: ""
    };
  },
  watch: {
    rows: {
      deep: true,
      handler: function() {
        let generatedCode = "";
        for (const row of this.rows) {
          generatedCode += `<div class="row">\n`;
          for (const col of row.cols) {
            console.log(col);
            generatedCode += `  <div class="${col.sizeClasses.join(
              " "
            )} ${col.offsetClasses.join(" ")}"></div>\n`;
          }
          generatedCode += `</div>\n`;
        }
        this.generatedCode = generatedCode;
      }
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

  background-color: blue;
}
</style>
