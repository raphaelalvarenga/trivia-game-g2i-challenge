import { Question } from "../classes/question.class";

export interface ScoreComponentPropsInterface {
    questions: Question[];
    score: number;
    isScoreScreenActive: boolean;
    reset: () => void;
}