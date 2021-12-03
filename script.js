function compute(){
    p = document.getElementById("principal").value;
    // if statement for alerting of a negative number
    if(p <= 0){
        alert("Enter a positive number")
        principal.focus();
    };
    computeInterest();

};
// dynamically update rate
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
};
function computeInterest(){
    // variables to be used
    var interest = principal * years * rate / 100;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    var interest = principal * years * rate / 100;
    // dynamically created text below
    document.getElementById("result").innerHTML = `If you deposit <span class="hilight">${principal}</span>,<br>
        at an interest rate of <span class="hilight">${rate}</span>%. <br> You will recieve an amount of <span class="hilight">${interest}</span>
    ,<br> in the year <span class="hilight">${year}</span><br>`
};
