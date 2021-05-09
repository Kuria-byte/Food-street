import React from 'react';
import { StyleSheet, View } from 'react-native';
import StarIcon from '../components/Stars';
interface InRateProps {
  rate: number;
}
const Rating = (props: InRateProps) => {
  return (
    <View style={styles.container}>
      <StarIcon fillFull={props.rate >= 1} fillHalf={props.rate >= 0.5} />
      <StarIcon fillFull={props.rate >= 2} fillHalf={props.rate >= 1.5} />
      <StarIcon fillFull={props.rate >= 3} fillHalf={props.rate >= 2.5} />
      <StarIcon fillFull={props.rate >= 4} fillHalf={props.rate >= 3.5} />
      <StarIcon fillFull={props.rate >= 5} fillHalf={props.rate >= 4.5} />
      
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: { flexDirection: 'row' , },
});
