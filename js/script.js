/**
 * Aditi Yuvraj Kadam — Portfolio Interactive Engine
 * Handles project preview modals, copy-to-clipboard, toast notifications, & print functionality.
 */

// Project Data Details for Interactive Modal
const projectsData = {
  "gift-mart": {
    number: "01",
    title: "The Gift Mart",
    category: "Gifting & Lifestyle E-Commerce",
    domain: "https://thegiftmart.co.in/",
    image: "assets/images/gift-mart.jpg",
    tags: ["Shopify", "Liquid", "Custom Sections", "JavaScript", "SEO Optimization"],
    description: "Full-scale Shopify store custom build tailored for corporate & personal gift hampers. Engineered smooth cart drawer, custom product add-ons, bundled pricing logic, and ultra-fast page speeds.",
    highlights: [
      "Custom Shopify Liquid section architecture for modular product pages",
      "Dynamic gift box customizer allowing customers to build personalized hampers",
      "Optimized Core Web Vitals resulting in 95+ Mobile PageSpeed score",
      "Integrated seamless Indian payment gateways & pin-code serviceability checker"
    ]
  },
  "enterprise-solutions": {
    number: "02",
    title: "Enterprise Solutions Inc",
    category: "IT Staffing & Consulting Firm",
    domain: "https://www.enterprisesolutioninc.com/",
    image: "assets/images/enterprise-solutions.jpg",
    tags: ["WordPress", "PHP", "Custom Theme", "Elementor", "Job Board Integration"],
    description: "Corporate website build for a leading global IT staffing firm. Designed to handle high candidate traffic, clear service offerings, corporate client showcases, and automated career application workflows.",
    highlights: [
      "Custom WordPress theme architecture built for enterprise security and speed",
      "Interactive candidate job portal & resume submission workflow",
      "Multilingual capabilities and location-based routing for US & international clients",
      "Schema structured data integration for improved Google Jobs ranking"
    ]
  },
  "lumina-school": {
    number: "03",
    title: "Lumina World School",
    category: "Education & Institution Site",
    domain: "https://luminaworld.school/",
    image: "assets/images/lumina-school.jpg",
    tags: ["WordPress", "Custom CSS3", "Academic Portal", "Formidable Forms"],
    description: "Comprehensive institutional website for Lumina World School. Features vibrant curriculum landing pages, virtual campus tour galleries, interactive admission inquiry forms, and parent communication portal.",
    highlights: [
      "Mobile-first responsive design catered for prospective parents and students",
      "Secure online admission application system with file uploads & notification routing",
      "Event calendar & announcements noticeboard for active academic updates",
      "Accessibility AAA compliant color contrast and keyboard navigation"
    ]
  },
  "dizester-herbal": {
    number: "04",
    title: "Dizester Herbal",
    category: "Herbal Wellness Products",
    domain: "https://dizesterherbal.com/",
    image: "assets/images/dizester-herbal.jpg",
    tags: ["Shopify", "WooCommerce / WP", "Botanical UX", "Custom CSS", "Speed Fixes"],
    description: "E-Commerce portal for natural herbal health & digestive remedies. Focused on trust-building visual design, ingredient breakdowns, customer reviews, and high-converting product pages.",
    highlights: [
      "Custom product ingredient modal display for medical transparency",
      "Subscription checkout options for recurring health supplies",
      "Optimized image delivery pipeline reducing page load to under 1.2 seconds",
      "Integrated customer review widgets & trust badge carousels"
    ]
  },
  "drip-kingz": {
    number: "05",
    title: "Drip Kingz Apparel",
    category: "Streetwear Apparel Store",
    domain: "https://dripkingzapparel.com/",
    image: "assets/images/drip-kingz.jpg",
    tags: ["Shopify", "Online Store 2.0", "Custom CSS Animations", "AJAX Cart"],
    description: "High-energy streetwear e-commerce brand experience. Features dark moody aesthetic, interactive size guides, AJAX instant cart drawer, lookbook showcase, and inventory countdown timers.",
    highlights: [
      "Custom Shopify 2.0 theme built from scratch with neon dark UI components",
      "Slide-out AJAX cart with real-time free shipping threshold progress bar",
      "Interactive Lookbook gallery with instant product hotspot tagging",
      "Integrated Instagram shop feed and social proof widgets"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Set Dynamic Receipt Timestamp
  const dateEl = document.getElementById("receipt-date");
  if (dateEl) {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    dateEl.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
  }

  // 2. Setup Project Preview Modal Listeners
  const modalOverlay = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDesc = document.getElementById("modal-desc");
  const modalHighlights = document.getElementById("modal-highlights");
  const modalLink = document.getElementById("modal-link");

  const previewButtons = document.querySelectorAll("[data-project]");

  previewButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const projectKey = button.getAttribute("data-project");
      const data = projectsData[projectKey];

      if (data) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalTitle.textContent = `${data.number}. ${data.title}`;
        modalCategory.textContent = data.category;
        modalDesc.textContent = data.description;
        modalLink.href = data.domain;

        // Render highlights
        modalHighlights.innerHTML = "";
        data.highlights.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          modalHighlights.appendChild(li);
        });

        // Open modal
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close Modal
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // 3. Print Receipt Functionality
  const printBtn = document.getElementById("print-receipt-btn");
  if (printBtn) {
    printBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.print();
    });
  }

  // 4. Click to Copy Contacts with Toast Notification
  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute("data-copy");
      const label = btn.getAttribute("data-label") || "Text";

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`✓ Copied ${label} to clipboard!`);
      }).catch(err => {
        // Fallback for older browsers
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });

  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
});
