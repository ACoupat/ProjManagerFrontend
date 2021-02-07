import './edit-proj.scss'

import Component from "vue-class-component";
import Vue from "vue";
import { Watch } from 'vue-property-decorator';
import { fetchProj, Proj } from '@/store/proj-data-store';

@Component({
    props : ['id'],
    template : require('./edit-proj.html')
})
export class EditProj extends Vue{
    public id : string;

    private proj : Proj | null = null;

    @Watch('id',{immediate: true})
    private getProj(){
        this.proj = null;
        fetchProj(this.id).then(
            (proj: Proj) => {
                console.log(proj)
                this.proj = proj
            }
        )
    }
}