


export class Animation {

    /**
     * Finds a smooth transition between two values, Does not depend on direction.
     * @param levelOne 0 - 255 color channel
     * @param levelTwo 0 - 255 color channel
     * @param desiredSteps number of steps you want to go from one channel to another
     */
    static findSmoothTransition(levelOne: number, levelTwo: number, desiredSteps: number) {

        // First find the largest and smallest levels.
        // Remember: in this function direction doesn't matter
        // Direction will be taken care of by whatever you set the
        // effectFlag to do.
        let highestLevel = Math.max(levelOne, levelTwo);
        let lowestLevel = Math.min(levelOne, levelTwo);

        let commands: any = {};

        // first we need to know what the distance is between these two levels
        const difference = highestLevel - lowestLevel;

        // If the difference is less than the desired number of steps
        // then it's only going to take < one step to get from A to B
        // Since the packet only takes a minimum of 1 for transitions
        // we will just call 1 good enough.
        if (difference <= desiredSteps) {
            commands.downMinimumLevel = lowestLevel;
            commands.upMaximumLevel = highestLevel;
            commands.upIncrement = 1
        } else {
            // Let's see how many steps we need to take to get there.
            const numberOfSteps = Math.trunc(difference / desiredSteps);

            // Determine the remainder of the above operation so we can smooth out the 
            // minimum
            const unsteppedLevels = difference % desiredSteps;

            // Set the up maximum level to the remainderless sum of numberOfSteps * desiredSteps
            // Like the above downMinimumLevel, this removes jank when changing from color to color
            commands.upMaximumLevel = numberOfSteps * desiredSteps;

            // We want to smooth out the transition, so lets set the
            // downMinimumLevel to the smallest number plus the remainder
            // this is to remove color change jank
            commands.downMinimumLevel = lowestLevel + unsteppedLevels;

            // we want our up increment to be the level we should increment
            // for each step taken. This should never be 0;
            commands.upIncrement = numberOfSteps > 0 ? numberOfSteps : 1;
            commands.downDecrement = numberOfSteps > 0 ? numberOfSteps : 1;
        }

        return commands;
    }

    /**
     * Sets movement values for the packet, given two levels
     */
    static setMovementDirection(startLevel: number, endLevel: number, shouldMove: boolean) {
        let commands: any = {};

        commands.upHoldLevel = Math.max(startLevel, endLevel);
        commands.downHoldLevel = Math.min(startLevel, endLevel);

        if (shouldMove) {
            commands.direction = startLevel <= endLevel ? "incDec" : "decInc";
        } else {
            commands.direction = startLevel >= endLevel ? "inc" : "dec";
        }

        return commands;
    }

    static createAnimation(
        startLevel: number,
        endLevel: number,
        upIncrementDelay: number,
        downDecrementDelay: number,
        upHoldDelay: number,
        downHoldDelay: number,
        startDelay: number,
        stepsBetweenColors: number,
        shouldMove: boolean,
        transition: boolean,
    ) {
        const transitionData = Animation.findSmoothTransition(startLevel, endLevel, stepsBetweenColors);
        const directionData = Animation.setMovementDirection(startLevel, endLevel, shouldMove)

        return {
            ...transitionData,
            ...directionData,
            upIncrementDelay,
            downDecrementDelay,
            downHoldDelay,
            upHoldDelay,
            startDelay,
            transition,
        }
    }

    static createAnimationFromObject(data: any) {

        const {
            startLevel,
            endLevel,
            upIncrementDelay,
            downDecrementDelay,
            upHoldDelay,
            downHoldDelay,
            startDelay,
            stepsBetweenColors,
            shouldMove,
            transition,
        } = data;

        console.log("DATA:" + JSON.stringify(data));

        return Animation.createAnimation(
            startLevel,
            endLevel,
            upIncrementDelay,
            downDecrementDelay,
            upHoldDelay,
            downHoldDelay,
            startDelay,
            stepsBetweenColors,
            shouldMove,
            transition,
        );
    }




}