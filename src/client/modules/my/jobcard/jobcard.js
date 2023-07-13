import LightningElementWIthBootstrap from '../../lib/lightningElementWithBootstrap.js';
import {api} from 'lwc'
import {dateFormatter} from '../../utils/utils'
export default class Jobcard extends LightningElementWIthBootstrap {
    @api job ={}

    get formatedDate(){
        return dateFormatter(this.job.created_at)
    }
    viewDetailHandler(){
        this.dispatchEvent(new CustomEvent('selected',{detail:this.job}))

    }

    
}
