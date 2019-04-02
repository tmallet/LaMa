<template>
  <div class="lm-size-navigator">
    <div class="lm-size">
      <div class="lm-size-header">
        Téléphone
        <span class="lg-size-icon">
          <font-awesome-icon icon="mobile-alt"/>
        </span>
      </div>
    </div>
    <div class="lm-size">
      <div class="lm-size-header">
        Tablette
        <span class="lg-size-icon">
          <font-awesome-icon icon="tablet-alt"/>
        </span>
      </div>
    </div>
    <div class="lm-size">
      <div class="lm-size-header">
        Petit écran
        <span class="lg-size-icon">
          <font-awesome-icon icon="laptop"/>
        </span>
      </div>
    </div>
    <div class="lm-size">
      <div class="lm-size-header">
        Grand écran
        <span class="lg-size-icon">
          <font-awesome-icon icon="desktop"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizeNavigator"
};
</script>

<style>
.lm-size-navigator {
  position: absolute;
  height: 100%;
  left: 0;
  width: 176px;

  background-color: green;
}

.lm-size-navigator .lm-size {
  height: 25%;
  width: 100%;
}

.lm-size-navigator .lm-size-header {
  padding: 0 15px;
}

.lm-size-navigator .lg-size-icon {
  float: right;
}
</style>
