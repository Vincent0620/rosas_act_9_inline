import logo from './logo.svg';
import './App.css';



function InlineStyling() {
  return (
    <div style={{width: "auto",}}>
      <div style={{width: "750px", margin: "auto", fontFamily: "Comic Sans MS"}}>
        <div style={{textAlign: "Center",}}>
          <h3>Inline</h3>
        </div>
        <div style={{background: "orange", padding: "6% 0 0",height: "850px", width: "750px",}}>
          <div style={{height: "10%", textAlign: "Center",}}>
            <h3>Login Form</h3>
          </div>
          <div>
            <div style={{margin: "10%"}}>
              <form>
                  <input style={{boxSizing: "border-box",width: "100%", marginBottom: "20px", fontSize: "14px", padding: "15px",}} type="email" placeholder="Email Address" />
                  <input style={{boxSizing: "border-box",width: "100%",marginBottom: "20px",fontSize: "14px", padding: "15px",}} type="password" placeholder="Password" />
                  <button style={{width: "100%", padding: "10px" ,backgroundColor: "Green", color: "white", cursor: "pointer"}}>LOGIN</button>
              </form>
              <div style={{marginTop: "15px", marginBottom: "15px", display: "flex", alignItems: "Center", justifyContent: "Center",}}>
                <div style={{width: "100%"}}>
                  <hr></hr>
                </div>
                <div>
                  <p style={{opacity: "0.6"}}>OR</p>
                </div>
                <div style={{width: "100%"}}>
                  <hr></hr>
                </div>
              </div>
              <div style={{display: "flex", alignItems: "Center", justifyContent: "space-evenly",}}>
                <a href="#"><img style={{width: "100px", height: "100px", cursor: "pointer",}} src={logo}></img></a>
                
              </div>
              <div style={{textAlign: "Center", margin: "45px", opacity: "0.8"}}>
                <p>No Account? <a href = "#">Create Account Here!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InlineStyling;




