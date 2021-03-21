import './media-gallery.scss'
import Component from 'vue-class-component';
import Vue from 'vue';
@Component({
    props:['srcs'],
    template : require('./media-gallery.html')
})
export class MediaGallery extends Vue{
    private srcs: string[];
}