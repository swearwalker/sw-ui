<template>
  <button>{{ title }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SwButtonDto } from "@/types";

@Component
export default class SwButton extends Vue implements SwButtonDto {
  @Prop({ default: "Title button" })
  readonly title?: string;
}
</script>

<style scoped lang="scss"></style>
