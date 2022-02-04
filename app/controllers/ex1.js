import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
    @tracked content = "Entrez votre texte"; 
    @tracked info = "";
    @tracked savetext = " Note modifiée";
    max = 100;

        if(this.size< 50 && this.size >=20){
            return 'alert-warning';
        }
        if(this.size< 20){
            return 'alert-danger';
        }
        return 'alert-info';

    };
    get size(){
        return this.max - this.content.length;
    };

    @action
    clear(){
        if(this.size > 0){
            this.content = "";
        }
    }

    @action
    save(content){
        let model = this.modelFor(this.routeName);
        set (model, 'items', this.content.split('\n'));
        this.transitionTo('ex1.suite');
    }

    @action
    update(){

    }


}
