import './media-gallery.scss'
import Component from 'vue-class-component';
import Vue from 'vue';
import { Thumbnail } from '../thumbnail';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
    components:{
        vThumbnail : Thumbnail
    },
    props:['srcs'],
    template : require('./media-gallery.html')
})
export class MediaGallery extends Vue{
    private srcs: string[];
    private plusIcon = faPlusCircle;

    public $refs : {
        inputFile: HTMLInputElement
    }

    private uploadFile() {
        const files = this.$refs.inputFile.files
        if (files && files.length > 0) {
            this.$emit('file-added',{file : files[0]})
        }
    }



}