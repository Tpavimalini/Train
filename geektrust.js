const fs = require("fs")

const filename = process.argv[2]


    /*if (err) throw err
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    */

const vehicleTrain = new VehicleTrain();
class Vehicle {

    constructor(dataInput) {

        this.dataInput = dataInput;
        this.station_after_HYB = {
            "HYB": 0, 
            "NGP": 400, 
            "ITJ": 700, 
            "BPL": 800,
            "AGA": 2500, 
            "NDL": 2700, 
            "PTA": 3800, 
            "NJP": 4200, 
            "GHY": 4700
        }
        this.DeptTrain = [];
        this.deptTrain1 = [];
        this.deptTrain2 = [];
    }
    main(dataInput) {

        var inputLines = dataInput.toString().split("\n")
        inputLines = inputLines.filter(s => s.replace(/\s+/g, '').length !== 0);
        for (let i = 0; i < inputLines.length; i++) {
            if (inputLines) {
                let input = inputLines[i].split(' ')
                switch (input[0]) {
                    case 'TRAIN_A':
                        this.deptTrain1 = vehicleTrain.printTrainA(input)
                        break;
                    case 'TRAIN_B':
                        this.deptTrain2 = vehicleTrain.printTrainB(input)
                        break;

                }
            }
        }
   }
}