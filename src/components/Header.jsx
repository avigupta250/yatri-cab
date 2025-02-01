export default function Header() {
  return (
    <div
      style={{
        padding: "25px",
        width:"100%",
       
        // height:"150px"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-between",
          alignContent:"center"
        }}
      >
        <img src="./yatri-logo.png" alt="logo" />
        <img src="./contact-number.png" alt="contact-number" />
        <div style={{
           
        }}>
          <img style={{
            objectFit:"contain",
            marginBottom:"5px",
            marginRight:"40px"
          }} src="./download-app.png" alt="download-app" />
          <img style={{
            objectFit:"contain",
             marginRight:"40px"
          }} src="./profile.png" alt="profile" />
        </div>
      </div>
    </div>
  );
}
