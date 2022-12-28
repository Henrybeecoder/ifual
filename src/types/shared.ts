import { ReactNode } from "react";

export type RenderPageProps = {
  [key: string]: ReactNode;
};

export interface AuthContainerProps {
  page: "login" | "register";
}

export interface SharedAdminComponentProps {
  baseUrl: "admin" | "super-admin";
}
