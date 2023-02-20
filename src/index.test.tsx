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
                        style=\\"0: [object Object]px; 1: [object Object]px; flex: 1; overflow: hidden\\"
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
                                  className=\\"sc-bczRLJ diulGd\\"
                                  pb=\\"16px\\"
                                  pt=\\"40px\\"
                                  px=\\"24px\\"
                                >
                                  <div
                                    className=\\"sc-bczRLJ kKYxQH\\"
                                    flexDirection=\\"row\\"
                                    justifyContent=\\"space-between\\"
                                  >
                                    <div
                                      className=\\"sc-bczRLJ bcHLDf\\"
                                      flexGrow={1}
                                    >
                                      <div
                                        alignItems=\\"center\\"
                                        className=\\"sc-bczRLJ cdKnJO\\"
                                        flexDirection=\\"row\\"
                                        mb=\\"16px\\"
                                      >
                                        <div
                                          fill=\\"#004E87\\"
                                          height={24}
                                          width={24}
                                        />
                                      </div>
                                      <div
                                        className=\\"sc-bczRLJ fFDfYY\\"
                                        flexGrow={1}
                                        w=\\"100%\\"
                                      >
                                        <p
                                          className=\\"sc-gsnTZi cNeZGI\\"
                                          color=\\"brand_primary_darkest\\"
                                          type=\\"h2\\"
                                        >
                                          Services
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  bg=\\"#FFFFFF\\"
                                  className=\\"sc-bczRLJ iSdUlB\\"
                                  pt=\\"24px\\"
                                  px=\\"24px\\"
                                >
                                  <p
                                    className=\\"sc-gsnTZi zIiGn\\"
                                    color=\\"neutral_medium\\"
                                    style=\\"line-height: 20.8px\\"
                                    type=\\"caption\\"
                                  >
                                    Vehicle
                                  </p>
                                  <p
                                    className=\\"sc-gsnTZi gaqqUb\\"
                                    style=\\"line-height: 22.200000000000003px\\"
                                    type=\\"subtitle2\\"
                                  >
                                    Vehicle model
                                  </p>
                                  <p
                                    className=\\"sc-gsnTZi cxsjCY\\"
                                    color=\\"neutral_dark\\"
                                    type=\\"body2\\"
                                  >
                                    GEL xxxx
                                  </p>
                                  <div
                                    className=\\"sc-bczRLJ brFAmV\\"
                                    pb=\\"24px\\"
                                    pt=\\"8px\\"
                                  >
                                    <div
                                      className=\\"sc-ksZaOG gbXoHh\\"
                                      color=\\"neutral_lightest\\"
                                      height=\\"1px\\"
                                      width=\\"100%\\"
                                    />
                                  </div>
                                </div>
                                <div
                                  className=\\"sc-bczRLJ jWRABx\\"
                                  px=\\"24px\\"
                                >
                                  <div
                                    className=\\"sc-bczRLJ kBQmvj\\"
                                    mb=\\"24px\\"
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
