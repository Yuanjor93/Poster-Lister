import { MovieData } from './movieData';

export interface AjaxData {
    Search: [{
        Title: string;
        Year: string;
        ImdbID: string;
        Type: string;
        Poster: string;
    }];
    totalResults: string;
    Response: boolean;
}
