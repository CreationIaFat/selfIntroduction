<template>
    <div class="row justify-content-center">
        <h3 class="positionH w-100">Hobby：</h3>
        <table class="col-10 table table-sm">
            <tbody>
                <tr>
                    <th scope="row">Indoor hobby</th>
                    <SotahTableData :dataName="HobbyIn1" />
                    <SotahTableData :dataName="HobbyIn2" />
                    <SotahTableData :dataName="HobbyIn3" />
                    <SotahTableData :dataName="HobbyIn4" />
                </tr>
                 <tr>
                    <th scope="row">Outdoor hobby</th>
                    <SotahTableData :dataName="HobbyOut1" />
                    <SotahTableData :dataName="HobbyOut2" />
                    <SotahTableData :dataName="HobbyOut3" />
                    <SotahTableData :dataName="HobbyOut4" />
                </tr>
                 <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import SotahTableData from "@/components/atoms/SotahTableData.vue";

@Component({
    components: {
        SotahTableData,
    },
})
export default class SotahHobbyArea extends Vue{
    public HobbyIn1:string = "Takoyaki";
    public HobbyIn2:string = "Electric Work";
    public HobbyIn3:string = "Arduino";
    public HobbyIn4:string = "Programming";
    public HobbyOut1:string = "Freestyle football";
    public HobbyOut2:string = "Billiards";
    public HobbyOut3:string = "Skateboard";
    public HobbyOut4:string = "Bowling";
}
</script>

<style lang="scss">
.positionH {
    text-align: left;
    display: block;
    padding-bottom: 2%;
    padding-left: 10%;
}

</style>