import React, { useState } from 'react';
import { View, Dimensions, Alert } from 'react-native';
import {
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Filled from './Filled';


const SlotWrapper = styled(View)`
  width: ${Dimensions.get('window').width * 0.3};
  height: ${Dimensions.get('window').width * 0.3};
  background-color: grey;
  border: 1px solid #fff;
`;

const SlotIcon = styled(View)`
  background-color: #fff;
  color: #000;
`;

const Slot = ({ index, filled, handleOnPress }) => {
  const [start, setStart] = useState(false);
  const doubleTapRef = React.useRef(null);

  const onTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert(
        'Hint',
        'You either need to press the slot longer to make your move',
      );
    }

    if (event.nativeEvent.state === State.BEGAN) {
      setStart(true);
    }
    if (event.nativeEvent.state === State.END) {
      !filled && handleOnPress(index);
      setStart(false);
    }
  }

  return (
    <LongPressGestureHandler
      onHandlerStateChange={onTap}
      minDurationMs={500}
    >
      <TapGestureHandler onHandlerStateChange={onTap}
        ref={doubleTapRef}
        numberOfTaps={2}
      >
        <SlotWrapper>
          <Filled filled={filled} start={start} />
        </SlotWrapper>
      </TapGestureHandler>
    </LongPressGestureHandler>

  )
}

export default Slot;
