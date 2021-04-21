function getpara1(){
    var inputs = []
    for (i = 1; i <= 6; i++){
        inputs.push(document.getElementById("input_" + i).value);
    }   
    document.getElementById("1paradis").innerHTML = inputs.join(". ");
}
