<template>
    <div>
        <div class="h-50">
            <img alt="Rohan" src="../../assets/kishiberohan.png" height="300px">
        </div>
        <div class="h-50">
            Todo:画像出す
            {{ comment }}
            <div v-if="TakoyakiJudgment(imgDataString)">
                <img alt="Takoyaki" src="../../assets/takoyaki.jpeg" height="300px"  width="400px">
            </div>
            <div v-if="ElectricWorkJudgment(imgDataString)">
                <img alt="ElectricWork"  src="../../assets/electricWork.jpg" height="300px"  width="400px">
            </div>
            <div v-if="FreestylefootballJudgment(imgDataString)">
                <video alt="freestyle" loop autoplay muted src="../../assets/freestylefootball.mp4" height="300px"  width="400px" />
            </div>
            <div v-if="BilliardsJudgment(imgDataString)">
                <img alt="Billiards"  src="../../assets/Billiards.jpeg" height="300px" width="400px">
            </div>
            <div v-if="ArduinoJudgment(imgDataString)">
                <video alt="Arduino"  autoplay muted src="../../assets/Arduino.mp4" height="300px" width="400px" />
            </div>
            <div v-if="ProgrammingJudgment(imgDataString)">
                <img alt="Programming"  src="../../assets/programming.png" height="300px"  width="400px">
            </div>
            <div v-if="SkateboardJudgment(imgDataString)">
                <video alt="Skateboard"  autoplay muted src="../../assets/skateboard.mp4" height="300px" width="400px" />
            </div>
            <div v-if="BowlingJudgment(imgDataString)">
                <img alt="Bowling" src="../../assets/Bowling.png" height="300px"  width="400px">
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
    public comment?:string;

    TakoyakiJudgment(payload:string){
        return payload === "Takoyaki"? true: false;
    }
    ElectricWorkJudgment(payload:string){
        return payload === "Electric Work"? true: false;
        console.log("d");
    }
    ArduinoJudgment(payload:string){
        return payload === "Arduino"? true: false;
        console.log("d");
    }
    ProgrammingJudgment(payload:string){
        return payload === "Programming"? true: false;
        console.log("d");
    }
    FreestylefootballJudgment(payload:string){
        return payload === "Freestyle football"? true: false;
        console.log("d");
    }
    BilliardsJudgment(payload:string){
        return payload === "Billiards"? true: false;
        console.log("d");
    }
    SkateboardJudgment(payload:string){
        return payload === "Skateboard"? true: false;
        console.log("d");
    }
    BowlingJudgment(payload:string){
        return payload === "Bowling"? true: false;
        console.log("d");
    }
}

</script>