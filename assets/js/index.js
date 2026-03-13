particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
    },

    size: {
      value: 3,
    },

    move: {
      speed: 2,
    },

    line_linked: {
      enable: true,
    },
  },

  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
});

const showModal = () => {
    const modal = document.getElementById("contact-modal");
    modal.showModal();
};

document.getElementById("year").textContent = new Date().getFullYear();
// CLEAR GLASS
// TEMPERED GLASS
// FROSTED GLASS
// MIRROR GLASS