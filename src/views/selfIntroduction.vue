<template>
    <div class="row pearent">
        <div class="col-4 h-75 topicArea">
            <img alt="Rohan" src="../assets/kishiberohan.png" height="300px">
        </div>
        <div class="col-8 h-75 explainArea">
            <SotahExplainArea @clickedItm3="hobbyClickedPass3Last" class="h-100"/>
        </div>
        <div class="col footerArea h-25">
            footerArea
        </div>
    </div>
</template>

<script lang=ts>
import { Component, Vue } from "vue-property-decorator";
import { component } from 'vue/types/umd';
import SotahExplainArea from "@/components/organisms/SotahExplainArea.vue";
import { mapGetters } from 'vuex';
import * as constans from "@/constants/selfIntroduction";

@Component({
    components: {
        SotahExplainArea,
    },
    computed: {
        ...mapGetters({ model: constans.GET_VIEW_MODEL_PATH})
    },
})
export default class selfIntroduction extends Vue {
    public greatText: string = "Hello";

    public onSotahButtonClicked(){
        this.greatText = "こんにちは";
    }

    hobbyClickedPass3Last(payload: string){
        // console.log(payload);
        this.$store.dispatch(constans.COMMIT_CLICKED_HOBBY_BUTTON, payload);
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