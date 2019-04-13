<template>
  <div :class="'lm-settings lm-settings-' + size">
    <div class="lm-settings-header">
      <div class="lm-settings-header-tab active">HTML</div>
    </div>
    <pre v-highlightjs="generatedCode"><code class="html"></code></pre>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ["size", "rows"],
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
  width: 400px;
  right: 0;
}

.lm-settings .hljs {
  height: 400px;

  background-color: #fff;
  border-radius: 0 0 15px 15px;
}

.lm-settings .hljs .hljs-name {
  color: rgb(149, 65, 42);
}

.lm-settings .hljs .hljs-attr {
  color: rgb(217, 105, 25);
}

.lm-settings .hljs .hljs-string {
  color: rgb(42, 149, 134);
}

.lm-settings pre {
  margin: 0;
}

.lm-settings-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 32px;
}

.lm-settings-header-tab {
  flex-grow: 1;
  text-align: center;
  margin-right: 1px;

  line-height: 32px;

  border-radius: 15px 15px 0 0;

  transition: border-color, background-color 500ms ease;
}

.lm-settings-header-tab:last-child {
  margin-right: 0;
}

.lm-settings-xs .lm-settings-header-tab {
  border: 1px solid rgb(149, 65, 42);
  border-bottom: none;
}

.lm-settings-sm .lm-settings-header-tab {
  border: 1px solid rgb(55, 93, 157);
  border-bottom: none;
}

.lm-settings-md .lm-settings-header-tab {
  border: 1px solid rgb(42, 149, 134);
  border-bottom: none;
}

.lm-settings-lg .lm-settings-header-tab {
  border: 1px solid rgb(217, 105, 25);
  border-bottom: none;
}

.lm-settings-xl .lm-settings-header-tab {
  border: 1px solid rgb(237, 177, 67);
  border-bottom: none;
}

.lm-settings-header-tab.active,
.lm-settings-header-tab:hover {
  color: #fff;
}

.lm-settings-xs .lm-settings-header-tab.active,
.lm-settings-xs .lm-settings-header-tab:hover {
  background-color: rgb(149, 65, 42);
}

.lm-settings-sm .lm-settings-header-tab.active,
.lm-settings-sm .lm-settings-header-tab:hover {
  background-color: rgb(55, 93, 157);
}

.lm-settings-md .lm-settings-header-tab.active,
.lm-settings-md .lm-settings-header-tab:hover {
  background-color: rgb(42, 149, 134);
}

.lm-settings-lg .lm-settings-header-tab.active,
.lm-settings-lg .lm-settings-header-tab:hover {
  background-color: rgb(217, 105, 25);
}

.lm-settings-xl .lm-settings-header-tab.active,
.lm-settings-xl .lm-settings-header-tab:hover {
  background-color: rgb(237, 177, 67);
}
</style>
