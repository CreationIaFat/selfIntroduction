<template>
    <td>
        <button type="button" class="btn btn-outline-danger">{{ dataName }}</button>
    </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SotahTableData extends Vue {
    @Prop()
    public dataName?:string;
}
</script>

<style lang="scss">
</style>