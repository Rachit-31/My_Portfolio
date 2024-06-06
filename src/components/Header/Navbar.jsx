import styles from './Navbar.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
const Navbar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu=()=>{
        setMenuOpen(!menuOpen)
      }

      
      const [isSticky, setIsSticky] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 90) {
            setIsSticky(true);
            console.log(window.scrollY);
          } else {
            setIsSticky(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      });
    return(
        <section>
        <Link to="/" className={styles.title}>
        <img src="src\assets\Logo.png" alt="" className={styles.logo} />
      </Link>
      <Link to="/"><img src="src\assets\LogoBlack.png" alt="" className={styles.blacklogo} /></Link>

      <div className={`${styles.menu}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? styles.open : ""}>
        <li>
         <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/department" onClick={closeMenu}>Department</Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>Services</Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>Blog</Link>
        </li>
        <li>
          <Link to="/contact"  onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
        </section>
    )
}
export default Navbar