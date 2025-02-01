import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      
        <img src="./yatri-logo.png" alt="logo" />
        <div>
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>News</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
        </div>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
          <h4>Newsletter</h4>
          <div>
            <input style={{
                position:"relative",
                padding:"5px"
            }} type="email" placeholder="Email" />
            <button style={{
                position:"absolute",
                translate:131,
                padding:"5px"
            }}>Send</button>
          </div>
        </div>

        <span>All Copyrights are reserved by YATRI CABS</span>
      </div>
   
  );
}
