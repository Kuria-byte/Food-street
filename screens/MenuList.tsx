import React, {memo, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import MenuItem from'../screens/MenuItem';
import SvgOrderList from'../svgs/Explorer/SvgOrderList';
import SvgOrderList1 from'../svgs/Explorer/SvgOrderList1';
import SvgOrderList2 from'../svgs/Explorer/SvgOrderList2';
import SvgOrderList3 from'../svgs/Explorer/SvgOrderList3';
import SvgOrderList4 from'../svgs/Explorer/SvgOrderList4';
import SvgOrderList5 from'../svgs/Explorer/SvgOrderList5';


const dataListOrder = [
  {
    id: '0',
    name: 'Sausage Gemelli Bolognese',
    rate: 4.5,
    svgName: <SvgOrderList />,
  },
  {
    id: '1',
    name: 'Za’atar Chicken and Couscous',
    rate: 4.5,
    svgName: <SvgOrderList2 />,
  },
  {
    id: '2',
    name: 'Sweet and Smoky Chicken Breasts',
    rate: 4.5,
    svgName: <SvgOrderList3 />,
  },
  {
    id: '3',
    name: 'Mexican Chicken and Rice Bowl',
    rate: 4.5,
    svgName: <SvgOrderList1 />,
  },
  {
    id: '4',
    name: 'Crispy Honey Chicken Cutlets',
    rate: 4.5,
    svgName: <SvgOrderList5 />,
  },
  {
    id: '5',
    name: 'Cheesy Chicken Shepherd’s Pie',
    rate: 4.5,
    svgName: <SvgOrderList4 />,
  },
];

interface PropsOrderList {
//   onShowFilter: any;
//   onShowList: any;
//   onShowCard: any;
//   showList: boolean;
//   noData: boolean;
}

const MenuList = memo((props: PropsOrderList) => {
  const renderItem = useCallback(({item}) => {
    return (
      <MenuItem svgName={item.svgName} rate={item.rate} name={item.name} />
    );
  }, []);

  return (
    <View style={styles.containerSearch}>
   {
    
    <FlatList
    data={dataListOrder}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.list}
  
  />
      }
    </View>
  );
});

export default MenuList;
const styles = StyleSheet.create({
  containerSearch: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  list: {
    paddingBottom: getBottomSpace() + 50,
  },
});
