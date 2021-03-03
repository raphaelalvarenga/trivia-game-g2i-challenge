export interface QuestionComponentPropsInterface {
    category: string;
    question: string;
    active: boolean;
    toggleActive: () => void;
}