import { Twirl as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
interface Props {
  hideMsg: string;
  target?: string;
  showMsg: string;
  setter?: React.Dispatch<React.SetStateAction<boolean>>;
  bool?: boolean;
}
const MenuTogglar = ({ setter, bool, target }: Props) => {
  const [show, setShow] = useState(Boolean(target || bool));
  useEffect(() => {
    if (bool) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [bool]);

  const handleShow = () => {
    setter && setter((bool) => !bool);
  };
  return (
    <Hamburger
      toggle={setShow}
      toggled={show}
      size={20}
      color="white"
      onToggle={handleShow}
    />
  );
};

export default MenuTogglar;
