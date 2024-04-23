export interface PageEntry {
    id: number;
    title: string;
    subtitle?: string;
    card_color_light?: string;
    card_color_dark?: string;
    logo_url?: string;
    banner_url?: string;
}

export interface Page {
    id: number;
    title: string;
    subtitle?: string;
    type: string;
    content: string;
}