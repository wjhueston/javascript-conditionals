$(document).ready(
    function () {
    //Events
    $("#clickCounter").submit(countClick)
    $("#ageValidator").submit(checkAge)
    $("#salesTax").submit(calcSalesTax)
    $("#catFood").submit(recommendFood)
    $("#randomCard").submit(drawCard)

    //Functions
    var clicks = 0;
	function countClick(event){
        event.preventDefault()
        if(clicks === 10) clicks = 0;
	    clicks+=1
		$("#clickCountOutput").text("Total clicks: " + clicks)

	}


    function checkAge(event) {
	    event.preventDefault()
        var birthYear = $("#birthYear").val();
	    var currentYear = new Date()
        currentYear = currentYear.getFullYear()
        var age = currentYear - birthYear
        if(age < 18) $("#birthYearOutput").text("Child")
        else $("#birthYearOutput").text("Adult")
    }

    function calcSalesTax(event) {
	    event.preventDefault()
        var purchaseAmount = $("#purchaseAmount").val();
        var state = $("#state").val();
        var taxAmount
        //I prefer to use Switch statements for flow control where there are four or more possible outcomes.
        //I'll include the if-elseif-else statement below, commented out.
        switch(state){
            case "WI":
                taxAmount = "$" + (purchaseAmount * 0.05).toFixed(2)
                break;
            case "IL":
                taxAmount = "$" + (purchaseAmount * 0.08).toFixed(2)
                break;
            case "MN":
                taxAmount = "$" + (purchaseAmount * 0.075).toFixed(2)
                break;
            case "MI":
                taxAmount = "$" + (purchaseAmount * 0.055).toFixed(2)
                break;
            default:
                taxAmount = "Error"
                break;
        }
        /*if(state ==="WI"){
            taxAmount = "$" + (purchaseAmount * 0.05).toFixed(2);
        }
        else if(state==="IL"){
            taxAmount = "$" + (purchaseAmount * 0.08).toFixed(2);
        }
        else if(state==="MN"){
            taxAmount = "$" + (purchaseAmount * 0.075).toFixed(2);
        }
        else if(state==="MI"){
            taxAmount = "$" + (purchaseAmount * 0.055).toFixed(2);
        }
        else{
            taxAmount = "Error"
        }*/
        $("#salesTaxOutput").text(taxAmount)
    }

    function recommendFood(event) {
	    event.preventDefault()
        var age = $("#catAge").val()
        var recommendation
        if(age < 2) recommendation = "Recommended: Kitten Chow"
        else if(age >= 2 && age <= 10) recommendation = "Recommended: Adult Chow"
        else recommendation = "Recomendado: Señor Chow"
        $("#catAgeOutput").text(recommendation)
    }

    function drawCard(event) {
        event.preventDefault()
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;
        var suitName
        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;
        switch(suit){
            case 1:
                suitName = "Clubs"
                break;
            case 2:
                suitName = "Spades"
                break;
            case 3:
                suitName = "Hearts"
                break;
            case 4:
                suitName = "Diamonds"
                break;
            default: break;
        }
        if(faceValue === 1) faceValue = "Ace"
        else if(faceValue === 11) faceValue = "Jack"
        else if(faceValue === 12) faceValue = "Queen"
        else if (faceValue === 13) faceValue = "King"
        description = faceValue + " of " + suitName
        $("#drawCardOutput").text("Your card: " + description)

    }

});