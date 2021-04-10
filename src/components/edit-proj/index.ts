import './edit-proj.scss'

import Component from "vue-class-component";
import Vue from "vue";
import { Watch } from 'vue-property-decorator';
import { createMedia, downloadMedia, fetchProj, Proj, updateProj } from '@/store/proj-data-store';
import { faArrowLeft, faPenAlt, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SwitchableField } from '../fields/switchable-field';
import { Thumbnail } from '../thumbnail';
import { MediaGallery } from '../media-gallery';

@Component({
    components: {
        vSwitchableField: SwitchableField,
        vThumbnail: Thumbnail,
        vMediaGallery: MediaGallery
    },
    props: ['id'],
    template: require('./edit-proj.html')
})
export class EditProj extends Vue {
    public id: string;
    public $refs: {
        inputFile: HTMLInputElement
    }

    private proj: Proj | null = null;
    private mainMediaSrc = "/img/default-img.png";
    private mediasSrc: string[] = [];
    private editMode = false;

    // Icons
    private backIcon = faArrowLeft;
    private saveIcon = faSave;
    private deleteIcon = faTrash;
    private editIcon = faPenAlt;

    private goToHome() {
        this.$router.push({ name: 'home' })
    }

    private deleteProj() {
        console.log("delete")
    }

    private saveProj() {
        this.editMode = false;
        if (this.proj) {
            updateProj(this.proj._id, this.proj)
            console.log("save")
        }
    }

    private editProj() {
        this.editMode = true;
    }

    private uploadMedia(file: any) {
        if(file.file && this.proj){
            createMedia(file.file, file.file.name, this.proj._id).then(
                data => {
                    console.log(data)
                    this.fetchProj()
                }
            );
        }
    }

    private fetchProj() {
        this.proj = null;
        fetchProj(this.id).then(
            (proj: Proj) => {
                console.log(proj)
                this.proj = proj
                this.setMediasSrc()
            }
        )
    }

    private async setMediasSrc() {
        const medias = this.proj?.medias;
        if (medias && medias[0] && this.proj?._id) {
            this.mediasSrc = []
            medias.map(
                async media => {
                    const blob = await downloadMedia(media._id)
                    const reader = new FileReader()
                    reader.addEventListener("load", () => {
                        this.mediasSrc.push(reader.result as string);
                    }, false);
                    reader.readAsDataURL(blob)
                }
            )
        }
    }

    @Watch('id', { immediate: true })
    private getProj() {
        this.fetchProj()
    }
}