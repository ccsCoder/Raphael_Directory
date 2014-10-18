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
	this._folderWidth = 100;
	this._folderHeight= 60;
	this._fileWidth = 60;
	this._fileHeight=100;
	this._radius = 10;
};

Renderer.prototype._setFolderLookAndFeel = function(folder) {
	//set the colour
	folder.attr({
		stroke: '#91B3E6',
		'stroke-width': 2,
		fill: '#5492ED',
		"fill-opacity": 1,
		cursor: 'pointer'
	});

	//set the Hover Effect
	folder.hover(function() {
		folder.animate({
			
			'stroke-width': 6
			},
			500);
	}, function() {
		 // Stuff to do when the mouse leaves the element 
		folder.attr({
			stroke: '#91B3E6',
			'stroke-width': 2,
			fill: '#5492ED',
			"fill-opacity": 1,
			cursor: 'pointer'
		});	
	});
};

Renderer.prototype.layoutFilesAndFolders = function(startX, startY, fsobjects) {
	//Okay, the hard works starts.
	



};

Renderer.prototype._setFileLookAndFeel = function(file) {
	//set the colour
	file.attr({
		stroke: '#91B3E6',
		fill:'black',
		'stroke-width': 2,
		cursor: 'pointer'
	});

	//set the Hover Effect
	file.hover(function() {
		file.animate({
			
			'stroke-width': 4
			},
			500);
	}, function() {
		 // Stuff to do when the mouse leaves the element 
		file.attr({
			stroke: '#91B3E6',
			'stroke-width': 2,
			fill:'black',
			cursor: 'pointer'
		});	
	});

}

Renderer.prototype.createFileIcon = function(x,y,fileName) {
	//Create an Aggretation
	var fileIcon = this._context.set();

	//The Rectangle Part.
	var file=this._context.rect(x,y,this._fileWidth,this._fileHeight,this._radius);

	console.debug(file);
	//set the folder l&f
	this._setFileLookAndFeel(file);

	//create the Text Node.
	var textNode=this._context.text((x+(this._fileWidth)/2),y+this._fileHeight+15,fileName);

	textNode.attr({
		'font-familiy':'Helvetica Neue',
		'font-size': 12,
		fill:'white'
	});

	//Push these to the Set.
	fileIcon.push(file);
	fileIcon.push(textNode);

	//add the Scale Effect :)
	fileIcon.hover(function() {
		/* Stuff to do when the mouse enters the element */
		fileIcon.animate({transform:'s1.1 1.1'}, 500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		fileIcon.animate({transform:'s1.0 1.0'}, 500);
	});	
}

Renderer.prototype.createFolderIcon = function(x,y,directoryName) {

	//Create an Aggretation
	var folderIcon = this._context.set();

	//The Rectangle Part.
	var folder=this._context.rect(x,y,this._folderWidth,this._folderHeight,this._radius);
	
	//set the folder l&f
	this._setFolderLookAndFeel(folder,this);

	//create the Text Node.
	var textNode=this._context.text((x+(this._folderWidth)/2),y+this._folderHeight+15,directoryName);

	textNode.attr({
		'font-familiy':'Helvetica Neue',
		'font-size': 12,
		fill:'white'
	});

	//Push these to the Set.
	folderIcon.push(folder);
	folderIcon.push(textNode);

	//add the Scale Effect :)
	folderIcon.hover(function() {
		/* Stuff to do when the mouse enters the element */
		folderIcon.animate({transform:'s1.1 1.1'}, 500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		folderIcon.animate({transform:'s1.0 1.0'}, 500);
	});	




}

