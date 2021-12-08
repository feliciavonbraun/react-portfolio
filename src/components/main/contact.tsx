import "../css/contact.css";
import circles from "../content/contactDetails";

function Contact() {
  return (
    <div className="contactArea">
      {circles.map((circle, index) => (
        <div key={index} className={circle.class}>
          <h2>{circle.header}</h2>
          <a href={circle.href} target="_blank" rel="noopener noreferrer">
            <img
              src={circle.img}
              className="imgZoom"
              style={{ height: circle.height }}
              alt={circle.alt}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
export default Contact;
