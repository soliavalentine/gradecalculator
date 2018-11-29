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
        if(homeworkAvg>=90){
                document.getElementById("Homework").style.backgroundColor="green";
        } if(classworkAvg>=90){
            document.getElementById("Classwork").style.backgroundColor="green";
        } if(testAvg>=90){
            document.getElementById("Test").style.backgroundColor="green";
        } if(participationAvg>=90){
            document.getElementById("Participation").style.backgroundColor="green";
        } if(projectAvg>=90){
            document.getElementById("Project").style.backgroundColor="green";
        } if(homeworkAvg<90 && homeworkAvg>=80){
            document.getElementById("Homework").style.backgroundColor="blue";
        } if(classworkAvg<90 && classworkAvg>=80){
            document.getElementById("Classwork").style.backgroundColor="blue";
        } if(testAvg<90 && testAvg>=80){
            document.getElementById("Test").style.backgroundColor="blue";
        } if(participationAvg<90 && participationAvg>=80){
            document.getElementById("Participation").style.backgroundColor="blue";
        } if(projectAvg<90 && projectAvg>=80){
            document.getElementById("Project").style.backgroundColor="blue";
        } if(homeworkAvg<80 && homeworkAvg>=70){
            document.getElementById("Homework").style.backgroundColor="yellow";
        } if(classworkAvg<80 && classworkAvg>=70){
            document.getElementById("Classwork").style.backgroundColor="yellow";
        } if(testAvg<80 && testAvg>=70){
            document.getElementById("Test").style.backgroundColor="yellow";
        } if(participationAvg<80 && participationAvg>=70){
            document.getElementById("Participation").style.backgroundColor="yellow";
        } if(projectAvg<80 && projectAvg>=70){
            document.getElementById("Project").style.backgroundColor="yellow";
        } if(homeworkAvg<70 && homeworkAvg>=60){
            document.getElementById("Homework").style.backgroundColor="orange";
        } if(classworkAvg<70 && classworkAvg>=60){
            document.getElementById("Classwork").style.backgroundColor="orange";
        } if(testAvg<70 && testAvg>=60){
            document.getElementById("Test").style.backgroundColor="orange";
        } if(participationAvg<70 && participationAvg>=60){
            document.getElementById("Participation").style.backgroundColor="orange";
        } if(projectAvg<70 && projectAvg>=60){
            document.getElementById("Project").style.backgroundColor="orange";
        } if(homeworkAvg<60){
            document.getElementById("Homework").style.backgroundColor="red";
        } if(classworkAvg<60){
            document.getElementById("Classwork").style.backgroundColor="red";
        } if(testAvg<60){
            document.getElementById("Test").style.backgroundColor="red";
        } if(participationAvg<60){
            document.getElementById("Participation").style.backgroundColor="red";
        } if(projectAvg<60){
            document.getElementById("Project").style.backgroundColor="red";
    }
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