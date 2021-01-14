import Vue from "vue";
import './playground.scss'

import Component from "vue-class-component";
import { faBars } from "@fortawesome/free-solid-svg-icons";


@Component({
    template: require('./playground.html')
})
export class Playground extends Vue{

    private menuIcon = faBars;

}