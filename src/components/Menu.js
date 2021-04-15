import React, { useContext } from "react";
import { MenuWrapper, PlayButton, SettingButton } from "./Styled";
import { SettingContext } from "../App";

const Menu = () => {
  const settingContext = useContext(SettingContext);

  return (
    <MenuWrapper>
      <PlayButton onClick={() => settingContext.setCurrentScene(1)}>Play</PlayButton>
      <SettingButton onClick={() => settingContext.setCurrentScene(2)}>S</SettingButton>
    </MenuWrapper>
  );
};

export default Menu;
