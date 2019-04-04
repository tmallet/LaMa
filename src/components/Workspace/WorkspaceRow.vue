<template>
  <div class="lm-row row">
    <WorkspaceCol v-for="col in cols" :key="col.id" :col="col" @removed="removeCol"/>
    <WorkspaceNewCol @click.native="addCol"/>
  </div>
</template>

<script>
import WorkspaceNewCol from "./WorkspaceNewCol";
import WorkspaceCol from "./WorkspaceCol";

export default {
  name: "WorkspaceRow",
  props: ["cols"],
  components: { WorkspaceNewCol, WorkspaceCol },
  data() {
    return {
      lastIndex: 0
    };
  },
  methods: {
    addCol() {
      this.cols.push({ id: this.lastIndex });
      this.lastIndex++;
    },
    removeCol(index) {
      this.$emit("update:cols", [...this.cols.filter(col => col.id !== index)]);
    }
  }
};
</script>

<style>
.lm-workspace .lm-layout .lm-row {
  width: 910px;
  margin: 0;
  margin-bottom: 10px;
  padding-top: 35px;

  background-color: rgba(241, 15, 211, 0.4);
  border-radius: 5px;
}
</style>
