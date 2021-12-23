import { useContext } from "react";
import { Context } from "../../Context";

export const NotAuthAccount = () => {
  const { setAuth } = useContext(Context);

  const handleLogIn = () => {
    setAuth(true);
  };
  return (
    <div>
      <button type="button" onClick={handleLogIn}>
        войти вот так просто
      </button>
    </div>
  );
};
