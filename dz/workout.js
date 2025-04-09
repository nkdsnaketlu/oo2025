"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutTracker = exports.Exercise = void 0;
var Exercise = /** @class */ (function () {
    function Exercise(name, musclegroup, weight, sets, reps) {
        this.name = name;
        this.musclegroup = musclegroup;
        this.weight = weight;
        this.sets = sets;
        this.reps = reps;
    }
    return Exercise;
}());
exports.Exercise = Exercise;
var WorkoutTracker = /** @class */ (function () {
    function WorkoutTracker(mainFocus, date) {
        this.exerciseList = [];
        this.exerciseList = [];
        this.mainFocus = mainFocus;
        this.date = date;
    }
    WorkoutTracker.prototype.addExercise = function (exersice) {
        this.exerciseList.push(exersice);
    };
    WorkoutTracker.prototype.removeExercise = function (name) {
        this.exerciseList = this.exerciseList.filter(function (ex) { return ex.name !== name; });
    };
    WorkoutTracker.prototype.getTotalReps = function () {
        return this.exerciseList.reduce(function (total, ex) { return total + ex.reps * ex.sets; }, 0);
    };
    WorkoutTracker.prototype.compareResult = function (currExercise) {
        //training volume sets*reps*weight
        var prevExercise = this.exerciseList.find(function (ex) { return ex.name === currExercise.name; });
        if (!prevExercise) {
            return "does not have exercise in previous workout";
        }
        else {
            var currTrainingVolume = currExercise.sets * currExercise.reps * currExercise.weight;
            var prevTrainingVolume = prevExercise.sets * prevExercise.reps * prevExercise.weight;
            var currStats = "\n current stats: \n kg: ".concat(currExercise.weight, " \n sets: ").concat(currExercise.sets, " \n reps: ").concat(currExercise.reps, " \n ");
            var prevSats = "\n previous stats: \n kg: ".concat(prevExercise.weight, " \n sets: ").concat(prevExercise.sets, " \n reps: ").concat(prevExercise.reps);
            if (currTrainingVolume > prevTrainingVolume) {
                return "".concat(currExercise.name, " workload has increased by ").concat(currTrainingVolume - prevTrainingVolume, " ").concat(currStats, " ").concat(prevSats);
            }
            else if (currTrainingVolume < prevTrainingVolume) {
                return "".concat(currExercise.name, " workload has decreased by ").concat(prevTrainingVolume - currTrainingVolume, " ").concat(currStats, " ").concat(prevSats);
            }
            else {
                return "".concat(currExercise.name, " workload stays the same ").concat(currStats, " ").concat(prevSats);
            }
        }
    };
    return WorkoutTracker;
}());
exports.WorkoutTracker = WorkoutTracker;
var chest3 = new Exercise('incline bench press', 'chest', 30, 3, 7);
var chest1 = new Exercise('incline bench press', 'chest', 20, 3, 8);
var chest2 = new Exercise('machine chest fly', 'chest', 20, 3, 8);
var biceps = new Exercise('cable hammer curl', 'biceps', 30, 2, 12);
var forearms = new Exercise('forearms press machine', 'forearms', 27.5, 2, 20);
var upperbodyDay = new WorkoutTracker('upperbody', '01-04-2025');
upperbodyDay.addExercise(chest1);
upperbodyDay.addExercise(chest2);
upperbodyDay.addExercise(biceps);
upperbodyDay.addExercise(forearms);
console.log(upperbodyDay);
console.log(upperbodyDay.compareResult(chest3));
