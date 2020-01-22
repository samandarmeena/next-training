import Link from 'next/link';
const linkStyle = {
  marginRight: 15
};
const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
    <Link href='/theme'>
      <a style={linkStyle}>Theme</a>
    </Link>
    <Link href='/input'>
      <a style={linkStyle}>Input</a>
    </Link>
  </div>
);
export default Header;
