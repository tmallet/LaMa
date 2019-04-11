<template>
  <div class="lm-row row">
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
  props: ["cols", "rowId", "size"],
  components: { WorkspaceNewCol, WorkspaceCol },
  data() {
    return {
      lastIndex: -1
    };
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

  background-color: rgba(241, 15, 211, 0.4);
  border-radius: 5px;
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
