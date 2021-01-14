import Vue from "vue";
import Component from "vue-class-component";
import './proj-card.scss'

@Component({
    props:['proj'],
    template: require('./proj-card.html')
})
export class ProjCard extends Vue{

}