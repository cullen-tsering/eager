'use strict';

module.exports=Log4node;
    
function Log4node (fileName) {
    if (!this instanceof Log4node)
    {
        return new Log4node(fileName);
    }
    this._fileName = fileName;
};
Log4node.prototype.log_debug = function (content){
    console.log("logging " + content + " to fileName" + this._fileName);
};
