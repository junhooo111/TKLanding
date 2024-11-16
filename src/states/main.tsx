import { atom } from "recoil";

export const isMenuOpened = atom({
  key: "main/menu/is_opened",
  default: false,
});
