
import Component from "vue-class-component";
import Vue from "vue";
import './home.scss'
import { ProjCard } from "../proj-card";
import { createProj, fetchAllProjs } from "@/store/proj-data-store";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
    components:{
        vProjCard: ProjCard
    },
    template: require('./home.html')
})
export class Home extends Vue {

    private projs: any = []

    private plusIcon = faPlus;

    public mounted() {
        this.fetchAllProjs()
    }

    private fetchAllProjs(){
        fetchAllProjs()
            .then(async response => {
                const res = await response.json();
                this.projs =  [];
                this.projs =  res.content;
            })
    }

    private onPlusClick(){
        createProj().then(fetchAllProjs)
    }

}