(function(){
    "use strict";

    document.getElementById("convert").addEventListener("submit", function(event){
        
        event.preventDefault();

        var distance = document.getElementById("distance").value;
        distance = parseFloat(distance);
        var answer = document.getElementById("answer");
        var cfvalue = document.getElementById("convertfrom").value;
        var ctvalue = document.getElementById("convertto").value;

        if (cfvalue == "mm") {
            if (ctvalue == "mm") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 0.1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 0.001);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 0.000001);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 0.03937);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 0.003281);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 0.0010936);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.0000006214);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.00000054);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "cm") {
            if (ctvalue == "mm") {
                var conversion = (distance * 10);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 0.01);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 0.00001);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 0.3937);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 0.03281);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 0.010936);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.000006214);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.0000054);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "m") {
            if (ctvalue == "mm") {
                var conversion = (distance * 1000);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 100);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 0.001);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 39.37);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 3.281);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 1.0936);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.0006214);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.00054);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "km") {
            if (ctvalue == "mm") {
                var conversion = (distance * 1000000);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 100000);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 1000);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 39370);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 3281);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 1093.6);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.6214);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.54);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "in") {
            if (ctvalue == "mm") {
                var conversion = (distance * 25.4);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 2.54);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 0.0254);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 0.0000254);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 0.08333);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 0.02778);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.000015783);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.000013715);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "ft") {
            if (ctvalue == "mm") {
                var conversion = (distance * 304.8);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 30.48);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 0.3048);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 0.0003048);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 12);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 0.33333);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.0001894);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.00016458);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "yd") {
            if (ctvalue == "mm") {
                var conversion = (distance * 914.4);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 91.44);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 0.9144);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 0.0009144);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 36);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 3);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 0.0001894);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.0004937);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "mi") {
            if (ctvalue == "mm") {
                var conversion = (distance * 1609344);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 160934);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 1609.3);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 1.6093);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 63360);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 5280);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 1760);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 0.869);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }

        if (cfvalue == "nmi") {
            if (ctvalue == "mm") {
                var conversion = (distance * 1852000);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " millimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " millimeters</h2>";
                }
            }
            else if (ctvalue == "cm") {
                var conversion = (distance * 185200);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " centimeter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " centimeters</h2>";
                }
            }
            else if (ctvalue == "m") {
                var conversion = (distance * 1852);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " meter</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " meters</h2>";
                }
            }
            else if (ctvalue == "km") {
                var conversion = (distance * 1.852);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " kilometer</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " kilometers</h2>";
                }
            }
            else if (ctvalue == "in") {
                var conversion = (distance * 72913);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " inch</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " inches</h2>";
                }
            }
            else if (ctvalue == "ft") {
                var conversion = (distance * 6076);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " foot</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " feet</h2>";
                }
            }
            else if (ctvalue == "yd") {
                var conversion = (distance * 2025.4);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " yard</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " yards</h2>";
                }
            }
            else if (ctvalue == "mi") {
                var conversion = (distance * 1.1508);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " miles</h2>";
                }
            }
            else if (ctvalue == "nmi") {
                var conversion = (distance * 1);
                if (conversion == 1) {
                    answer.innerHTML = "<h2>" + conversion + " nautical mile</h2>";
                }
                else {
                    answer.innerHTML = "<h2>" + conversion + " nautical miles</h2>";
                }
            }
        }
    });

    document.getElementById("tempconvert").addEventListener("submit", function(event){
        
        event.preventDefault();

        var temp = document.getElementById("temp").value;
        temp = parseFloat(temp);
        var tempanswer = document.getElementById("tempanswer");
        var cfvalue = document.getElementById("converttempfrom").value;
        var ctvalue = document.getElementById("converttempto").value;

        if (cfvalue == "degF") {
            if (ctvalue == "degC") {
                var conversion = (temp-32)/1.8;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;C</h2>";
            }
            else if (ctvalue == "degK") {
                var conversion = ((temp+459.67)*5)/9;
                tempanswer.innerHTML = "<h2>" + conversion + " K</h2>";
            }  
            else if (ctvalue == "degR") {
                var conversion = temp+459.67;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;R</h2>";
            }  
        }

        if (cfvalue == "degC") {
            if (ctvalue == "degF") {
                var conversion = (temp*1.8)+32;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;F</h2>";
            }
            else if (ctvalue == "degK") {
                var conversion = temp + 273.15;
                tempanswer.innerHTML = "<h2>" + conversion + " K</h2>";
            }  
            else if (ctvalue == "degR") {
                var conversion = (temp+273.15)*1.8;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;R</h2>";
            }  
        }

        if (cfvalue == "degK") {
            if (ctvalue == "degF") {
                var conversion = (temp*1.8)-459.67;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;F</h2>";
            }
            else if (ctvalue == "degC") {
                var conversion = temp-273.15;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;C</h2>";
            }  
            else if (ctvalue == "degR") {
                var conversion = temp*1.8;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;R</h2>";
            }  
        }

        if (cfvalue == "degR") {
            if (ctvalue == "degF") {
                var conversion = temp-459.67;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;F</h2>";
            }
            else if (ctvalue == "degC") {
                var conversion = ((temp-491.67)*5)/9;
                tempanswer.innerHTML = "<h2>" + conversion + " &#176;C</h2>";
            }  
            else if (ctvalue == "degK") {
                var conversion = (temp*5)/9;
                tempanswer.innerHTML = "<h2>" + conversion + " K</h2>";
            }  
        }
    });
})();