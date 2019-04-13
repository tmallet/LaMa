<template>
  <div :class="'lm-row row lm-row-' + size">
    <div class="lm-row-header">
      <input type="text" v-model="customClassesData" placeholder="Row classes">
    </div>
    <div class="lm-remove-row" @click="removeRow">
      <font-awesome-icon icon="times"/>
    </div>
    <WorkspaceCol v-for="col in cols" :key="col.id" :col="col" @removed="removeCol" :size="size"/>
    <WorkspaceNewCol @click.native="addCol"/>
  </div>
</template>

<script>
import WorkspaceNewCol from "./WorkspaceNewCol";
import WorkspaceCol from "./WorkspaceCol";

export default {
  name: "WorkspaceRow",
  props: ["cols", "rowId", "size", "customClasses"],
  components: { WorkspaceNewCol, WorkspaceCol },
  data() {
    return {
      lastIndex: -1,
      customClassesData: ""
    };
  },
  watch: {
    customClassesData() {
      const customClasses =
        this.customClassesData === ""
          ? []
          : [...this.customClassesData.trim().split(" ")];
      this.$emit("update:customClasses", customClasses);
    }
  },
  methods: {
    addCol() {
      this.cols.push({
        id: this.lastIndex + 1,
        sizeClasses: [],
        offsetClasses: [],
        customClasses: [],
        sizes: {
          xs: null,
          sm: null,
          md: null,
          lg: null,
          xl: null
        },
        offsets: {
          sm: null,
          md: null,
          lg: null,
          xl: null
        }
      });
      this.lastIndex++;
    },
    removeCol(index) {
      this.$emit("update:cols", [...this.cols.filter(col => col.id !== index)]);
    },
    removeRow() {
      this.$emit("removed", this.rowId);
    }
  }
};
</script>

<style>
.lm-row {
  position: relative;

  width: 910px;
  margin: 0;
  margin-bottom: 10px;
  padding-top: 35px;

  border-radius: 5px;
  border: 2px solid;

  transition: border-color 500ms ease;
}

.lm-row-xs {
  border-color: rgb(149, 65, 42);
}

.lm-row-sm {
  border-color: rgb(55, 93, 157);
}

.lm-row-md {
  border-color: rgb(42, 149, 134);
}

.lm-row-lg {
  border-color: rgb(217, 105, 25);
}

.lm-row-xl {
  border-color: rgb(237, 177, 67);
}

.lm-row-header {
  position: absolute;

  top: 0;
  right: 25px;
  left: 10px;

  padding: 0 10px;
}

.lm-row-header input,
.lm-row-header input::placeholder {
  width: 100%;

  background: none;
  border: none;

  opacity: 0.8;

  transition: color 500ms ease;
}

.lm-row-xs .lm-row-header input,
.lm-row-xs .lm-row-header input::placeholder {
  color: rgb(149, 65, 42);
}

.lm-row-sm .lm-row-header input,
.lm-row-sm .lm-row-header input::placeholder {
  color: rgb(55, 93, 157);
}

.lm-row-md .lm-row-header input,
.lm-row-md .lm-row-header input::placeholder {
  color: rgb(42, 149, 134);
}

.lm-row-lg .lm-row-header input,
.lm-row-lg .lm-row-header input::placeholder {
  color: rgb(217, 105, 25);
}

.lm-row-xl .lm-row-header input,
.lm-row-xl .lm-row-header input::placeholder {
  color: rgb(237, 177, 67);
}

.lm-row-header input:focus {
  outline: none;

  opacity: inherit;
}

.lm-remove-row {
  position: absolute;
  top: 0;
  right: 10px;

  width: 25px;
  height: 25px;

  text-align: center;

  cursor: pointer;

  transition: color 500ms ease;
}

.lm-row-xs .lm-remove-row {
  color: rgb(149, 65, 42);
}

.lm-row-sm .lm-remove-row {
  color: rgb(55, 93, 157);
}

.lm-row-md .lm-remove-row {
  color: rgb(42, 149, 134);
}

.lm-row-lg .lm-remove-row {
  color: rgb(217, 105, 25);
}

.lm-row-xl .lm-remove-row {
  color: rgb(237, 177, 67);
}
</style>
