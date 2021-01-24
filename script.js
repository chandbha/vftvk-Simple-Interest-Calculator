
function updateSlider(sliderValue) {

  var outputinterestslider = document.getElementById("outputRate");
  outputinterestslider.innerHTML = sliderValue  + '%';
}
function compute()
{
  
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal <=0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
    }else {
    var interest = principal*years*rate/100;
    var actual_year = 2021 + parseInt(years);
     document.getElementById("result").innerHTML = 'if you deposit <mark>' + principal + '</mark><br/>' + 'at an interest rate of <mark>'+ rate + '% </mark>' +'<br/>' 
                                                    + 'You will recieve an amount of <mark>' + interest + '<mark>,<br/>' + 'in the year <mark>' + actual_year +'</mark>';
}
}

        
