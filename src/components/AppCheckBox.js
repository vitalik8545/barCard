import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useDispatch} from 'react-redux';
import {changeStatusFilter} from '../store/reducers/post';

export const AppCheckBox = ({id, title, selected}) => {
  const [state, setState] = useState(selected);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <CheckBox
        leftTextStyle={styles.leftTextStyle}
        onClick={() => {
          setState(!state);
          dispatch(changeStatusFilter(id));
        }}
        isChecked={state}
        checkedImage={
          <Image
            source={require('../res/tick.png')}
            style={styles.selectedIcon}
          />
        }
        unCheckedImage={<Image />}
        leftText={title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedIcon: {
    width: 20,
    height: 20,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  leftTextStyle: {
    fontSize: 15,
    color: '#7E7E7E',
  },
});
