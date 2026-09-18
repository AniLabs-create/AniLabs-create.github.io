import React, { useState } from "react";
import "../styles/Contact.css";
import FadeInSection from "./FadeInSection";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const EMAIL = "itsnizamuddin08@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Portfolio message from ${name || "a visitor"}`,
          _template: "table",
          _captcha: "false",
          name,
          email,
          message,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">
            <span className="section-number">05.</span>contact
          </span>
        </div>
        <div className="contact-intro">
          My inbox is always open — whether you have a project idea, a
          question, or just want to say hi. I'll get back to you!
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="your message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sent" ? (
              <>
                <CheckCircleRoundedIcon sx={{ fontSize: 18 }} />
                message sent — thank you!
              </>
            ) : status === "sending" ? (
              "sending..."
            ) : (
              <>
                <EmailRoundedIcon sx={{ fontSize: 18 }} />
                send message
              </>
            )}
          </button>
          {status === "sent" && (
            <div className="contact-note">
              Delivered straight to my inbox — I'll reply soon!
            </div>
          )}
          {status === "error" && (
            <div className="contact-note contact-note--error">
              Something went wrong — please email me directly at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          )}
        </form>
      </FadeInSection>
    </div>
  );
};

export default Contact;
