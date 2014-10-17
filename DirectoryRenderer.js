/**
@author: Nishant
This class is used for rendering the basic shapes.
*/

function Renderer() {
	//Init Variables.
	this._maxWidth = undefined;
	this._maxHeight = undefined;
	this._context = undefined;

	

};

//Renderer.prototype.constructor = function(mW,mH,ctx) {
function Renderer(mW,mH,ctx) {
	console.log(ctx);
	this._maxHeight = mH;
	this._maxWidth - mW;
	this._context = ctx;
	//Some Constants.
	this._folderWidth = 50;
	this._folderHeight= 40;
};

Renderer.prototype.createFolderIcon = function(x,y,directoryName) {
	var folder=this._context.rect(x,y,this._folderWidth,this._folderHeight);
	folder.attr({
		stroke: '#DCE027',
		fill: "#DCE027",
		"fill-opacity": 1
	});


}

