<template>
    <div>
        <div class="h-50">
            <img alt="Rohan" src="../../assets/kishiberohan.png" height="300px">
        </div>
        <div class="h-50">
            Todo:画像出す
            {{ imgDataString }}
            <div v-if="imgJudgment(imgDataString)">
                <img alt="Rohan" src="../../assets/takoyaki.jpeg" height="300px">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    components: {

    },
})
export default class SotahTopicArea extends Vue{
    @Prop()
    public imgDataString?:string;

    imgJudgment(payload:string){
        return payload === "Takoyaki"? true: false;
        console.log("d");
    }
}

</script>