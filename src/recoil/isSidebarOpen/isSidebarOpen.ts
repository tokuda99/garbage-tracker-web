import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const isSidebarOpenRecoilState = atom<boolean>({
  key: 'isSidebarOpenRecoilState',
  default: false,
});

export const useIsSidebarOpenState = () => {
  return useRecoilValue(isSidebarOpenRecoilState);
};

export const useIsSidebarOpenMutator = () => {
  const setState = useSetRecoilState(isSidebarOpenRecoilState);

  const setIsSidebarOpen = useCallback(
    (isSidebarOpen: boolean) => setState(isSidebarOpen),
    [setState]
  );

  const toggleIsSidebarOpen = useCallback(
    () => setState((state) => !state),
    [setState]
  );
  return { setIsSidebarOpen, toggleIsSidebarOpen };
};