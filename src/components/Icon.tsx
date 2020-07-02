/**
 * Custom SVG Icon Component
 *
 * @summary custom svg icon component
 * @author Christian Juth
 */

import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Polygon, G } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Icon({
  size = 32,
  name = 'spacer',
  color = '#fff',
  onPress,
  focused = true,
  style,
  testID
}: {
  size?: number,
  name?: string,
  color?: string,
  onPress?: any,
  focused?: boolean,
  style?: any,
  testID?: string
}) {

  const scale = size/100;
  const icon = icons[name];

  if(!icon) return null;

  // Will only wrap the icon in a
  // TouchableOpacity if onPress is
  // defined. THis is to keep the
  // virtual DOM from getting cluttered
  function makeTouchable(node: JSX.Element) {
    if(onPress) return <TouchableOpacity testID={testID} onPress={onPress}>{node}</TouchableOpacity>;
    else return <View testID={testID}>{node}</View>;
  }

  return makeTouchable(
    <Svg
      height={size} width={size}
      style={[{opacity: focused ? 1 : 0.5}, style]}
    >
      <G transform={`scale(${scale} ${scale})`}>
        {icon.type === 'path' ? (
          <Path d={icon.data} fill={color} stroke="none"/>
        ) : (
          <Polygon points={icon.data} fill={color} stroke="none"/>
        )}
      </G>
    </Svg>
  );
}

export default Icon;

