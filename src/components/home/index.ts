import Component from "vue-class-component";
import Vue from "vue";
import './home.scss'
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
    template: require('./home.html')
})
export class Home extends Vue{

    private menuIcon = faBars;

}