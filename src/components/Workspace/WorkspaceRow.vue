<template>
  <div class="lm-row row">
    <div class="lm-row-header">
      <input type="text" v-model="customClassesData" placeholder="Custom classes">
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
      this.$emit("update:customClasses", [
        ...this.customClassesData.trim().split(" ")
      ]);
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

  border: 2px solid rgb(42, 149, 134);
  border-radius: 5px;

  background-color: rgba(42, 149, 134, 0.7);
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

  color: #fff;
  opacity: 0.8;
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
}
</style>
