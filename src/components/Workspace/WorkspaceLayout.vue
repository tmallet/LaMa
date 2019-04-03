<template>
  <div class="lm-layout">
    <WorkspaceRow v-for="(row, index) in rows" :key="index" v-bind:cols="row.cols"/>
    <WorkspaceNewRow @click.native="addRow"/>
  </div>
</template>

<script>
import WorkspaceNewRow from "./WorkspaceNewRow";
import WorkspaceRow from "./WorkspaceRow";

export default {
  name: "WorkspaceLayout",
  components: { WorkspaceNewRow, WorkspaceRow },
  data() {
    return {
      rows: []
    };
  },
  methods: {
    addRow() {
      this.rows.push({
        cols: []
      });
    }
  }
};
</script>

<style>
.lm-workspace .lm-layout {
  position: absolute;
  top: 10px;
  left: 0;
  min-width: 910px;
}
</style>
