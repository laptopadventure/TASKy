import { PropsWithChildren } from "react";

type AuthProps = PropsWithChildren & {
  role?: "create"|"update"|"delete"
}

function Auth(props: AuthProps) {
  return (
    <>
      {props.children}
    </>
  );
}

export default Auth;
