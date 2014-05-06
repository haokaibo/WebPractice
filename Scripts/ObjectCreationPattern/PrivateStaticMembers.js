/**
 * PrivateStaticMembers.js
 * @author Kaibo
 */

// constructor
var Gadget = (function () {
	// static variable/property
	var counter = 0,
		NewGadget;
	// this will become the new constructor implementation
	NewGadget = function () {
		counter += 1;
	};
	// a privileged method
	NewGadget.prototype.getLastId = function () {
		return counter;
	};
	// overwrite the constructor
	return NewGadget;
}()); // execute immediately
