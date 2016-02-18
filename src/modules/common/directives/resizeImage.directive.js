'use strict';

module.exports = /*@ngInject*/
    function resizeImage($rootScope) {
		return{
			link:function(scope,element){
				//element[0].setAttribute("style","height: " + element[0].width + "px!important");
			}        
		};      
};