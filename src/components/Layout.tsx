import useTheme from "../hooks/useTheme";

const Layout: React.FC = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <div style={{ maxWidth: 1000, margin: "0 auto", paddingTop: 20 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
