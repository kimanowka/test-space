import React, { useCallback, useState } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}
interface ContextProps {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  visiblePost: number[];
  setVisiblePost: React.Dispatch<React.SetStateAction<number[]>>;
  handleClickOnPost: (id: number) => void;
}
export const Context = React.createContext<ContextProps>({
  auth: false,
  setAuth: () => {},
  visiblePost: [],
  setVisiblePost: () => {},
  handleClickOnPost: () => {},
});

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [visiblePost, setVisiblePost] = useState<number[]>([]);

  const handleClickOnPost = useCallback(
    (id: number) => {
      if (!visiblePost.includes(id)) {
        setVisiblePost([...visiblePost, id]);
      } else {
        setVisiblePost(visiblePost.filter((item) => item !== id));
      }
    },
    [visiblePost]
  );
  return (
    <Context.Provider
      value={{ auth, setAuth, visiblePost, setVisiblePost, handleClickOnPost }}
    >
      {children}
    </Context.Provider>
  );
};
