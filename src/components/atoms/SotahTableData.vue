<template>
    <td>
        <button @click="hobbyClicked" type="button" class="btn btn-outline-danger">{{ dataName }}</button>
    </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SotahTableData extends Vue {
    @Prop()
    public dataName?:string;

    hobbyClicked() {
        this.$emit('clickedItm1', this.dataName);
    }
}
</script>

<style lang="scss">
</style>