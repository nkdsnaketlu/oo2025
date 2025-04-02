import { Exercise, WorkoutTracker} from "../workout";
 /*name: string, musclegroup: string, weight: number, sets:number, reps: number*/
let emptyTtracker = new WorkoutTracker('a', '01-01-2025');

let chest1 = new Exercise('incline bench press', 'chest', 20, 3, 8);
let chest2 = new Exercise('machine chest fly', 'chest', 20, 3, 8);
let biceps = new Exercise('cable hammer curl', 'biceps', 30, 2, 12);
let forearms = new Exercise('forearms press machine', 'forearms', 27.5, 2, 20);

let upperbodyDay = new WorkoutTracker('upperbody', '01-04-2025');
upperbodyDay.addExercise(chest2);
upperbodyDay.addExercise(biceps);
upperbodyDay.addExercise(forearms);

 test("should initialize with an empty exercise list", () => {
    expect(emptyTtracker.exerciseList).toEqual([]);
});

test("should add an exercise", () => {
    upperbodyDay.addExercise(chest1);
    expect(upperbodyDay.exerciseList.length).toBe(4);
    expect(upperbodyDay.exerciseList[3].name).toBe("incline bench press");
});

test("should remove an exercise", () => {
    upperbodyDay.removeExercise(chest2.name);
    expect(upperbodyDay.exerciseList.length).toBe(3);
});

test("should count total reps", () => {
    expect(upperbodyDay.getTotalReps()).toBe(88);
});
