export type SelectData = {
    id: number;
    value: string;
}

export type FormData = {
    name: string;
    email: string;
    city: SelectData | null;
    message: string;
    isAgree: boolean;
    phone: string;
    file: File[];
};