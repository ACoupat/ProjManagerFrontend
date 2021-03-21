import './edit-proj.scss'

import Component from "vue-class-component";
import Vue from "vue";
import { Watch } from 'vue-property-decorator';
import { createMedia, downloadMedia, fetchProj, Proj, updateProj } from '@/store/proj-data-store';
import { faArrowLeft, faPenAlt, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SwitchableField } from '../fields/switchable-field';
import { Thumbnail } from '../thumbnail';

@Component({
    components: {
        vSwitchableField: SwitchableField,
        vThumbnail: Thumbnail
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

    private uploadFile() {
        const files = this.$refs.inputFile.files
        if (files && files.length > 0 && this.proj?._id) {
            createMedia(files[0], files[0].name, this.proj._id).then(
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
                this.setMainMediaSrc()
            }
        )
    }

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

    @Watch('id', { immediate: true })
    private getProj() {
        this.fetchProj()
    }
}