import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInAnimation = [
    trigger('slideIn', [
        state('in', style({
            'opacity': '1', 'transform': 'translateX(0)'
        })),
        state('out', style({
            'opacity': '0', 'transform': 'translateX(-150px)'
        })),
        transition('out => in', [group([
            animate('800ms ease-in', style({
                'opacity': '1', 'transform': 'translateX(0)'
            }))
        ]
        )])
    ]),
    
];