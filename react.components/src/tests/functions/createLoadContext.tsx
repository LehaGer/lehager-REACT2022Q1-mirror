import React from 'react';
import { LoadContext } from '../../context/LoadContext';

export const createWithLoadContext = (
  component: JSX.Element | null,
  initialLoadingState = true
) => {
  return <LoadContext.Provider value={initialLoadingState}>{component}</LoadContext.Provider>;
};
