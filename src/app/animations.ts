import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

export const SlideInAnimation = [
  trigger('slideIn', [
    state(
      'in',
      style({
        opacity: '1',
        transform: 'translateX(0)',
      })
    ),
    state(
      'out',
      style({
        opacity: '0',
        transform: 'translateX(-150px)',
      })
    ),
    transition('out => in', [
      group([
        animate(
          '800ms ease-in',
          style({
            opacity: '1',
            transform: 'translateX(0)',
          })
        ),
      ]),
    ]),
  ]),

  // Trigger animation for children sliding in
  trigger('slideInChild', [
    // Transition from any state to any state
    transition('out => in', [
      // Initially the all children (= labels) are not visible
      query('.label', style({ opacity: 0, transform: 'translateX(-150px)' }), {
        optional: true,
      }),
      // Each child (=label) will appear sequentially with the delay of 500ms
      query(
        '.label',
        stagger('500ms', [
          animate(
            '800ms ease-in',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ]),
        { optional: true }
      ),
    ]),
  ]),

  trigger('slideInReverseChild', [
      transition('out => in', [
        query('div', style({ opacity: 0, transform: 'translateX(150px)' }), {
          optional: true,
        }),
        // Each child appears sequentially with the delay of 75ms
        query(
          'div',
          stagger('75ms', [
            animate(
              '700ms ease-in',
              keyframes([
                style({ opacity: '0', transform: 'translateX(150px)' }),
                style({ opacity: '1', transform: 'translateX(0)' }),
              ])
            )
          ])
        )
      ]),
  ]),

  trigger('slideInUpwards', [
    state(
      'in',
      style({
        opacity: '1',
        transform: 'translateY(0)',
      })
    ),
    state(
      'out',
      style({
        opacity: '0',
        transform: 'translateY(150px)',
      })
    ),
    transition('out => in', [
      group([
        animate(
          '800ms ease-in',
          style({
            opacity: '1',
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
  ]),

  trigger('slideInUpwardsChild', [
    transition('out => in', [
      // Initially the all children are not visible
      query(
        'mat-grid-tile',
        style({ opacity: 0, transform: 'translateY(150px)' }),
        { optional: true }
      ),
      // Each child will appear sequentially with the delay of 500ms
      query(
        'mat-grid-tile',
        stagger('500ms', [
          animate(
            '800ms ease-in',
            keyframes([
              style({ opacity: '0', transform: 'translateY(150px)' }),
              style({ opacity: '1', transform: 'translateY(0)' }),
            ])
          ),
        ])
      ),
    ]),
  ]),
];
