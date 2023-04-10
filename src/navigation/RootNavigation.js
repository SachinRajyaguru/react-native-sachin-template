import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  try {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  } catch (error) {}
}
