export interface QuestionComponentPropsInterface {
    category: string;
    question: string;
    isActive: boolean;
    index: number;
    toggleActive: () => void;
}