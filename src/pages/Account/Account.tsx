import { useContext } from "react";
import { Context } from "../../Context";
import { AuthAccount } from "./AuthAccount";
import { NotAuthAccount } from "./NotAuthAccount";

export const Account = (): JSX.Element => {
  const { auth } = useContext(Context);

  return <div> {auth ? <AuthAccount /> : <NotAuthAccount />} </div>;
};
