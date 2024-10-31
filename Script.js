import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Script() {
  useEffect(() => {
    // Initialize Email.js with your User ID
    emailjs.init("jmu5nQT1kttNYOdhC");

    const animateSkills = () => {
      const skills = document.querySelectorAll('.skill');
      skills.forEach((skill, index) => {
        setTimeout(() => {
          skill.style.animation = `fadeInUp 0.5s ease forwards`;
        }, index * 100);
      });
    };

    const animateProjects = () => {
      const projects = document.querySelectorAll('.project');
      projects.forEach((project, index) => {
        setTimeout(() => {
          project.style.animation = `scaleIn 0.5s ease forwards`;
        }, index * 200);
      });
    };

    const animateTestimonials = () => {
      const testimonials = document.querySelectorAll('.testimonial');
      testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
          testimonial.style.animation = `fadeInUp 0.5s ease forwards`;
        }, index * 200);
      });
    };

    const animateHireReasons = () => {
      const hireReasons = document.querySelectorAll('.hire-reason');
      hireReasons.forEach((reason, index) => {
        setTimeout(() => {
          reason.style.animation = `fadeInUp 0.5s ease forwards`;
        }, index * 200);
      });
    };

    const smoothScroll = () => {
      document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    };

    const handleFormSubmission = (event) => {
      event.preventDefault();

      const name = event.target.querySelector('input[placeholder="Your Name"]').value;
      const email = event.target.querySelector('input[placeholder="Your Email"]').value;
      const message = event.target.querySelector('textarea[placeholder="Your Message"]').value;

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      const templateParams = {
        to_email: "xiufeng926@gmail.com",
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs.send('service_l76ge3f', 'template_dx018vg', templateParams)
        .then(function(response) {
          alert("Message sent successfully!");
        }, function(error) {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        });
    };

    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', handleFormSubmission);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeInUp 0.5s ease forwards`;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    animateSkills();
    animateProjects();
    animateTestimonials();
    animateHireReasons();
    smoothScroll();

    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmission);
      }
      document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return null; // This component doesn't need to render anything
}
