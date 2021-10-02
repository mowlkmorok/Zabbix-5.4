"use strict";
/*
* I'm Lucas! (git: /mowlkmorok)
* This is a simple fix to zabbix graph load on dashboard
* This script only run on dashboard
* ATENTION! You can't hide the 'filter' on dashboard  
*/

// Checking if the page is loaded
if(document.readyState=="complete") document.addEventListener('DOMContentLoaded', reload1);
else reload1();

function select1(){
    document.getElementsByClassName('selected')[1].click();
    reload1();
}

// Function Reload call the 'select' to do the magic lol
function reload1(){
    console.clear();
    console.log("reloading...");
    // Set time in ms. here is 1 minutes
    setTimeout("select1()", 60000);

}
