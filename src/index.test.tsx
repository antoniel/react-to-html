import React from 'react';
import { fromRNtoHTML } from '.';
import { Text, View } from './fixtures/react-native';
import { sample1 } from './fixtures/rtc-sample1';

describe('fromRNtoHTML', () => {
  it('mapNodeType', () => {
    const some = fromRNtoHTML(
      <View>
        <Text>oi</Text>
      </View>
    );

    expect(some).toMatchInlineSnapshot(`
      "<div>
        <p>
          oi
        </p>
      </div>"
    `);
  });
  it('mapStyleProp', () => {
    const some = fromRNtoHTML(
      <View>
        <Text style={{ color: 'red', backgroundColor: '#00f', fontSize: 32 }}>
          oi
        </Text>
      </View>
    );
    expect(some).toMatchInlineSnapshot(`
      "<div>
        <p
          style=\\"color: red; background-color: #00f; font-size: 32px\\"
        >
          oi
        </p>
      </div>"
    `);
  });
});

describe('fixtures', () => {
  it('Sample One', () => {
    const some = fromRNtoHTML(sample1);
    expect(some).toMatchInlineSnapshot(`
      "<div
        style=\\"flex: 1\\"
      >
        <div
          style=\\"flex: 1\\"
        >
          <div
            style=\\"flex: 1; background-color: rgb(242, 242, 242)\\"
          >
            <div
              style=\\"flex: 1\\"
            >
              <div
                activityState={2}
                gestureResponseDistance={
                  {
                    \\"bottom\\": -1,
                    \\"end\\": -1,
                    \\"start\\": -1,
                    \\"top\\": -1,
                  }
                }
                pointerEvents=\\"box-none\\"
                style=\\"position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px\\"
              >
                <div
                  collapsable={false}
                  style=\\"opacity: 1px\\"
                />
                <div
                  accessibilityElementsHidden={false}
                  closing={false}
                  gestureVelocityImpact={0.3}
                  importantForAccessibility=\\"auto\\"
                  pointerEvents=\\"box-none\\"
                  style=\\"display: flex; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px\\"
                  transitionSpec={
                    {
                      \\"close\\": {
                        \\"animation\\": \\"spring\\",
                        \\"config\\": {
                          \\"damping\\": 500,
                          \\"mass\\": 3,
                          \\"overshootClamping\\": true,
                          \\"restDisplacementThreshold\\": 10,
                          \\"restSpeedThreshold\\": 10,
                          \\"stiffness\\": 1000,
                        },
                      },
                      \\"open\\": {
                        \\"animation\\": \\"spring\\",
                        \\"config\\": {
                          \\"damping\\": 500,
                          \\"mass\\": 3,
                          \\"overshootClamping\\": true,
                          \\"restDisplacementThreshold\\": 10,
                          \\"restSpeedThreshold\\": 10,
                          \\"stiffness\\": 1000,
                        },
                      },
                    }
                  }
                >
                  <div
                    collapsable={false}
                    nativeID=\\"animatedComponent\\"
                    pointerEvents=\\"box-none\\"
                    style=\\"flex: 1; margin-top: 0px\\"
                  >
                    <div
                      collapsable={false}
                      handlerTag={1}
                      handlerType=\\"PanGestureHandler\\"
                      needsOffscreenAlphaCompositing={false}
                      style=\\"flex: 1; transform: translateX(0px) translateX(0px)\\"
                    >
                      <div
                        style=\\"flex: 1; overflow: hidden; background-color: white\\"
                      >
                        <div
                          style=\\"flex: 1; flex-direction: column-reverse\\"
                        >
                          <div
                            style=\\"flex: 1\\"
                          >
                            <div
                              style=\\"background-color: #FFFFFF\\"
                            >
                              <div>
                                <div
                                  bg=\\"#FFFFFF\\"
                                  pb=\\"16px\\"
                                  pt=\\"40px\\"
                                  px=\\"24px\\"
                                  style=\\"background-color: #FFFFFF; padding-bottom: 16px; padding-top: 40px; padding-horizontal: 24px\\"
                                >
                                  <div
                                    flexDirection=\\"row\\"
                                    justifyContent=\\"space-between\\"
                                    style=\\"flex-direction: row; justify-content: space-between\\"
                                  >
                                    <div
                                      flexGrow={1}
                                      style=\\"flex-grow: 1px\\"
                                    >
                                      <div
                                        alignItems=\\"center\\"
                                        flexDirection=\\"row\\"
                                        mb=\\"16px\\"
                                        style=\\"flex-direction: row; align-items: center; margin-bottom: 16px\\"
                                      >
                                        <div
                                          fill=\\"#004E87\\"
                                          height={24}
                                          width={24}
                                        />
                                      </div>
                                      <div
                                        flexGrow={1}
                                        style=\\"flex-grow: 1px; width: 100%\\"
                                        w=\\"100%\\"
                                      >
                                        <p
                                          color=\\"brand_primary_darkest\\"
                                          style=\\"color: #004E87; max-width: 100%; font-size: 32px; font-family: Fieldwork-HumBold; letter-spacing: 0px; line-height: 38.4px; text-align: left; font-weight: 400; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px\\"
                                          type=\\"h2\\"
                                        >
                                          Serviços
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  bg=\\"#FFFFFF\\"
                                  pt=\\"24px\\"
                                  px=\\"24px\\"
                                  style=\\"background-color: #FFFFFF; padding-top: 24px; padding-horizontal: 24px\\"
                                >
                                  <p
                                    color=\\"neutral_medium\\"
                                    style=\\"color: #9FA5AF; max-width: 100%; font-size: 12px; font-family: Roboto-Regular; letter-spacing: 0.8px; line-height: 20.8px; text-align: left; font-weight: 400; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px\\"
                                    type=\\"caption\\"
                                  >
                                    Veículo
                                  </p>
                                  <p
                                    style=\\"color: #131416; max-width: 100%; font-size: 18px; font-family: Fieldwork-HumBold; letter-spacing: 0.5px; text-align: left; font-weight: 400; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 22.200000000000003px\\"
                                    type=\\"subtitle2\\"
                                  >
                                    Renegade 1.8 At
                                  </p>
                                  <p
                                    color=\\"neutral_dark\\"
                                    style=\\"color: #454A53; max-width: 100%; font-size: 14px; font-family: Roboto-Regular; letter-spacing: 0.25px; text-align: left; font-weight: 400; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px\\"
                                    type=\\"body2\\"
                                  >
                                    GEL 1G46
                                  </p>
                                  <div
                                    pb=\\"24px\\"
                                    pt=\\"8px\\"
                                    style=\\"padding-bottom: 24px; padding-top: 8px\\"
                                  >
                                    <div
                                      color=\\"neutral_lightest\\"
                                      height=\\"1px\\"
                                      style=\\"height: 1px; width: 100%; background-color: #F5F5F6\\"
                                      width=\\"100%\\"
                                    />
                                  </div>
                                </div>
                                <div
                                  px=\\"24px\\"
                                  style=\\"padding-horizontal: 24px\\"
                                >
                                  <div
                                    mb=\\"24px\\"
                                    style=\\"margin-bottom: 24px\\"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              pointerEvents=\\"box-none\\"
              style=\\"z-index: 1px; height: 44px; position: absolute; top: 0px; left: 0px; right: 0px\\"
            />
          </div>
        </div>
      </div>"
    `);
  });
});
