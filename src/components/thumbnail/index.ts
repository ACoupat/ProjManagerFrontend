import './thumbnail.scss'
import Component from 'vue-class-component';
import Vue from 'vue';
@Component({
    props:['src'],
    template : require('./thumbnail.html')
})
export class Thumbnail extends Vue{
    private src: string;

    private bigView = false;

    private toggleBigView(){
        this.bigView = !this.bigView;
    }
}