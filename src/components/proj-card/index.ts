import { downloadMedia, Proj } from "@/store/proj-data-store";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Thumbnail } from "../thumbnail";
import './proj-card.scss'

@Component({
    components:{
        vThumbnail: Thumbnail
    },
    props:['proj'],
    template: require('./proj-card.html')
})
export class ProjCard extends Vue{

    private proj: Proj;
    private mainMediaSrc = "/img/default-img.png"

    private async setMainMediaSrc() {
        const medias = this.proj?.medias;
        if (medias && medias[0] && this.proj?._id) {
            const blob = await downloadMedia(this.proj?.medias[0]._id)

            const reader = new FileReader()
            reader.addEventListener("load", () => {
                this.mainMediaSrc = reader.result as string;
            }, false);
            reader.readAsDataURL(blob)
        }
    }

    @Watch('proj',{immediate: true})
    private onProjChange(){
        this.setMainMediaSrc()
    }
}