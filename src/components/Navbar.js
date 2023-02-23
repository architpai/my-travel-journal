import globeIcon from "../globeIcon.png";

function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={globeIcon} alt="nav globe icon"></img>
      <span className="nav--text">my travel journal.</span>
    </nav>
  );
}
export default Navbar;
