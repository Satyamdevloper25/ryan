import React from 'react'

export default function Contact() {
  return (
   <>
    <section id="contact">
        <div class="container">
            <h2>Get In Touch</h2>
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <form class="contact-form">
    <input type="text" placeholder="Your Name" required/>
    <input type="email" placeholder="Your Email" required/>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
</form>

            <div class="social-links">
                <a href="mailto:xiufeng926@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                
                <a href="https://www.instagram.com/ryan_code_/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-instagram"></i></a>
               
               
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Ryan. All rights reserved.</p>
    </footer>
</>
  )
}
