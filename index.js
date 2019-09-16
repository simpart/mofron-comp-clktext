/**
 * @file mofron-comp-clktext/index.js
 * @brief click text component for mofron
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');
const Click = require('mofron-event-click');

mf.comp.ClkText = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                object: component option
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('ClkText');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
	    let tgt = new mofron.Dom('div',this);
	    this.adom().addChild(
                new mofron.Dom({
		    style: { "display" : "flex" },
		    tag: 'div', component: this, child: tgt
		})
	    );
	    this.target(tgt);
	    this.event(new Click({ tag: "ClkText" }));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * click callback event
     * 
     * @param (function) click callback function
     * @param (mixed) callback parameter
     * @return (array) [[function,param], ... ]
     * @type parameter
     */
    clickEvent (evt, prm) {
        try {
            return this.event(["Click", "ClkText"]).handler(evt, prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.ClkText;
/* end of file */
