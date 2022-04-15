function start(){
    console.log("start function started...")
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."
    console.log("update seconds row to Reading Data");
    document.getElementById("startButton").disabled = true;
    console.log("start button disabled");
    document.getElementById("stopButton").disabled = false;
    console.log("stop button enabled")
}
function stop(){
    console.log("stop function started...")
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td></tr>"
    console.log("update seconds row to seconds");
    document.getElementById("stopButton").disabled = true;
    console.log("stop button disabled");
    document.getElementById("startButton").disabled = false;
    console.log("start button enabled");
}