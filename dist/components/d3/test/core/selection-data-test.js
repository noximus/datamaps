require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.data");suite.addBatch({"select(body)":{topic:function(){return d3.select("body").html("")},"assigns data as an array":function(e){var t=new Object;e.data([t]),assert.strictEqual(document.body.__data__,t)},"assigns data as a function":function(e){var t=new Object;e.data(function(){return[t]}),assert.strictEqual(document.body.__data__,t)},"stores data in the DOM":function(e){var t=new Object,n;document.body.__data__=t,e.each(function(e){n=e}),assert.strictEqual(n,t)},"returns a new selection":function(e){assert.isFalse(e.data([1])===e)},"with no arguments, returns an array of data":function(e){var t=new Object;e.data([t]),assert.deepEqual(e.data(),[t]),assert.strictEqual(e.data()[0],t)},"throws an error if data is null or undefined":function(e){assert.throws(function(){e.data(null)},Error),assert.throws(function(){e.data(function(){})},Error)}}}),suite.addBatch({"selectAll(div)":{topic:function(){return d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().append("div")},"assigns data as an array":function(e){var t=new Object,n=new Object;e.data([t,n]),assert.strictEqual(e[0][0].__data__,t),assert.strictEqual(e[0][1].__data__,n)},"assigns data as a function":function(e){var t=new Object,n=new Object;e.data(function(){return[t,n]}),assert.strictEqual(e[0][0].__data__,t),assert.strictEqual(e[0][1].__data__,n)},"stores data in the DOM":function(e){var t=new Object,n=new Object,r=[];e[0][0].__data__=t,e[0][1].__data__=n,e.each(function(e){r.push(e)}),assert.deepEqual(r,[t,n])},"returns a new selection":function(e){assert.isFalse(e.data([0,1])===e)},"throws an error if data is null or undefined":function(e){assert.throws(function(){e.data(null)},Error),assert.throws(function(){e.data(function(){})},Error)},"with no arguments, returns an array of data":function(e){var t=new Object,n=new Object,r=[];e[0][0].__data__=t,e[0][1].__data__=n,assert.deepEqual(e.data(),[t,n])},"with no arguments, returned array has undefined for null nodes":function(e){var t=new Object,n=[];e[0][0]=null,e[0][1].__data__=t;var r=e.data();assert.isUndefined(r[0]),assert.strictEqual(r[1],t),assert.equal(r.length,2)}}}),suite.addBatch({"selectAll(div).selectAll(span)":{topic:function(){return d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().append("div").selectAll("span").data(d3.range(2)).enter().append("span")},"assigns data as an array":function(e){var t=new Object,n=new Object;e.data([t,n]),assert.strictEqual(e[0][0].__data__,t),assert.strictEqual(e[0][1].__data__,n),assert.strictEqual(e[1][0].__data__,t),assert.strictEqual(e[1][1].__data__,n)},"assigns data as a function":function(e){var t=new Object,n=new Object,r=new Object,i=new Object;e.data(function(e,s){return s?[r,i]:[t,n]}),assert.strictEqual(e[0][0].__data__,t),assert.strictEqual(e[0][1].__data__,n),assert.strictEqual(e[1][0].__data__,r),assert.strictEqual(e[1][1].__data__,i)},"evaluates the function once per group":function(e){var t=0;e.data(function(){return++t,[0,1]}),assert.equal(t,2)},"defines an update selection for updating data":function(e){var t=e.data(d3.range(4));assert.equal(t.length,2),assert.equal(t[0].length,4),assert.equal(t[1].length,4),assert.domEqual(t[0][0],e[0][0]),assert.domEqual(t[0][1],e[0][1]),assert.domNull(t[0][2]),assert.domNull(t[0][3]),assert.domEqual(t[1][0],e[1][0]),assert.domEqual(t[1][1],e[1][1]),assert.domNull(t[1][2]),assert.domNull(t[1][3])},"defines an enter selection for entering data":function(e){var t=e.data(d3.range(4)).enter();assert.isFalse(t.empty()),assert.equal(t.length,2),assert.equal(t[0].length,4),assert.equal(t[1].length,4),assert.domNull(t[0][0]),assert.domNull(t[0][1]),assert.deepEqual(t[0][2],{__data__:2}),assert.deepEqual(t[0][3],{__data__:3}),assert.domNull(t[1][0]),assert.domNull(t[1][1]),assert.deepEqual(t[1][2],{__data__:2}),assert.deepEqual(t[1][3],{__data__:3})},"defines an exit selection for exiting data":function(e){var t=e.data(d3.range(1)).exit();assert.isFalse(t.empty()),assert.equal(t.length,2),assert.equal(t[0].length,2),assert.equal(t[1].length,2),assert.domNull(t[0][0]),assert.domEqual(t[0][1],e[0][1]),assert.domNull(t[1][0]),assert.domEqual(t[1][1],e[1][1])},"observes the specified key function":function(e){var t=e.data([1,2],Number);assert.isFalse(t.empty()),assert.equal(t.length,2),assert.equal(t[0].length,2),assert.equal(t[1].length,2),assert.domEqual(t[0][0],e[0][1]),assert.domNull(t[0][1]),assert.domEqual(t[1][0],e[1][1]),assert.domNull(t[1][1]);var n=t.enter();assert.equal(n.length,2),assert.equal(n[0].length,2),assert.equal(n[1].length,2),assert.domNull(n[0][0]),assert.deepEqual(n[0][1],{__data__:2}),assert.domNull(n[1][0]),assert.deepEqual(n[1][1],{__data__:2});var r=t.exit();assert.equal(r.length,2),assert.equal(r[0].length,2),assert.equal(r[1].length,2),assert.domEqual(r[0][0],e[0][0]),assert.domNull(r[0][1]),assert.domEqual(r[1][0],e[1][0]),assert.domNull(r[1][1])},"handles keys that are in the default object's prototype chain":function(e){var t=e.data(["hasOwnProperty","isPrototypeOf","toLocaleString","toString","valueOf"],String);assert.domNull(t[0][0]),assert.domNull(t[0][1]),assert.domNull(t[0][2]),assert.domNull(t[0][3]),assert.domNull(t[0][4]),e.data([0],function(){return"hasOwnProperty"})}}}),suite.export(module)