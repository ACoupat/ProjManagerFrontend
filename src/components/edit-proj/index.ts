import './edit-proj.scss'

import Component from "vue-class-component";
import Vue from "vue";
import { Watch } from 'vue-property-decorator';
import { fetchProj, Proj, updateProj } from '@/store/proj-data-store';
import { faArrowLeft, faPenAlt, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SwitchableField } from '../fields/switchable-field';

@Component({
    components:{
        vSwitchableField: SwitchableField
    },
    props : ['id'],
    template : require('./edit-proj.html')
})
export class EditProj extends Vue{
    public id : string;

    private proj : Proj | null = null;
    private editMode = false;

    // Icons
    private backIcon = faArrowLeft;
    private saveIcon = faSave;
    private deleteIcon = faTrash;
    private editIcon = faPenAlt;

    private goToHome(){
        this.$router.push({name:'home'})
    }

    private deleteProj(){
        console.log("delete")
    }

    private saveProj(){
        this.editMode = false;
        if(this.proj){
            updateProj(this.proj._id,  this.proj)
            console.log("save")
        }
    }

    private editProj(){
        this.editMode = true;
    }

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