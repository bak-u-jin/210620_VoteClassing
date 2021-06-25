import React from 'react';
import User from '../Router/User';
import {render, fireEvent} from '@testing-library/react-native';
import mockComponent from 'react-native/jest/mockComponent';
import {Alert} from 'react-native';
import JoinBtn from '../Components/Login/JoinBtn';

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {expect, jest} from '@jest/globals';

const mockStore = configureMockStore();
const store = mockStore({});

jest.spyOn(Alert, 'alert');

test('User test', () => {
  const {getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <User store={store}>
        <JoinBtn></JoinBtn>
      </User>
    </Provider>,
  );

  const idInput = getByPlaceholderText('아이디를 입력해주세요');

  fireEvent.changeText(idInput, 'apple');
  fireEvent(getByText('회원가입'), 'pressIn');
  fireEvent(getByText('회원가입'), 'pressOut');

  expect(Alert.alert).toHaveBeenCalled();
});
