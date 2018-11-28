function calculateCurrentGrade() {
    var homework = document.getElementById("Homework").value;
    var classwork = document.getElementById("Classwork").value;
    var participation = document.getElementById("Participation").value;
    var test = document.getElementById("Test").value;
    var project = document.getElementById("Project").value;
    var homeworkAvg = convertToAvg(homework);
    var classworkAvg = convertToAvg(classwork);
    var participationAvg = convertToAvg(participation);
    var testAvg = convertToAvg(test);
    var projectAvg = convertToAvg(project);
    var hwgrade =  getWeight(homeworkAvg,"Homework Weight");
    var cwgrade =  getWeight(classworkAvg,"Classwork Weight");
    var pgrade = getWeight(participationAvg, "Participation Weight");
    var tgrade = getWeight(testAvg, "Test Weight");
    var prgrade = getWeight(projectAvg, "Project Weight");
    var grade = hwgrade + cwgrade + pgrade + tgrade + prgrade;
    var hwWeight = change("Homework Weight");
    var cwWeight = change("Classwork Weight");
    var pWeight = change("Participation Weight");
    var tWeight = change("Test Weight");
    var prWeight = change("Project Weight");
    var total = hwWeight + cwWeight + pWeight + tWeight + prWeight;
    var roundGrade = (grade).toFixed(2);
    if(total>100 || total<0){
        document.getElementById("error").innerHTML = "Please enter a valid values"
    }
    else {
        document.getElementById("grade").innerHTML = "Your current grade is: " + roundGrade;
        return roundGrade;
    }
}
function convertToAvg(str){
    var split = str.split(",");
    var average=0;
        for(var i = 0; i<split.length; i++){
            average+=parseInt(split[i]);
        }
    average=average/split.length;
    return average;
}
function getWeight(avg, category){
    var num = document.getElementById(category).value;
    var weight = num/100;
    var total = weight * avg;
    return total;
}
function finalGrade() {
    var current = calculateCurrentGrade();
    var stringfinalWeight = document.getElementById("finalWeight").value;
    var stringgradeWanted = document.getElementById("gradeWanted").value;
    var finalWeight = parseInt(stringfinalWeight);
    var gradeWanted = parseInt(stringgradeWanted);
    var currentWeight = (100 - finalWeight) / 100;
    var percent = currentWeight * current;
    var decimal = finalWeight / 100;
    var a = gradeWanted - percent;
    var final = a / decimal;
    var roundFinal = (final).toFixed(2);
    if (finalWeight > 100 || finalWeight < 0) {
        document.getElementById("error2").innerHTML = "Please enter a valid weight"
    }
    else {
        document.getElementById("final").innerHTML = "You need a " + roundFinal + "% to get a "
            + gradeWanted + "%";
    }
}
function change(category){
    var num = document.getElementById(category).value;
    var num2 = parseInt(num);
    return num2;
}