export class Exercise {
    name: string;
    musclegroup: string;
    weight: number;
    sets: number;
    reps: number;

    constructor(name: string, musclegroup: string, weight: number, sets:number, reps: number) {
        this.name = name;
        this.musclegroup = musclegroup;
        this.weight = weight;
        this.sets = sets;
        this.reps = reps;
    }

}

export class WorkoutTracker {
    exerciseList: Exercise[] = [];
    mainFocus:string;
    date:string;

    constructor (mainFocus:string, date:string){
        this.exerciseList = [];
        this.mainFocus = mainFocus;
        this.date = date;
    }

    addExercise(exersice:Exercise) {
        this.exerciseList.push(exersice);
    }

    removeExercise(name: string) {
        this.exerciseList = this.exerciseList.filter(ex => ex.name !== name);
    }

    getTotalReps(): number {
        return this.exerciseList.reduce((total, ex) => total + ex.reps*ex.sets, 0);
    }

    compareResult(currExercise:Exercise){
        //training volume sets*reps*weight
    const prevExercise = this.exerciseList.find(ex => ex.name === currExercise.name);

    if(!prevExercise){
        return "does not have exercise in previous workout";
    } else {
            let currTrainingVolume = currExercise.sets*currExercise.reps*currExercise.weight;
            let prevTrainingVolume = prevExercise.sets*prevExercise.reps*prevExercise.weight;
            
            let currStats =  `\n current stats: \n kg: ${currExercise.weight} \n sets: ${currExercise.sets} \n reps: ${currExercise.reps} \n `;
            let prevSats = `\n previous stats: \n kg: ${prevExercise.weight} \n sets: ${prevExercise.sets} \n reps: ${prevExercise.reps}`;
            if (currTrainingVolume > prevTrainingVolume){
                return `${currExercise.name} workload has increased by ${currTrainingVolume -  prevTrainingVolume} ${currStats} ${prevSats}`;
            } else if (currTrainingVolume < prevTrainingVolume) {
                return `${currExercise.name} workload has decreased by ${prevTrainingVolume - currTrainingVolume} ${currStats} ${prevSats}`
            } else {
                return `${currExercise.name} workload stays the same ${currStats} ${prevSats}`;
            }
        }
    }
}

let chest3 = new Exercise('incline bench press', 'chest', 30, 3, 7);
let chest1 = new Exercise('incline bench press', 'chest', 20, 3, 8);
let chest2 = new Exercise('machine chest fly', 'chest', 20, 3, 8);
let biceps = new Exercise('cable hammer curl', 'biceps', 30, 2, 12);
let forearms = new Exercise('forearms press machine', 'forearms', 27.5, 2, 20);

let upperbodyDay = new WorkoutTracker('upperbody', '01-04-2025');

upperbodyDay.addExercise(chest1);
upperbodyDay.addExercise(chest2);
upperbodyDay.addExercise(biceps);
upperbodyDay.addExercise(forearms);

console.log(upperbodyDay);

console.log(upperbodyDay.compareResult(chest3));