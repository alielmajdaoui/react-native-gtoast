# react-native-gtoast
A React Native Global Toast that can be called from anywhere within your project.

## Why Another Toast Package?

I needed a global Toast that I can call from anywhere within my project (similarly to `Alert.alert(title, message?, buttons?, options?)`) and especially from Redux async actions (Redux Thunk) whereas most of the existing Toast packages require to add a Toast component inside every component you want it display a toast and set the Toast component a `ref`to be used to interact with it. Thus, it's going to be hard to access it from a Redux Thunk action.

## Install

```
npm install --save react-native-gtoast
```

## Example

This an example Redux Thunk action that shows a Toast wether a comment is added or failed to add.

```javascript
import { showToast } from 'react-native-gtoast';
import axios from 'axios';

// ...

export const addCommentAction = () => {
	return (dispatch) => {
		dispatch({ type: 'ADD_COMMENT_START' });

        return axios.post('/post/1/comments').then(
			(comment) => {
                dispatch({ type: 'ADD_COMMENT_SUCCESS', comment });

                showToast('Comment added!', {
                    duration: 1200
                })
            },
			(err) => {
                dispatch({ type: 'ADD_COMMENT_FAILURE', err });

                showToast('There was an error adding comment!', {
                    duration: 3000
                })
            }
		);
	};
};
```

*Note:* A `<GToastContainer>` must be added in your app root component. (<a href="#toasts-container">Read more</a>)

## Documentation

### Toasts Container

All toasts are going to be rendered inside a `<GToastContainer>` component that we should explicitly add in our app root component.

Preferably, it should be wrapped inside a `Fragment`. It's also fine to wrap it inside the Redux `<Provider>` component if applicable.

You should AVOID wrapping the `<GToastContainer>` inside the core `react-native` components such as `<View>`, `<ScrollView>`, `<SafeAreaView>`, etc and any component that could have such style props `width`, `height`, `position` and so on.

```javascript
import React, { Fragment } from 'react';
import { GToastContainer } from 'react-native-gtoast';
import HomeScreen from './components/Home';

export default function App() {
    return (
        <Fragment>
            <HomeScreen />
            <GToastContainer paddingBottom={30} />
        </Fragment>
    );
}
```

### `<GToastContainer />`

`ReactNode` The toasts container.

#### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| paddingBottom | number | 0 | The padding from the bottom. |

### `showToast()`

```typescript
showToast(text: string, options?: ToastOptions)
```

`method` Shows a toast.

#### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| text **(required)** | string       | - | The toast message. |
| options             | ToastOptions | <a href="#toastoptions">See ToastOptions Reference</a> | The toast options. |

### `ToastOptions`

```typescript
{
    id?: string,
    duration?: number
}
```

`Object` Toast options.

#### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| id       | string | null | The toast unique ID. |
| duration | number| 3000 | The toast display duration in milliseconds. |

## Usage

### Basic

Everytime the button will be pressed, a toast will be created and displayed.

```javascript
import React from 'react';
import { View, Button } from 'react-native';
import { showToast } from 'react-native-gtoast';

export default function App() {
    const handlePress = () => {
        showToast('Awesome Global Toast!');
    };

    return (
        <View>
            <Button title={'Show my Toast'} onPress={handlePress} />
        </View>
    );
}
```

### Unique Toasts

It doesn't matter how many times we press the button, it will create and display the toast once unless the toast is disappeared.

```javascript
showToast('Awesome Global Toast!', {
    id: 'my-awesome-toast'
});
```

## License

Licensed under the MIT license.