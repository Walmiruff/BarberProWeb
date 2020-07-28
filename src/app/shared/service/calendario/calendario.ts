import { EventColor, EventAction } from 'calendar-utils';

export interface ICalendario {
    id?: string;
    fk: string | number;
    start: Date;
    end?: Date;
    title: string;
    color?: EventColor;
    actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    userId: string;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;
}
