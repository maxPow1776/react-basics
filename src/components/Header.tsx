import { Button } from "antd";
import useTheme from "../hooks/useTheme";

type HeaderProps = {
  hideCats: () => void;
  withCats: boolean;
};

const Header = (props: HeaderProps) => {
  const { isDark, setIsDark } = useTheme();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Animals list</h1>
      <div>
        <Button style={{ marginRight: 15 }} onClick={props.hideCats}>
          {!props.withCats ? "Hide Cats" : "Show Cats"}
        </Button>
        <Button style={{ marginRight: 30 }} onClick={() => setIsDark!(!isDark)}>
          Change Theme
        </Button>
      </div>
    </div>
  );
};

export default Header;
