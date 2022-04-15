class Rocket {
    //making the properties
    constructor(
        fuelType,
        weight,
        power
    )   {
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch sequence started");
        alert("Clear the launch area, launch is about to start");
        alert("Launch sequence started");
    }

    landing(){
        console.log("landing sequence started");
        alert("Landing sequence started");
    }

    detachThruster(){
        console.log("detach Thruster sequence started");
        alert("Detach Thruster sequence started");
    }
}

class Mission {
    constructor(
        objective,
        oxyLvl,
        launchDataDay,
        launchDataMonth,
        launchDataYear,
        spaceCraft,
        numOfAstronauts
    ) {
        this.objective = objective
        this.oxyLvl = oxyLvl
        this.launchDataDay = launchDataDay
        this.launchDataMonth = launchDataMonth
        this.launchDataYear = launchDataYear
        this.spaceCraft = spaceCraft
        this.numOfAstronauts = numOfAstronauts
    }

    launchMission(){
        console.log("launchMission started");
        alert("Launch sequence started, best of luck to the crew of the " 
            + this.spaceCraft)
    }
    displayMissionParameters(){
        console.log("displayMissionParameters started")
        alert("The spacecraft, " + this.spaceCraft + ", will launch on " 
            + this.launchDataMonth + " " + this.launchDataDay + ", " + this.launchDataYear +
            " with an O2 level of " + this.oxyLvl + "%.")
    }
}

class Sensors {
    
}

function runSpDisplay(){
    console.log("runSpDisplay() started...");
    springLaunch.displayMissionParameters();
}

function spLaunch(){
    console.log("spLaunch() started");
    springLaunch.launchMission();
}

function runFlDisplay(){
    console.log("runFlDisplay() started...");
    fallLaunch.displayMissionParameters();
}

function flLaunch(){
    console.log("flLaunch() started");
    fallLaunch.launchMission();
}