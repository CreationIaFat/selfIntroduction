<template>
    <button @click="onClick">sotahButton</button>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from "vue-property-decorator";

    @Component
    export default class SotahButton extends Vue {
        @Prop()
        public great?: string;

        public onClick(){
            alert(this.great);
            this.click();
        }

        @Emit()
            public click(){
            }
    }
</script>

<style lang="scss">
.pearent {
    height:100%;
}
.topicArea {
    background-color: aqua;
}
.explainArea {
    background-color:blanchedalmond;
}
.footerArea {
    background-color: rgb(8, 8, 8);
    color: chartreuse;
}
</style>