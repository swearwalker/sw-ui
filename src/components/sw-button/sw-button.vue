<template>
  <component
    :is="tag"
    :class="classList"
    :disabled="disabled"
    :to="to"
    @click="click"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { SwButtonDto } from "@/types";
import { ColorsEnums, SizesEnums, SwButtonTagsEnums } from "@/enums";

@Component
export default class SwButton extends Vue implements SwButtonDto {
  @Prop()
  public to?: string;

  @Prop({ default: ColorsEnums.DEFAULT })
  public color!: ColorsEnums;

  @Prop({ type: Boolean, default: false })
  public flat!: boolean;

  @Prop({ type: Boolean, default: false })
  public border!: boolean;

  @Prop({ type: Boolean, default: false })
  public relief!: boolean;

  @Prop({ type: Boolean, default: false })
  public gradient!: boolean;

  @Prop({ type: Boolean, default: false })
  public disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public circle!: boolean;

  @Prop({ type: Boolean, default: false })
  public transparent!: boolean;

  @Prop({ type: Boolean, default: false })
  public square!: boolean;

  @Prop({ default: SizesEnums.MD })
  public size!: SizesEnums;

  @Emit("click")
  click(event: { target: EventTarget }) {
    return event.target;
  }

  get classList(): Array<any> {
    return [
      this.gradient
        ? `sw-button__${this.color}-gradient`
        : `sw-button__${this.color}`,
      { [`sw-button__flat`]: this.flat },
      { [`sw-button__border`]: this.border },
      { [`sw-button__relief`]: this.relief },
      { [`sw-button__square`]: this.square },
      { [`sw-button__circle`]: this.circle },
      { [`sw-button__transparent`]: this.transparent },
    ];
  }

  get tag(): SwButtonTagsEnums {
    return this.to ? SwButtonTagsEnums.LINK : SwButtonTagsEnums.BUTTON;
  }

  get sizeClass(): string {
    return `sw-button__size-${this.size}`;
  }
}
</script>

<style scoped lang="scss"></style>
