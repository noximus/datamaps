d3.touches=function(e,t){return arguments.length<2&&(t=d3_eventSource().touches),t?d3_array(t).map(function(t){var n=d3_mousePoint(e,t);return n.identifier=t.identifier,n}):[]}