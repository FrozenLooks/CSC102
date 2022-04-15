function start(){
    console.log("start function started...")
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log("stop function started...")
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td></tr>"
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}