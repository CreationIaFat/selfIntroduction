<template>
    <div class="row pearent">
        <div class="col-4 h-75 topicArea">
            <img alt="Rohan" src="../assets/kishiberohan.png" height="300px">
        </div>
        <div class="col-8 h-75 explainArea">
            <SotahExplainArea class="h-100"/>
            <div class="d-none">
                ExplainArea
                <p>{{ greatText }}</p>
                <p>
                    <SotahButton :great="greatText" @click="onSotahButtonClicked" />
                </p>
                <p>
                    <SotahResetButton :initialValue="Hello" v-model="greatText" />
                </p>
            </div>
        </div>
        <div class="col footerArea h-25">
            footerArea
        </div>
    </div>
</template>

<script lang=ts>
import { Component, Vue } from "vue-property-decorator";
import SotahButton from "@/components/SotahButton.vue";
import { component } from 'vue/types/umd';
import SotahResetButton from "@/components/SotahResetButton.vue";
import SotahExplainArea from "@/components/organisms/SotahExplainArea.vue";

@Component({
    components: {
        SotahButton,
        SotahResetButton,
        SotahExplainArea,
    },
})
export default class selfIntroduction extends Vue {
    public greatText: string = "Hello";

    public onSotahButtonClicked(){
        this.greatText = "こんにちは";
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