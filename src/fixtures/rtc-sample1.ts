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
                                                        style: [
                                                          {
                                                            backgroundColor:
                                                              '#FFFFFF',
                                                            paddingBottom: 16,
                                                            paddingTop: 40,
                                                            paddingHorizontal: 24,
                                                          },
                                                        ],
                                                      },
                                                      children: [
                                                        {
                                                          type: 'View',
                                                          props: {
                                                            flexDirection:
                                                              'row',
                                                            justifyContent:
                                                              'space-between',
                                                            style: [
                                                              {
                                                                flexDirection:
                                                                  'row',
                                                                justifyContent:
                                                                  'space-between',
                                                              },
                                                            ],
                                                          },
                                                          children: [
                                                            {
                                                              type: 'View',
                                                              props: {
                                                                flexGrow: 1,
                                                                style: [
                                                                  {
                                                                    flexGrow: 1,
                                                                  },
                                                                ],
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
                                                                    style: [
                                                                      {
                                                                        flexDirection:
                                                                          'row',
                                                                        alignItems:
                                                                          'center',
                                                                        marginBottom: 16,
                                                                      },
                                                                    ],
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
                                                                    style: [
                                                                      {
                                                                        flexGrow: 1,
                                                                        width:
                                                                          '100%',
                                                                      },
                                                                    ],
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
                                                                        style: [
                                                                          {
                                                                            color:
                                                                              '#004E87',
                                                                            maxWidth:
                                                                              '100%',
                                                                            fontSize: 32,
                                                                            fontFamily:
                                                                              'Fieldwork-HumBold',
                                                                            letterSpacing: 0,
                                                                            lineHeight: 38.4,
                                                                            textAlign:
                                                                              'left',
                                                                            fontWeight:
                                                                              '400',
                                                                            marginTop: 0,
                                                                            marginRight: 0,
                                                                            marginBottom: 0,
                                                                            marginLeft: 0,
                                                                            paddingTop: 0,
                                                                            paddingRight: 0,
                                                                            paddingBottom: 0,
                                                                            paddingLeft: 0,
                                                                          },
                                                                        ],
                                                                      },
                                                                      children: [
                                                                        'Serviços',
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
                                                        style: [
                                                          {
                                                            backgroundColor:
                                                              '#FFFFFF',
                                                            paddingTop: 24,
                                                            paddingHorizontal: 24,
                                                          },
                                                        ],
                                                      },
                                                      children: [
                                                        {
                                                          type: 'Text',
                                                          props: {
                                                            type: 'caption',
                                                            color:
                                                              'neutral_medium',
                                                            style: [
                                                              {
                                                                color:
                                                                  '#9FA5AF',
                                                                maxWidth:
                                                                  '100%',
                                                                fontSize: 12,
                                                                fontFamily:
                                                                  'Roboto-Regular',
                                                                letterSpacing: 0.8,
                                                                lineHeight: 16,
                                                                textAlign:
                                                                  'left',
                                                                fontWeight:
                                                                  '400',
                                                                marginTop: 0,
                                                                marginRight: 0,
                                                                marginBottom: 0,
                                                                marginLeft: 0,
                                                                paddingTop: 0,
                                                                paddingRight: 0,
                                                                paddingBottom: 0,
                                                                paddingLeft: 0,
                                                              },
                                                              {
                                                                lineHeight: 20.8,
                                                              },
                                                            ],
                                                          },
                                                          children: ['Veículo'],
                                                        },
                                                        {
                                                          type: 'Text',
                                                          props: {
                                                            type: 'subtitle2',
                                                            style: [
                                                              {
                                                                color:
                                                                  '#131416',
                                                                maxWidth:
                                                                  '100%',
                                                                fontSize: 18,
                                                                fontFamily:
                                                                  'Fieldwork-HumBold',
                                                                letterSpacing: 0.5,
                                                                textAlign:
                                                                  'left',
                                                                fontWeight:
                                                                  '400',
                                                                marginTop: 0,
                                                                marginRight: 0,
                                                                marginBottom: 0,
                                                                marginLeft: 0,
                                                                paddingTop: 0,
                                                                paddingRight: 0,
                                                                paddingBottom: 0,
                                                                paddingLeft: 0,
                                                              },
                                                              {
                                                                lineHeight: 22.200000000000003,
                                                              },
                                                            ],
                                                          },
                                                          children: [
                                                            'Renegade 1.8 At',
                                                          ],
                                                        },
                                                        {
                                                          type: 'Text',
                                                          props: {
                                                            type: 'body2',
                                                            color:
                                                              'neutral_dark',
                                                            style: [
                                                              {
                                                                color:
                                                                  '#454A53',
                                                                maxWidth:
                                                                  '100%',
                                                                fontSize: 14,
                                                                fontFamily:
                                                                  'Roboto-Regular',
                                                                letterSpacing: 0.25,
                                                                textAlign:
                                                                  'left',
                                                                fontWeight:
                                                                  '400',
                                                                marginTop: 0,
                                                                marginRight: 0,
                                                                marginBottom: 0,
                                                                marginLeft: 0,
                                                                paddingTop: 0,
                                                                paddingRight: 0,
                                                                paddingBottom: 0,
                                                                paddingLeft: 0,
                                                              },
                                                            ],
                                                          },
                                                          children: [
                                                            'GEL 1G46',
                                                          ],
                                                        },
                                                        {
                                                          type: 'View',
                                                          props: {
                                                            pt: '8px',
                                                            pb: '24px',
                                                            style: [
                                                              {
                                                                paddingBottom: 24,
                                                                paddingTop: 8,
                                                              },
                                                            ],
                                                          },
                                                          children: [
                                                            {
                                                              type: 'View',
                                                              props: {
                                                                height: '1px',
                                                                color:
                                                                  'neutral_lightest',
                                                                width: '100%',
                                                                style: [
                                                                  {
                                                                    height: 1,
                                                                    width:
                                                                      '100%',
                                                                    backgroundColor:
                                                                      '#F5F5F6',
                                                                  },
                                                                ],
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
                                                        style: [
                                                          {
                                                            paddingHorizontal: 24,
                                                          },
                                                        ],
                                                      },
                                                      children: [
                                                        {
                                                          type: 'View',
                                                          props: {
                                                            mb: '24px',
                                                            style: [
                                                              {
                                                                marginBottom: 24,
                                                              },
                                                            ],
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
