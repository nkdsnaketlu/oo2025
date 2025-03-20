export function averageSpeed(km1Speed: number, km2Speed: number):number {
    //time for the first km
    const timeFor1Km = 1/km1Speed;
    //time for the second km
    const timeFor2Km = 1/km2Speed;

    //total time for both kms
    const totalTime = timeFor1Km + timeFor2Km;

    //avg speed for both kms
    const averageSpeed = 2/totalTime;
    return averageSpeed;
}