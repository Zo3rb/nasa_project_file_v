const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchID) {
    return launches.has(launchID);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber += 1;
    launches.set(
        latestFlightNumber, Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customers: ['ZERO to MASTERY', 'NASA'],
            upcoming: true,
            success: true,
        })
    );
}


function abortLaunchWithId(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchWithId
}
