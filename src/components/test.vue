<template>
  <div>yay</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TestDto } from "@/types/components";

@Component
export default class TestComponent extends Vue implements TestDto {}
</script>

<style scoped lang="scss"></style>
