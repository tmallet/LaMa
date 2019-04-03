<template>
  <div class="lm-row row">
    <WorkspaceCol v-for="(col, index) in cols" :key="index"/>
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
  methods: {
    addCol() {
      this.cols.push({});
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
