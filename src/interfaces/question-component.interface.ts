export interface QuestionComponentPropsInterface {
    category: string;
    question: string;
    isActive: boolean;
    toggleActive: () => void;
}