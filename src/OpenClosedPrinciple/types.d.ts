import { ReactElement } from "react";

type TitleProps = {
  title: string;
  children: ReactElement;
};

type TitleWithLinkProps = {
  title: string;
  href: string;
  buttonText: string;
};

type TitleWithButtonProps = {
  title: string;
  buttonText: string;
  onClick: () => void;
};
