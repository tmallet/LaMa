<template>
  <div :class="'lm-settings lm-settings-' + size">
    <div class="lm-settings-header">
      <div class="lm-settings-header-tab active">HTML</div>
    </div>
    <VuePerfectScrollbar class="lm-settings-container">
      <pre v-highlightjs="generatedCode" @click="selectCode"><code class="html"></code></pre>
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "Settings",
  components: { VuePerfectScrollbar },
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
    },
    selectCode(event) {
      const element = event.target;
      let range;
      if (window.getSelection && document.createRange) {
        const sel = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      }
    }
  }
};
</script>

<style lang="scss">
.lm-settings {
  position: absolute;
  width: 400px;
  right: 0;
  height: 400px;

  pre {
    overflow: initial;
    margin: 0;
  }

  .hljs {
    background-color: #fff;
    overflow: initial;

    .hljs-name {
      color: rgb(149, 65, 42);
    }

    .hljs-attr {
      color: rgb(217, 105, 25);
    }

    .hljs-string {
      color: rgb(42, 149, 134);
    }
  }

  .lm-settings-container {
    height: 100%;
    background-color: #fff;
    border-radius: 0 0 15px 15px;
  }

  .lm-settings-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 32px;

    .lm-settings-header-tab {
      flex-grow: 1;
      text-align: center;
      margin-right: 1px;

      line-height: 32px;

      border-radius: 15px 15px 0 0;

      transition: border-color, background-color 500ms ease;

      &:last-child {
        margin-right: 0;
      }

      &.active,
      &:hover {
        color: #fff;
      }
    }
  }
}

.lm-settings-xs {
  .lm-settings-header-tab {
    border: 1px solid rgb(149, 65, 42);
    border-bottom: none;

    &.active,
    &:hover {
      background-color: rgb(149, 65, 42);
    }
  }
}

.lm-settings-sm {
  .lm-settings-header-tab {
    border: 1px solid rgb(55, 93, 157);
    border-bottom: none;

    &.active,
    &:hover {
      background-color: rgb(55, 93, 157);
    }
  }
}

.lm-settings-md {
  .lm-settings-header-tab {
    border: 1px solid rgb(42, 149, 134);
    border-bottom: none;

    &.active,
    &:hover {
      background-color: rgb(42, 149, 134);
    }
  }
}

.lm-settings-lg {
  .lm-settings-header-tab {
    border: 1px solid rgb(217, 105, 25);
    border-bottom: none;

    &.active,
    &:hover {
      background-color: rgb(217, 105, 25);
    }
  }
}

.lm-settings-xl {
  .lm-settings-header-tab {
    border: 1px solid rgb(237, 177, 67);
    border-bottom: none;

    &.active,
    &:hover {
      background-color: rgb(237, 177, 67);
    }
  }
}
</style>
