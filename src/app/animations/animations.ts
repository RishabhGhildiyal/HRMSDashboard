import { animate, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [

  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('400ms ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ transform: 'translateY(-100%)' })),
  ]),

]);
