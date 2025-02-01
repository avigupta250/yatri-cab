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
                padding:"5px",
                paddingLeft:"20px",
                width:"400px",
                border:"none",
                borderRadius:"60px"
            }} type="email" placeholder="Email" />
            <button style={{
                position:"absolute",
                translate:"350px",            
                backgroundColor:"black",
                color:"white",
                border:"1px solid white",
               borderRadius: "0 30px 30px 0",
                padding:"3px",
                paddingLeft:"20px",
                paddingRight:"20px",
                cursor:"pointer"
                


            }}>
                <img  src="./arrow.png" alt="arrow"/>
            </button>
          </div>
        </div>

        <span>All Copyrights are reserved by YATRI CABS</span>
      </div>
   
  );
}