const icons: any = {
  'back-circle': {
    data: 'M50.5,88 C29.7893219,88 13,71.2106781 13,50.5 C13,29.7893219 29.7893219,13 50.5,13 C71.2106781,13 88,29.7893219 88,50.5 C88,71.2106781 71.2106781,88 50.5,88 Z M59.935,67.065 L43.905,51 L59.935,34.935 L55,30 L34,51 L55,72 L59.935,67.065 Z',
    type: 'path'
  },
  'back': {
    data: '59.935 67.065 43.905 51 59.935 34.935 55 30 34 51 55 72',
    type: 'polygon'
  },
  'share': {
    data: 'M41.4473544,36 L41.4473544,40.38868 L41.4473544,40.38868 C36.505867,40.38868 32.5,44.394547 32.5,49.3360344 L32.5,66.391762 C32.5,71.3623247 36.5294373,75.391762 41.5,75.391762 L58.5,75.391762 C63.4705627,75.391762 67.5,71.3623247 67.5,66.391762 L67.5,66.391762 L67.5,49.3791474 C67.5,44.4138493 63.4748306,40.38868 58.5095326,40.38868 L58.5095326,36 L59,36 L59,36 C66.1797017,36 72,41.8202983 72,49 L72,67 C72,74.1797017 66.1797017,80 59,80 L41,80 C33.8202983,80 28,74.1797017 28,67 L28,49 C28,41.8202983 33.8202983,36 41,36 L41,36 L41.4473544,36 Z M37,29.2051452 L49.9697266,17 L62.9394531,29.2051452 L60.0503228,32.0837662 L52.4264385,25.1034179 L52.4264385,51.3855592 L47.4825063,51.3855592 L47.4825063,25.1034179 L39.8432788,32.0684229 L37,29.2051452 Z',
    type: 'path'
  },
  'typography': {
    data: 'M22,28 L22,37 L37,37 L37,73 L46,73 L46,37 L61,37 L61,28 L22,28 Z M79,43 L52,43 L52,52 L61,52 L61,73 L70,73 L70,52 L79,52 L79,43 Z',
    type: 'path'
  },
  'home': {
    data: '44.5294118 75 44.5294118 57.3529412 56.2941176 57.3529412 56.2941176 75 71 75 71 51.4705882 79.8235294 51.4705882 50.4117647 25 21 51.4705882 29.8235294 51.4705882 29.8235294 75',
    type: 'polygon'
  },
  'bookmark-stack': {
    data: 'M58.4597701,32.2241379 L33.0766284,32.2241379 C30.2844828,32.2241379 28.0253831,34.5086207 28.0253831,37.3007663 L28.0024153,74.0492627 C28.0253831,76.7596097 30.9809617,76.6324037 32.9106127,75.8092448 L45.7681992,70.2988506 L58.4597701,75.8092448 C60.7457962,76.865296 63.5363985,76.7081274 63.5363985,74.0492627 L63.5363985,37.3007663 C63.5363985,34.5086207 61.2519157,32.2241379 58.4597701,32.2241379 Z M58.4597701,70.2988506 L45.7681992,64.7653257 L33.0766284,70.2988506 L33.0766284,37.3007663 L58.4597701,37.3007663 L58.4597701,70.2988506 Z M39.1120121,29.4653404 C34.955469,29.4653404 34.9698625,24.3999996 39.1120121,24.3999996 L67.0660959,24.3999996 C69.5321026,24.3999996 71.3955468,25.5562249 71.3955468,28.6938663 L71.3955468,67.6095823 C71.3955468,71.5353921 66.4007184,71.3394311 66.4007184,67.6095823 L66.4007184,32.0988331 C66.4007184,29.7271506 65.6956658,29.4653404 64.0936324,29.4653404 L39.1120121,29.4653404 Z',
    type: 'path'
  },
  'calendar': {
    data: 'M67.9090909,29.5454545 L65.6363636,29.5454545 L65.6363636,25 L61.0909091,25 L61.0909091,29.5454545 L38.3636364,29.5454545 L38.3636364,25 L33.8181818,25 L33.8181818,29.5454545 L31.5454545,29.5454545 C29.0454545,29.5454545 27,31.5909091 27,34.0909091 L27,70.4545455 C27,72.9545455 29.0454545,75 31.5454545,75 L67.9090909,75 C70.4090909,75 72.4545455,72.9545455 72.4545455,70.4545455 L72.4545455,34.0909091 C72.4545455,31.5909091 70.4090909,29.5454545 67.9090909,29.5454545 Z M64.1599998,69.9599991 L35.2999992,69.9599991 L35.2999992,69.9599991 C33.643145,69.9599991 32.2999992,68.6168533 32.2999992,66.9599991 L32.2999992,41.4099998 L67.1599998,41.4099998 L67.1599998,66.9599991 L67.1599998,66.9599991 C67.1599998,68.6168533 65.8168541,69.9599991 64.1599998,69.9599991 Z',
    type: 'path'
  },
  'settings': {
    data: 'M69.7888574,50 C69.7888574,50.8542857 69.7145717,51.7085714 69.6031431,52.5257143 L75.100286,56.8342857 C75.5831431,57.2428571 75.7317145,57.9485714 75.3974288,58.5057143 L70.1974288,67.4942857 C69.8631431,68.0514286 69.1945717,68.2742857 68.600286,68.0514286 L62.1374288,65.4514286 C60.800286,66.4914286 59.3145717,67.3457143 57.7545717,68.0142857 L56.7888574,74.8857143 C56.6774288,75.5171429 56.120286,76 55.4888574,76 L45.0888574,76 C44.4574288,76 43.900286,75.5171429 43.7888574,74.9228571 L42.8231431,68.0514286 C41.2260003,67.3828571 39.7774288,66.5285714 38.440286,65.4885714 L31.9774288,68.0885714 C31.3831431,68.3114286 30.7145717,68.0885714 30.380286,67.5314286 L25.180286,58.5428571 C24.8460003,57.9857143 24.9945717,57.28 25.4774288,56.8714286 L30.9745717,52.5628571 C30.8631431,51.7085714 30.7888574,50.8542857 30.7888574,50 C30.7888574,49.1457143 30.8631431,48.2914286 30.9745717,47.4742857 L25.4774288,43.1657143 C24.9945717,42.7571429 24.8460003,42.0514286 25.180286,41.4942857 L30.380286,32.5057143 C30.7145717,31.9485714 31.3831431,31.7257143 31.9774288,31.9485714 L38.440286,34.5485714 C39.7774288,33.5085714 41.2631431,32.6542857 42.8231431,31.9857143 L43.7888574,25.1142857 C43.900286,24.4828571 44.4574288,24 45.0888574,24 L55.4888574,24 C56.120286,24 56.6774288,24.4828571 56.7888574,25.0771429 L57.7545717,31.9485714 C59.3517145,32.6171429 60.800286,33.4714286 62.1374288,34.5114286 L68.600286,31.9114286 C69.1945717,31.6885714 69.8631431,31.9114286 70.1974288,32.4685714 L75.3974288,41.4571429 C75.7317145,42.0142857 75.5831431,42.72 75.100286,43.1285714 L69.6031431,47.4371429 C69.7145717,48.2914286 69.7888574,49.1457143 69.7888574,50 Z M50.249999,60.3999996 C56.0213746,60.3999996 60.6999989,55.7213753 60.6999989,49.9499998 C60.6999989,44.1786243 56.0213746,39.5 50.249999,39.5 C44.4786235,39.5 39.7999992,44.1786243 39.7999992,49.9499998 C39.7999992,55.7213753 44.4786235,60.3999996 50.249999,60.3999996 Z',
    type: 'path'
  },
  'bookmark-o': {
    data: 'M64.3306901,25 L36.5529124,25 C33.4973568,25 31.0251346,27.5 31.0251346,30.5555556 L31,70.7708912 C31.0251346,73.7369313 34.2595413,73.5977248 36.3712348,72.6969094 L50.4418013,66.6666667 L64.3306901,72.6969094 C66.8323791,73.852588 69.8862457,73.6805923 69.8862457,70.7708912 L69.8862457,30.5555556 C69.8862457,27.5 67.3862457,25 64.3306901,25 Z M64.3306901,66.6666667 L50.4418013,60.6111111 L36.5529124,66.6666667 L36.5529124,30.5555556 L64.3306901,30.5555556 L64.3306901,66.6666667 Z',
    type: 'path'
  },
  'bookmark': {
    data: 'M64.3306901,25 L36.5529124,25 C33.4973568,25 31.0251346,27.5 31.0251346,30.5555556 L31,70.7708912 C31.0251346,73.7369313 34.2595413,73.5977248 36.3712348,72.6969094 L50.4418013,66.6666667 L64.3306901,72.6969094 C66.8323791,73.852588 69.8862457,73.6805923 69.8862457,70.7708912 L69.8862457,30.5555556 C69.8862457,27.5 67.3862457,25 64.3306901,25 Z',
    type: 'path'
  },
  'search': {
    data: 'M62.3081761,57.591195 L59.8238994,57.591195 L58.9433962,56.7421384 C62.0251572,53.1572327 63.8805031,48.5031447 63.8805031,43.4402516 C63.8805031,32.1509434 54.7295597,23 43.4402516,23 C32.1509434,23 23,32.1509434 23,43.4402516 C23,54.7295597 32.1509434,63.8805031 43.4402516,63.8805031 C48.5031447,63.8805031 53.1572327,62.0251572 56.7421384,58.9433962 L57.591195,59.8238994 L57.591195,62.3081761 L73.3144654,78 L78,73.3144654 L62.3081761,57.591195 Z M43.4402516,57.591195 C35.6100629,57.591195 29.2893082,51.2704403 29.2893082,43.4402516 C29.2893082,35.6100629 35.6100629,29.2893082 43.4402516,29.2893082 C51.2704403,29.2893082 57.591195,35.6100629 57.591195,43.4402516 C57.591195,51.2704403 51.2704403,57.591195 43.4402516,57.591195 Z',
    type: 'path'
  },
  'close': {
    data: '70 34.0285714 65.9714286 30 50 45.9714286 34.0285714 30 30 34.0285714 45.9714286 50 30 65.9714286 34.0285714 70 50 54.0285714 65.9714286 70 70 65.9714286 54.0285714 50',
    type: 'polygon'
  },
  'refresh': {
    data: 'M64.1159946,35.8777557 C60.4892943,32.2510554 55.5119608,30 49.9843693,30 C38.9291863,30 30,38.954198 30,50.009381 C30,61.064564 38.9291863,70.018762 49.9843693,70.018762 C59.3137432,70.018762 67.09239,63.6407718 69.3184337,55.0117263 L64.1159946,55.0117263 C62.0650331,60.8394585 56.5124298,65.0164168 49.9843693,65.0164168 C41.7054879,65.0164168 34.9773335,58.2882624 34.9773335,50.009381 C34.9773335,41.7304996 41.7054879,35.0023453 49.9843693,35.0023453 C54.1363158,35.0023453 57.8380513,36.7281544 60.5393178,39.4544325 L52.4855419,47.5082084 L69.9937503,47.5082084 L69.9937503,30 L64.1159946,35.8777557 Z',
    type: 'path'
  },
  'menu': {
    data: 'M30,63.6666667 L70,63.6666667 L70,59.2222222 L30,59.2222222 L30,63.6666667 Z M30,52.5555556 L70,52.5555556 L70,48.1111111 L30,48.1111111 L30,52.5555556 Z M30,37 L30,41.4444444 L70,41.4444444 L70,37 L30,37 Z',
    type: 'path'
  },
  'ios-grabber': {
    data: 'M23.470067,54 L76.4708775,54 C82.5214985,54 82.5214985,46 76.4708775,46 L23.470067,46 C17.5099777,46 17.5099777,54 23.470067,54 Z',
    type: 'path'
  },
  'contact': {
    data: 'M68.5,32 L32.5,32 C30.025,32 28.0225,34.025 28.0225,36.5 L28,63.5 C28,65.975 30.025,68 32.5,68 L68.5,68 C70.975,68 73,65.975 73,63.5 L73,36.5 C73,34.025 70.975,32 68.5,32 Z M68.5,41 L50.5,52.25 L32.5,41 L32.5,36.5 L50.5,47.75 L68.5,36.5 L68.5,41 Z',
    type: 'path'
  },
  'about': {
    data: 'M50.5,25 C36.424,25 25,36.424 25,50.5 C25,64.576 36.424,76 50.5,76 C64.576,76 76,64.576 76,50.5 C76,36.424 64.576,25 50.5,25 Z M50.5,32.65 C54.733,32.65 58.15,36.067 58.15,40.3 C58.15,44.533 54.733,47.95 50.5,47.95 C46.267,47.95 42.85,44.533 42.85,40.3 C42.85,36.067 46.267,32.65 50.5,32.65 Z M50.5,68.86 C44.125,68.86 38.4895,65.596 35.2,60.649 C35.2765,55.5745 45.4,52.795 50.5,52.795 C55.5745,52.795 65.7235,55.5745 65.8,60.649 C62.5105,65.596 56.875,68.86 50.5,68.86 Z',
    type: 'path'
  },
  'back-android': {
    data: '71 47.9375 39.814375 47.9375 54.13875 33.613125 50.5 30 30 50.5 50.5 71 54.113125 67.386875 39.814375 53.0625 71 53.0625',
    type: 'polygon'
  },
  'hand': {
    data: 'M71,36.25 L71,65.9090909 C71,70.4090909 67.3181818,74.0909091 62.8181818,74.0909091 L47.8863636,74.0909091 C45.6772727,74.0909091 43.5909091,73.2113636 42.0568182,71.6568182 L26,55.3340909 C26,55.3340909 28.5772727,52.8181818 28.6590909,52.7772727 C29.1090909,52.3886364 29.6613636,52.1840909 30.275,52.1840909 C30.725,52.1840909 31.1340909,52.3068182 31.5022727,52.5113636 C31.5840909,52.5318182 40.3181818,57.5431818 40.3181818,57.5431818 L40.3181818,33.1818182 C40.3181818,31.4840909 41.6886364,30.1136364 43.3863636,30.1136364 C45.0840909,30.1136364 46.4545455,31.4840909 46.4545455,33.1818182 L46.4545455,47.5 L48.5,47.5 L48.5,28.0681818 C48.5,26.3704545 49.8704545,25 51.5681818,25 C53.2659091,25 54.6363636,26.3704545 54.6363636,28.0681818 L54.6363636,47.5 L56.6818182,47.5 L56.6818182,30.1136364 C56.6818182,28.4159091 58.0522727,27.0454545 59.75,27.0454545 C61.4477273,27.0454545 62.8181818,28.4159091 62.8181818,30.1136364 L62.8181818,47.5 L64.8636364,47.5 L64.8636364,36.25 C64.8636364,34.5522727 66.2340909,33.1818182 67.9318182,33.1818182 C69.6295455,33.1818182 71,34.5522727 71,36.25 Z',
    type: 'path'
  },
  'spacer': {
    data: '',
    type: 'polygon'
  },
};