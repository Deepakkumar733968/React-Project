import "./style.css";
export const NavBar = () => {
  const renderNavList = ({ link, value }) => <a href={link}>{value}</a>;
  return (
    <nav>
      <div>
        <img
          className="web-logo-nav"
          src="https://www.starz.com/assets/images/icons/starz-logo-glint.svg"
          alt="web-logo"
        />
      </div>
      <div></div>
    </nav>
  );
};
export default NavBar;
