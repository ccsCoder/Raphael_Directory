/**
@author: Nishant
This class is used for rendering the basic shapes.
*/

var Renderer = function() {
	//Init Variables.
	this._x = undefined;
	this._y = undefined;
	this._maxWidth = undefined;
	this._maxHeight = undefined;
	this._context = undefined;

	//Some Constants.
	this._folderWidth = 50;
	this._folderHeight= 40;

};

Renderer.prototype.constructor = function(x,y,mW,mH,ctx) {
	this._x = x;
	this._y = y;
	this._maxHeight = mH;
	this._maxWidth - mW;
	this._context = ctx;
};

Renderer.prototype.createFolderIcon = function(x,y,directoryName) {
	var folder=this._context.rect(x,y,this._folderWidth,this._folderHeight);
	folder



}

