/* app.js */

// table container
var animatedTable = document.querySelector("table.board");


/*************************************************************
 *  ON LOAD ANIMATION
 * 
 *  DO NOT CHANGE
 * 
 *  When the page is first loaded, show three random points  
 *  on the animated to demonstrate the pulse effect. 
 * ***********************************************************/
function onLoad(){
  pulseColor(5, 5, 5);
}

/*************************************************************
 *  ANIMATED TABLE EVENT LISTENER
 * 
 *  TBD
 * 
 *  If the element pressed is a table cell then call the 
 *  pulseColor function. The pulseDepth is randomly set to an 
 *  integer between 1 and 4.
 * ***********************************************************/
animatedTable.addEventListener("click", function(){
    
    if (event.target.tagName == "TD" ){
        
        // Math.floor(Math.random()*4)+1
        pulseColor(event.target.id.substring(0, event.target.id.indexOf("-")), event.target.id.substring(event.target.id.indexOf("-")+1, event.target.id.length), 4);
    
    }

});

/*************************************************************
 *  PULSE COLORS FUNCTION
 * 
 *  TBD
 * 
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth.
 * ***********************************************************/
function pulseColor(rowNum, colNum, pulseDepth){
    
    if(pulseDepth > -1 && verifyCoordinates(rowNum, colNum)){

        if(!(document.getElementById(rowNum+"-"+colNum).classList.contains("animate-table-cell"))){
            
            document.getElementById(rowNum+"-"+colNum).classList.add("animate-table-cell");

            
            window.setTimeout(function() {
                document.getElementById(rowNum+"-"+colNum).classList.remove('animate-table-cell');

            },500);


        }

        
    }

}

/*************************************************************
 *  VERIFY COORDINATES FUNCTION
 * 
 *  TBD
 * 
 *  Check to see if the given coordinates correspond to an 
 *  existing element that has an id attribute with these
 *  coordinates.
 * ***********************************************************/
function verifyCoordinates(rowNum, colNum){
    if (document.getElementById(rowNum+"-"+colNum) != null && rowNum >= 0 && rowNum <= 24 && colNum >= 0 && colNum <= 31){
        return true;
    }
    else{
        return false;
    }
}