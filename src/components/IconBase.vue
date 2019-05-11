<template>
  <svg class="icon">
    <title
      :id="iconName"
    >{{ iconName }} icon</title>
    <g>
      <slot />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    iconName: String
  }
}
</script>