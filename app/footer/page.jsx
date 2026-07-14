"use client";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-left">

          <img
            src="/images/logo.png"
            alt="Websiity"
            className="footer-logo"
          />


        </div>

        {/* Center */}

        <div className="footer-center">

          <h4>Quick Links</h4>

          <a href="/">Home</a>

          <a href="/about">About</a>

          <a href="/projects">Projects</a>

          <a href="/contact">Contact</a>

        </div>

        {/* Right */}

        <div className="footer-right">

          <h4>Follow Us</h4>

          <div className="social-icons">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter-x"></i>
            </a>

            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-dribbble"></i>
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Websiity. All rights reserved.

      </div>

      <style jsx>{`

        .footer{

          width:100%;

          background:#050505;

          color:#fff;

          border-top:1px solid rgba(255,255,255,.08);

          padding:70px 8% 30px;

        }

        .footer-container{

          display:grid;

          grid-template-columns:2fr 1fr 1fr;

          gap:70px;

          align-items:flex-start;

        }

        .footer-logo{

          width:180px;

          margin-bottom:20px;

        }

        .footer-left p{

          color:#9e9e9e;

          line-height:1.8;

          max-width:380px;

        }

        h4{

          font-size:18px;

          margin-bottom:20px;

          color:#fff;

        }

        .footer-center{

          display:flex;

          flex-direction:column;

          gap:14px;

        }

        .footer-center a{

          color:#9d9d9d;

          text-decoration:none;

          transition:.3s;

        }

        .footer-center a:hover{

          color:#fff;

          padding-left:6px;

        }

        .social-icons{

          display:flex;

          gap:18px;

          margin-top:10px;

        }

        .social-icons a{

          width:52px;

          height:52px;

          border-radius:50%;

          display:flex;

          align-items:center;

          justify-content:center;

          background:#111;

          color:white;

          font-size:22px;

          transition:.35s;

        }

        .social-icons a:hover{

          transform:translateY(-6px);

          background:#fff;

          color:#000;

        }

        .footer-bottom{

          margin-top:60px;

          padding-top:30px;

          border-top:1px solid rgba(255,255,255,.08);

          text-align:center;

          color:#777;

          font-size:14px;

        }

        @media(max-width:900px){

          .footer{

            padding:50px 25px 25px;

          }

          .footer-container{

            grid-template-columns:1fr;

            gap:45px;

          }

          .footer-logo{

            width:150px;

          }

          .footer-left p{

            max-width:100%;

          }

          .social-icons{

            justify-content:flex-start;

          }

        }

      `}</style>

    </footer>
  );
}