d3_transitionPrototype.attr=function(e,t){if(arguments.length<2){for(t in e)this.attrTween(t,d3_tweenByName(e[t],t));return this}return this.attrTween(e,d3_tweenByName(t,e))},d3_transitionPrototype.attrTween=function(e,t){function r(e,r){var i=t.call(this,e,r,this.getAttribute(n));return i===d3_tweenRemove?(this.removeAttribute(n),null):i&&function(e){this.setAttribute(n,i(e))}}function i(e,r){var i=t.call(this,e,r,this.getAttributeNS(n.space,n.local));return i===d3_tweenRemove?(this.removeAttributeNS(n.space,n.local),null):i&&function(e){this.setAttributeNS(n.space,n.local,i(e))}}var n=d3.ns.qualify(e);return this.tween("attr."+e,n.local?i:r)}