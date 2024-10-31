import React from 'react'

export default function Services() {
  return (
    <>
     <section id="services">
        <div class="container">
            <h2>Services</h2>
            <div class="services-grid">
                <div class="service">
                    <i class="fas fa-code"></i>
                    <h3>Full Stack Development</h3>
                    <p>End-to-end web application development using cutting-edge technologies and best practices.</p>
                </div>
                <div class="service">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Responsive Web Design</h3>
                    <p>Creating beautiful, functional websites that work flawlessly across all devices and screen sizes.</p>
                </div>
          
                <div class="service">
                    <i class="fas fa-cloud"></i>
                    <h3>Cloud Solutions</h3>
                    <p>Leveraging cloud technologies to build scalable, reliable, and cost-effective applications.</p>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
