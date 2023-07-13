import LightningElementWIthBootstrap from '../../lib/lightningElementWithBootstrap';
import {api} from 'lwc'

export default class Navbar extends LightningElementWIthBootstrap {

    @api showBtn = false;

    goBack(){
        this.dispatchEvent(new CustomEvent('back'))
    }
    
}
