import './switchable-field.scss'
import Component from 'vue-class-component';
import Vue from 'vue';
@Component({
    props: ['editMode', 'label', 'textarea'],
    template: require('./switchable-field.html')
})
export class SwitchableField extends Vue {

    private value : any = "";
    public editMode: boolean;
    public label: string;
    public textarea : boolean;

    private onInput(event : any){
        this.value = event;
        this.$emit('input',this.value)
    }
}