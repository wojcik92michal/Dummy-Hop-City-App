# How to install?
1. Install Node.js (https://nodejs.org/en/)
2. Run `npm install`
3. Run any of the scripts (see section below)

# How to run proper actions?
Run scripts listed below proper params (e.g. `npm run login -- --login=dummy@dummy.com --password=dummy`):

* Login:
`npm run login -- --login=yourLogin --password=yourPassword`
* Check vehicle state:
`npm run vehicle-state -- --token=token --vehicleId=vehicleId`
* Make reservation:
`npm run make-reservation -- --token=token --vehicleId=vehicleId`
* End ride:
`npm run end-ride -- --token=token --vehicleId=vehicleId --rideId=rideId`
* Cancel reservation:
`npm run cancel-reservation -- --token=token --vehicleId=vehicleId --rideId=rideId`
* Start or resume paused vehicle (engine):
`npm run start-engine -- --token=token --vehicleId=vehicleId --rideId=rideId`
* Pause ride:
`npm run pause-ride -- --token=token --vehicleId=vehicleId --rideId=rideId`