export const projectCategories = [
  "ALL",
  "UI/UX DESIGN",
  "GRAPHIC DESIGN",
  "WEB DEVELOPMENT",
  "MOBILE APP",
  "3D DESIGN",
];

const make = (title, category, description) => ({
  title,
  category,
  description,
  // Ganti path ini dengan gambar project asli, contoh: "/projects/e-commerce-ui.png"
  image: "",
  imageAlt: `${title} — ${category} project preview`,
  link: "#",
});

export const projects = [
  // UI/UX DESIGN
  make(
    "E-Commerce UI",
    "UI/UX DESIGN",
    "Shopping experience design with clean flows and bold visual hierarchy."
  ),
  make(
    "Company Profile UI",
    "UI/UX DESIGN",
    "Editorial company profile interface with cinematic dark aesthetics."
  ),
  make(
    "Dashboard UI",
    "UI/UX DESIGN",
    "Data dashboard concept focused on clarity and visual rhythm."
  ),

  // GRAPHIC DESIGN
  make(
    "Poster Design",
    "GRAPHIC DESIGN",
    "Bold typographic poster series for cultural events."
  ),
  make(
    "Brand Identity",
    "GRAPHIC DESIGN",
    "Visual identity system with strong and memorable character."
  ),
  make(
    "Social Media Design",
    "GRAPHIC DESIGN",
    "Consistent content design system for social media channels."
  ),

  // WEB DEVELOPMENT
  make(
    "Company Profile Website",
    "WEB DEVELOPMENT",
    "Fast, responsive, and modern company website."
  ),
  make(
    "Landing Page",
    "WEB DEVELOPMENT",
    "High-converting landing page with smooth interactions."
  ),
  make(
    "Portfolio Website",
    "WEB DEVELOPMENT",
    "Personal portfolio with editorial layout and subtle motion."
  ),

  // MOBILE APP
  make(
    "Mobile Banking UI",
    "MOBILE APP",
    "Secure and friendly banking experience for mobile users."
  ),
  make(
    "Food Delivery App",
    "MOBILE APP",
    "Appetizing food ordering flow from discovery to checkout."
  ),
  make(
    "Productivity App",
    "MOBILE APP",
    "Focused task manager designed around daily rituals."
  ),

  // 3D DESIGN
  make(
    "3D Product",
    "3D DESIGN",
    "Photorealistic product visualization for digital campaigns."
  ),
  make(
    "3D Environment",
    "3D DESIGN",
    "Atmospheric 3D scenes with cinematic lighting."
  ),
  make(
    "3D Object",
    "3D DESIGN",
    "Stylized 3D objects for interactive experiences."
  ),
];
