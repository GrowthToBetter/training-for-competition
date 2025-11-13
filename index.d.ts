interface Task {
    id: string;
    code: string;
}
interface LessonStep {
    Name: string;
    tasks?: Task[];
}
interface EDAutoAnswer {
    trigger: () => Promise<void>;
    reset: () => void;
    hideBox: () => void;
}
declare global {
    interface Window {
        edAutoAnswer?: EDAutoAnswer;
        lesson?: {
            steps: LessonStep[];
        };
        learningArea?: {
            currentTask: Task;
        };
    }
}
export {};
//# sourceMappingURL=index.d.ts.map