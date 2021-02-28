
/* Date */
theTimer();
setInterval(theTimer, 1000);

function theTimer() {
    var theTime = new Date(new Date().getTime()).toLocaleTimeString();
    var theDate = new Date(new Date().getTime()).toLocaleDateString();
    pvm.innerHTML = theTime + " &#124; " + theDate;
}




// HELP MODAL & INFO MODAL
var help_modal = document.getElementById('modal-help');
var help_reveal_btn = document.getElementById("btn-help");
var help_close = document.getElementsByClassName("close")[0];

var info_modal = document.getElementById('modal-info');
var info_reveal_btn = document.getElementById("btn-info");
var info_close = document.getElementsByClassName("close")[1];

help_reveal_btn.onclick = function() {
    help_modal.style.display = "block";
}
help_close.onclick = function() {
    help_modal.style.display = "none";
}

info_reveal_btn.onclick = function() {
    info_modal.style.display = "block";
}
info_close.onclick = function() {
    info_modal.style.display = "none";
}

// Modal close buttons
window.onclick = function(event) {
    if (event.target == info_modal) {
        info_modal.style.display = "none";
    } else if (event.target == help_modal) {
        help_modal.style.display = "none" 
    }
} 





// Tab switching - WIP

/*var tabLinks = document.querySelectorAll('.tablinks');
for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function(event) {
        if (event.target == 0) {
            console.log('tab 1 clicked')
        } else {
            console.log('not tab 1 clicked')
        }
    })
}*/



/* Info tabs */
function openTab(evt, tabName) {
  
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
  
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
  
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




const contentBlocks = document.querySelectorAll(".content-block");

contentBlocks.forEach( (element, index) => {

    element.addEventListener("click", (e) => {
        //console.log(element);

        if (element.classList.contains("frequency-content-block")) {
            console.log("FREQUENCY BLOCK");
            $(".hide").hide(150).animate({ "left": "+=0px" }, "150" );
            $("#section-expanded-frequency").show(150).animate({ "left": "+=0px" }, "150" );
        } else if (element.classList.contains("fan-content-block")) {
            console.log("FAN BLOCK")
        } else if (element.classList.contains("usage-overall-content-block")) {
            console.log("USAGE OVERALL BLOCK")
        } else if (element.classList.contains("usage-cores-content-block")) {
            console.log("USAGE CORES BLOCK")
        } else if (element.classList.contains("temperature-content-block")) {
            console.log("TEMPERATURE BLOCK")
        }

        // switch (element.classList.contains) {
        //     case ("frequency-content-block"):
        //         console.log("FREQUENCY BLOCK");
        //         break;
        //     case 1:
        //         day = "Monday";
        //         break;
        //     case 2:
        //         day = "Tuesday";
        //         break;
        //     case 3:
        //         day = "Wednesday";
        //         break;
        //     case 6:
        //         day = "Saturday";
        // }
    })
})



// $(document).ready(function() {
//     $("#expand-freq").click(function() {
//         $(".hide").hide(150).animate({ "left": "+=0px" }, "150" );
//         $("#section-expanded-frequency").show(150).animate({ "left": "+=0px" }, "150" );
//     });
//     $("#backToMain1").click(function() {
//         $("#section-expanded-frequency").hide(150).animate({ "left": "+=0px" }, "150" );
//         $(".hide").show(150).animate({ "left": "+=0px" }, "150" );
//     });
//     $(".frequency-content-block").click(function() {
//         $(".hide").hide(150).animate({ "left": "+=0px" }, "150" );
//         $("#section-expanded-frequency").hide(150).animate({ "left": "+=0px" }, "150" );
//         $("#section-single-frequency").show(150).animate({ "left": "+=0px" }, "150" );
//     });
//     $("#backToMain2").click(function() {
//         $("#section-single-frequency").hide(150).animate({ "left": "+=0px" }, "150" );
//         $(".hide").show(150).animate({ "left": "+=0px" }, "150" );
//     });

//     $(".fan-content-block").click(function() {
//         $(".hide").hide(150).animate({ "left": "+=0px" }, "150" );
//         $(".show3x1fan").show(150).animate({ "left": "+=0px" }, "150" );
//     });
//     $("#backToMain3").click(function() {
//         $(".show3x1fan").hide(150).animate({ "left": "+=0px" }, "150" );
//         $(".hide").show(150).animate({ "left": "+=0px" }, "150" );
//     });
// });




// CPU Frequency select boxes
var selectBoxes = document.querySelectorAll('.core-select > input');
const [, ...selectBoxesNoAll] = selectBoxes;
//var selectBoxWrapper = document.querySelectorAll('.frequency-single-cores')[0];
var freqCoreCharts = document.querySelectorAll('.freq-single-core-chart');

//console.log(selectBoxesNoAll);

function activateFreqChart(target) {
    target.classList.add('active');
}
function deActivateFreqChart(target) {
    target.classList.remove('active');
}

for (var i = 0; i < selectBoxes.length; i++) {
    selectBoxes[i].addEventListener('change', function(event) {
            
        // ALL CORES
        if (event.target == selectBoxes[0]) {
            if (selectBoxes[0].classList.contains('active')) {
                selectBoxes[0].classList.remove('active');
                selectBoxes.forEach(function(element) {
                    element.checked = false;
                })
                freqCoreCharts.forEach(function(element) {
                    deActivateFreqChart(element)
                })
            } else {
                selectBoxes[0].classList.add('active');
                selectBoxes.forEach(function(element) {
                    element.checked = true;
                })
                freqCoreCharts.forEach(function(element) {
                    activateFreqChart(element)
                })
            }
        }
        
        
        // If not all cores are selected, remove check from "ALL"
        if (event.target !== selectBoxes[0]) {
            //console.log('Anything but the first');
        }
        
        
        // SINGLE CORES
        if (event.target == selectBoxes[1]) {
            freqCoreCharts[0].classList.contains('active') 
            ? deActivateFreqChart(freqCoreCharts[0])
            : activateFreqChart(freqCoreCharts[0]);
            
        } else if (event.target == selectBoxes[2]) {
            freqCoreCharts[1].classList.contains('active') 
            ? deActivateFreqChart(freqCoreCharts[1])
            : activateFreqChart(freqCoreCharts[1]);
            
        } else if (event.target == selectBoxes[3]) {
            freqCoreCharts[2].classList.contains('active') 
            ? deActivateFreqChart(freqCoreCharts[2])
            : activateFreqChart(freqCoreCharts[2]);
            
        } else if (event.target == selectBoxes[4]) {
            freqCoreCharts[3].classList.contains('active') 
            ? deActivateFreqChart(freqCoreCharts[3])
            : activateFreqChart(freqCoreCharts[3]);
            
        } else if (event.target == selectBoxes[5]) {
            freqCoreCharts[4].classList.contains('active') 
            ? deActivateFreqChart(freqCoreCharts[4])
            : activateFreqChart(freqCoreCharts[4]);
            
        } else if (event.target == selectBoxes[6]) {
            freqCoreCharts[5].classList.contains('active') 
            ? deActivateFreqChart(freqCoreCharts[5])
            : activateFreqChart(freqCoreCharts[5]);
            
        }
        
    })
}






// Update copyright year automatically
document.querySelector('#copy-year').textContent = new Date().getFullYear();

