<template>
    <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class SotahResetButton extends Vue{
    @Prop()
    public initiaValue!: string;
    
    @Prop()
    public  value!: string;

    @Emit()
    public input(value: string) {
    }

    public onClick(){
        this.input(this.initiaValue);
    }
}
</script>