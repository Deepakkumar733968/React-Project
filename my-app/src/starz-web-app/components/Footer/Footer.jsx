import "./style.css";
import firstList from "../../../contents/starz-web-app/home/data";
export const Footer = () => {
  const renderFooterList = (item, index) => (
    <li className="footer-list" key={index}>
      <a className="footer-link">{item}</a>
    </li>
  );
  return (
    <footer className="footer-main">
      <div>
        <h3 className="footer-heading">Browse STARZ</h3>
        <ul>
          {firstList.map(renderFooterList)}
          {/* last footer list */}
          <li className="footer-list">
            <a
              href="https://www.w3schools.com/TAGs/tryit.asp?filename=tryhtml_link_test"
              className="footer-link last-footer-list"
            >
              More Originals...
            </a>
          </li>
          {/*  */}
        </ul>
      </div>
    </footer>
  );
};
