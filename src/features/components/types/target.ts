export interface TargetType {
	id: number;
	userId: number;
	startDate: string;
	endDate: string;
	goal: string;
	subGoal: SubGoalType[];
	routine: RoutineType[];
	penalty: string;
	achievementDate: {[key: string]: number;}
	achievementPer: number;
	successVote: number;
	failureVote: number;
	voteTotal: number;
	url: string;
}

interface TargetBasicType {
	id: number;
	value: string;
};

interface SubGoalType extends TargetBasicType {
    completedDate: string | null;
}


interface RoutineType extends TargetBasicType {}

