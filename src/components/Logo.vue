<template>
  <g-link class="logo" to="/">
    <span>💪&nbsp;</span><span><strong>ManPowered</strong></span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 1.3em;
  display: flex;
  flex-direction: row;
  align-content: center;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 25px;
    width: 25px;
    margin-right: 0.5em;
  }
}
</style>
