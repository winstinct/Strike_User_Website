import { Checkbox, ThemeProvider } from "@material-tailwind/react";
import { checkBoxCustomTheme } from "../../utils/checkBoxCutstomTheme";
import { useState } from "react";

export default function StrikeCheckBox() {
    const [checked, setIsChecked] = useState(false)
  return (
    <ThemeProvider value={checkBoxCustomTheme}>
      <div>
        <Checkbox onChange={()=>setIsChecked(true)} defaultChecked/>
      </div>
    </ThemeProvider>
  );
}
