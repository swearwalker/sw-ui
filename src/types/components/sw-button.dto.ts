import { ColorsEnums, SizesEnums, SwButtonTagsEnums } from "@/enums";

export interface SwButtonDto {
    to?: string
    color: ColorsEnums
    flat: boolean
    border: boolean
    relief: boolean
    square: boolean
    gradient: boolean
    disabled: boolean
    circle: boolean
    transparent: boolean
    size: SizesEnums
    click(event: { target: EventTarget }): EventTarget
    tag: SwButtonTagsEnums
    classList: Array<any>
    sizeClass: string
}