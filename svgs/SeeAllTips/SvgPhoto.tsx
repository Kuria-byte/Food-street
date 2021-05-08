import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgBtnProps} from'app/svgs/SeeAllTips/SvgCamera';

function SvgComponent(props: SvgBtnProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Rect opacity={0.01} width={24} height={24} fill="black" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1818 2H3.81818C2.8141 2 2 2.8141 2 3.81818V20.1818C2 21.1861 2.8141 22 3.81818 22H20.1818C21.1859 22 22 21.1861 22 20.1818V3.81818C22 2.8141 21.1859 2 20.1818 2ZM6.76222 4.3814C8.07722 4.3814 9.14303 5.44767 9.14303 6.76222C9.14303 8.07746 8.07724 9.14303 6.76222 9.14303C5.44719 9.14303 4.3814 8.07748 4.3814 6.76222C4.3814 5.44767 5.44719 4.3814 6.76222 4.3814ZM19.1424 19.6186H4.85757C4.5944 19.6186 4.3814 19.4058 4.3814 19.1431C4.3814 19.045 4.41809 18.9588 4.46834 18.8834L4.46141 18.8783L9.22302 10.7835L9.22997 10.7882C9.31603 10.6613 9.4541 10.5715 9.61921 10.5715C9.81729 10.5715 9.98657 10.6931 10.0582 10.8649L12.5441 14.5924L14.5203 12.6159C14.6068 12.5297 14.7249 12.4762 14.857 12.4762C15.0574 12.4762 15.2271 12.601 15.2978 12.7768L15.2992 12.7759L19.4688 18.7993C19.5177 18.8456 19.5562 18.8997 19.5823 18.9625L19.5846 18.966L19.5832 18.9669C19.6046 19.0211 19.6186 19.0801 19.6186 19.1432C19.6186 19.4058 19.4056 19.6186 19.1424 19.6186Z"
          fill="url(#paint0_linear)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1={22}
            y1={2}
            x2={2}
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

const SvgPhoto = React.memo(SvgComponent);
export default SvgPhoto;
const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});
