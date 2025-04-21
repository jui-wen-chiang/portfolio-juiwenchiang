export interface timelineItem {
    title: string;
    subtitle: string;
    year: string;
    month: string;
    country: string;
    location: string;
    cardImage: {
        url: string;
        lable: string;
    },
    activity:any;
    details:any;
}