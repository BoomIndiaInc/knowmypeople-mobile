export interface Page {
    id: string;
    title: string;
    url: any;
    direct?: string;
    icon?: string;
    active?: boolean;
    authorities?: string[];
}
