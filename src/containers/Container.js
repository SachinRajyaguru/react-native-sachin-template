import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ComponentsMatrix } from '../theme';

const Container = React.forwardRef(
  (
    {
      children,
      mainContainer: mainContainerProps,
      contentContainerStyle,
      styleScrollView,
      isTopInset,
      isBottomInset,
      isDefaultpaddingBottom = true,
      ScrollViewProps,
      refScrollView,
    },
    ref,
  ) => {
    const { top, bottom } = useSafeAreaInsets();

    const mainContainerStyle = [styles.mainContainer];
    if (isTopInset) {
      mainContainerStyle.push({ marginTop: top });
    }
    if (isBottomInset) {
      mainContainerStyle.push({ marginBottom: bottom });
    }

    mainContainerStyle.push(mainContainerProps);

    const mainContainerFlattenStyle = StyleSheet.flatten(mainContainerStyle);
    return (
      <View style={mainContainerFlattenStyle}>
        <ScrollView
          ref={ref}
          style={styleScrollView}
          contentContainerStyle={[
            styles.contentContainerStyle,
            isDefaultpaddingBottom && {
              paddingBottom: ComponentsMatrix.COMMON_BOTTOM_MARGIN,
            },
            contentContainerStyle,
          ]}
          {...ScrollViewProps}>
          {children}
        </ScrollView>
      </View>
    );
  },
);

export default Container;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
