import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {StyleSheet, TouchableOpacity} from 'react-native';

export interface SvgBtnProps {
  onPress: () => void;
}

function SvgComponent(props: SvgBtnProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Rect opacity={0.01} width={24} height={24} fill="black" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 10.3934C12.9917 10.3934 13.8396 10.7453 14.5437 11.4489C15.2479 12.1525 15.6 12.9997 15.6 13.9906C15.6 14.9815 15.2479 15.8288 14.5437 16.5324C13.8396 17.236 12.9917 17.5878 12 17.5878C11.0083 17.5878 10.1604 17.236 9.45625 16.5324C8.75208 15.8288 8.4 14.9815 8.4 13.9906C8.4 12.9997 8.75208 12.1525 9.45625 11.4489C10.1604 10.7453 11.0083 10.3934 12 10.3934ZM20.8 5.1975C21.6833 5.1975 22.4375 5.50976 23.0625 6.13427C23.6875 6.75878 24 7.51236 24 8.395V19.5863C24 20.4689 23.6875 21.2225 23.0625 21.847C22.4375 22.4715 21.6833 22.7838 20.8 22.7838H3.2C2.31667 22.7838 1.5625 22.4715 0.9375 21.847C0.3125 21.2225 1.45833e-08 20.4689 0 19.5863V8.395C0 7.51236 0.3125 6.75878 0.9375 6.13427C1.5625 5.50976 2.31667 5.1975 3.2 5.1975H6L6.6375 3.49883C6.79583 3.09081 7.08542 2.73901 7.50625 2.4434C7.92708 2.1478 8.35833 2 8.8 2H15.2C15.6417 2 16.0729 2.1478 16.4937 2.4434C16.9146 2.73901 17.2042 3.09081 17.3625 3.49883L18 5.1975H20.8ZM12 19.5863C13.5417 19.5863 14.8604 19.0388 15.9562 17.9438C17.0521 16.8488 17.6 15.5311 17.6 13.9906C17.6 12.4502 17.0521 11.1324 15.9562 10.0375C14.8604 8.94249 13.5417 8.395 12 8.395C10.4583 8.395 9.13958 8.94249 8.04375 10.0375C6.94792 11.1324 6.4 12.4502 6.4 13.9906C6.4 15.5311 6.94792 16.8488 8.04375 17.9438C9.13958 19.0388 10.4583 19.5863 12 19.5863Z"
          fill="url(#paint0_linear)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1={24}
            y1={2}
            x2={0}
            y2={2}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#82D84E" />
            <Stop offset={1} stopColor="#0EAD69" />
          </LinearGradient>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
}

const SvgCamera = React.memo(SvgComponent);
export default SvgCamera;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});
