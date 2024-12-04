export default function App() {
  return (
    <div>
      <form>
        <h2>Contact Us</h2>
        <div className="name">
          <div>
            <label style={{ display: "block", marginBottom: "10px" }}>
              First Name <span>*</span>
            </label>
            <input type="text" style={{ width: "158px" }}></input>
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Last Name <span>*</span>
            </label>
            <input type="text" style={{ width: "158px" }}></input>
          </div>
        </div>
        <div className="email">
          <label style={{ display: "block", marginBottom: "10px" }}>
            Email Address <span>*</span>
          </label>
          <input type="email" style={{ width: "328.617px" }}></input>
        </div>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Query Type <span>*</span>
        </label>
        <div className="query">
          <div>
            <input type="radio" id="general"></input>
            <label for="general">General Enquiry</label>
          </div>
          <div>
            <input type="radio" id="support"></input>
            <label for="support">Support Request</label>
          </div>
        </div>
        <div className="message">
          <label style={{ display: "block", marginBottom: "10px" }}>
            Message <span>*</span>
          </label>
          <input
            type="text"
            style={{ width: "328.617px", height: "70px" }}
          ></input>
        </div>
        <div className="consent">
          <input type="checkbox"></input>
          <label>
            I consent to being contacted by the team <span>*</span>
          </label>
        </div>
        <button style={{ width: "100%" }}>Submit</button>
      </form>
    </div>
  );
}
