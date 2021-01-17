
import Component from "vue-class-component";
import Vue from "vue";
import './home.scss'
import { ProjCard } from "../proj-card";

@Component({
    components:{
        vProjCard: ProjCard
    },
    template: require('./home.html')
})
export class Home extends Vue {

    private projs: any = []

    public mounted() {
        // fetch('http://localhost:8080/api/proj')
        fetch('http://192.168.1.6:8080/api/proj')
            .then(async response => {
                const res = await response.json();
                this.projs =  res.content;
            })
    }

}