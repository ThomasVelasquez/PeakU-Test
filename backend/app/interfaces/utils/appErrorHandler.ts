export interface AppErrorProps {
    message: string;
    statusCode: number;
}

class AppError extends Error {
    statusCode: number;

    constructor({ message, statusCode }: AppErrorProps) {
        super(message);
        this.statusCode = statusCode;
    }
}

export function appErrorHandler(props: AppErrorProps): AppError {
    return new AppError(props);
}