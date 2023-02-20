// React Test Component
export const sample1 = {
  type: 'View' as const,
  props: { style: { flex: 1 } },
  children: [
    {
      type: 'RNCSafeAreaProvider',
      props: { style: [{ flex: 1 }, null] },
      children: [
        {
          type: 'View',
          props: {
            style: [{ flex: 1, backgroundColor: 'rgb(242, 242, 242)' }, null],
          },
          children: [
            {
              type: 'RNSScreenContainer',
              props: { style: { flex: 1 } },
              children: [
                {
                  type: 'RNSScreen',
                  props: {
                    pointerEvents: 'box-none',
                    activityState: 2,
                    gestureResponseDistance: {
                      start: -1,
                      end: -1,
                      top: -1,
                      bottom: -1,
                    },
                    style: {
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                  children: [
                    {
                      type: 'View',
                      props: { collapsable: false, style: { opacity: 1 } },
                      children: null,
                    },
                    {
                      type: 'View',
                      props: {
                        pointerEvents: 'box-none',
                        closing: false,
                        gestureVelocityImpact: 0.3,
                        transitionSpec: {
                          open: {
                            animation: 'spring',
                            config: {
                              stiffness: 1000,
                              damping: 500,
                              mass: 3,
                              overshootClamping: true,
                              restDisplacementThreshold: 10,
                              restSpeedThreshold: 10,
                            },
                          },
                          close: {
                            animation: 'spring',
                            config: {
                              stiffness: 1000,
                              damping: 500,
                              mass: 3,
                              overshootClamping: true,
                              restDisplacementThreshold: 10,
                              restSpeedThreshold: 10,
                            },
                          },
                        },
                        accessibilityElementsHidden: false,
                        importantForAccessibility: 'auto',
                        style: [
                          { display: 'flex' },
                          {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                          },
                        ],
                      },
                      children: [
                        {
                          type: 'View',
                          props: {
                            pointerEvents: 'box-none',
                            nativeID: 'animatedComponent',
                            collapsable: false,
                            style: { flex: 1, marginTop: 0 },
                          },
                          children: [
                            {
                              type: 'View',
                              props: {
                                needsOffscreenAlphaCompositing: false,
                                collapsable: false,
                                handlerType: 'PanGestureHandler',
                                handlerTag: 1,
                                style: {
                                  flex: 1,
                                  transform: [
                                    { translateX: 0 },
                                    { translateX: 0 },
                                  ],
                                },
                              },
                              children: [
                                {
                                  type: 'View',
                                  props: {
                                    style: [
                                      { flex: 1, overflow: 'hidden' },
                                      [
                                        {
                                          backgroundColor: 'rgb(242, 242, 242)',
                                        },
                                        { backgroundColor: 'white' },
                                      ],
                                    ],
                                  },
                                  children: [
                                    {
                                      type: 'View',
                                      props: {
                                        style: {
                                          flex: 1,
                                          flexDirection: 'column-reverse',
                                        },
                                      },
                                      children: [
                                        {
                                          type: 'View',
                                          props: { style: { flex: 1 } },
                                          children: [
                                            {
                                              type: 'RCTScrollView',
                                              props: {
                                                style: {
                                                  backgroundColor: '#FFFFFF',
                                                },
                                              },
                                              children: [
                                                {
                                                  type: 'View',
                                                  props: {},
                                                  children: [
                                                    {
                                                      type: 'View',
                                                      props: {
                                                        px: '24px',
                                                        pb: '16px',
                                                        pt: '40px',
                                                        bg: '#FFFFFF',
                                                        className:
                                                          'sc-bczRLJ diulGd',
                                                      },
                                                      children: [
                                                        {
                                                          type: 'View',
                                                          props: {
                                                            flexDirection:
                                                              'row',
                                                            justifyContent:
                                                              'space-between',
                                                            className:
                                                              'sc-bczRLJ kKYxQH',
                                                          },
                                                          children: [
                                                            {
                                                              type: 'View',
                                                              props: {
                                                                flexGrow: 1,
                                                                className:
                                                                  'sc-bczRLJ bcHLDf',
                                                              },
                                                              children: [
                                                                {
                                                                  type: 'View',
                                                                  props: {
                                                                    mb: '16px',
                                                                    flexDirection:
                                                                      'row',
                                                                    alignItems:
                                                                      'center',
                                                                    className:
                                                                      'sc-bczRLJ cdKnJO',
                                                                  },
                                                                  children: [
                                                                    {
                                                                      type:
                                                                        'test-file-stub',
                                                                      props: {
                                                                        width: 24,
                                                                        height: 24,
                                                                        fill:
                                                                          '#004E87',
                                                                      },
                                                                      children: null,
                                                                    },
                                                                  ],
                                                                },
                                                                {
                                                                  type: 'View',
                                                                  props: {
                                                                    flexGrow: 1,
                                                                    w: '100%',
                                                                    className:
                                                                      'sc-bczRLJ fFDfYY',
                                                                  },
                                                                  children: [
                                                                    {
                                                                      type:
                                                                        'Text',
                                                                      props: {
                                                                        type:
                                                                          'h2',
                                                                        color:
                                                                          'brand_primary_darkest',
                                                                        className:
                                                                          'sc-gsnTZi cNeZGI',
                                                                      },
                                                                      children: [
                                                                        'Services',
                                                                      ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      type: 'View',
                                                      props: {
                                                        bg: '#FFFFFF',
                                                        px: '24px',
                                                        pt: '24px',
                                                        className:
                                                          'sc-bczRLJ iSdUlB',
                                                      },
                                                      children: [
                                                        {
                                                          type: 'Text',
                                                          props: {
                                                            type: 'caption',
                                                            color:
                                                              'neutral_medium',
                                                            style: {
                                                              lineHeight: 20.8,
                                                            },
                                                            className:
                                                              'sc-gsnTZi zIiGn',
                                                          },
                                                          children: ['Vehicle'],
                                                        },
                                                        {
                                                          type: 'Text',
                                                          props: {
                                                            type: 'subtitle2',
                                                            style: {
                                                              lineHeight: 22.200000000000003,
                                                            },
                                                            className:
                                                              'sc-gsnTZi gaqqUb',
                                                          },
                                                          children: [
                                                            'Vehicle model',
                                                          ],
                                                        },
                                                        {
                                                          type: 'Text',
                                                          props: {
                                                            type: 'body2',
                                                            color:
                                                              'neutral_dark',
                                                            className:
                                                              'sc-gsnTZi cxsjCY',
                                                          },
                                                          children: [
                                                            'GEL xxxx',
                                                          ],
                                                        },
                                                        {
                                                          type: 'View',
                                                          props: {
                                                            pt: '8px',
                                                            pb: '24px',
                                                            className:
                                                              'sc-bczRLJ brFAmV',
                                                          },
                                                          children: [
                                                            {
                                                              type: 'View',
                                                              props: {
                                                                height: '1px',
                                                                color:
                                                                  'neutral_lightest',
                                                                width: '100%',
                                                                className:
                                                                  'sc-ksZaOG gbXoHh',
                                                              },
                                                              children: null,
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      type: 'View',
                                                      props: {
                                                        px: '24px',
                                                        className:
                                                          'sc-bczRLJ jWRABx',
                                                      },
                                                      children: [
                                                        {
                                                          type: 'View',
                                                          props: {
                                                            mb: '24px',
                                                            className:
                                                              'sc-bczRLJ kBQmvj',
                                                          },
                                                          children: null,
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'View',
              props: {
                pointerEvents: 'box-none',
                style: {
                  zIndex: 1,
                  height: 44,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                },
              },
              children: null,
            },
          ],
        },
      ],
    },
  ],
};
