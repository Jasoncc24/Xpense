// import images
import LogoImg from "../src/assets/img/header/logo.svg";
import HeroImg from "../src/assets/img/hero/image.svg";
import OverviewProductImg from "../src/assets/img/overview/product.svg";
import FacebookImg from "../src/assets/img/overview/brands/facebook.svg";
import GoogleImg from "../src/assets/img/overview/brands/google.svg";
import CocaColaImg from "../src/assets/img/overview/brands/coca-cola.svg";
import LinkedInImg from "../src/assets/img/overview/brands/linkedin.svg";
import SamsungImg from "../src/assets/img/overview/brands/samsung.svg";
import Feature1Img from "../src/assets/img/features/feature1-img.svg";
import Feature2Img from "../src/assets/img/features/feature2-img.svg";
import Feature3Img from "../src/assets/img/features/feature3-img.svg";
import ArrowRightImg from "../src/assets/img/features/arrow-right.svg";
import CardIconImg1 from "../src/assets/img/product/cards/icon1.svg";
import CardIconImg2 from "../src/assets/img/product/cards/icon2.svg";
import CardIconImg3 from "../src/assets/img/product/cards/icon3.svg";
import PricingIcon1 from "../src/assets/img/pricing/icon1.svg";
import PricingIcon2 from "../src/assets/img/pricing/icon2.svg";
import PricingIcon3 from "../src/assets/img/pricing/icon3.svg";
import AvatarImg1 from "../src/assets/img/testimonial/avatar1.png";
import AvatarImg2 from "../src/assets/img/testimonial/avatar2.png";
import AvatarImg3 from "../src/assets/img/testimonial/avatar3.png";
import AvatarImg4 from "../src/assets/img/testimonial/avatar4.png";
import AvatarImg5 from "../src/assets/img/testimonial/avatar5.png";
import CtaImg1 from "../src/assets/img/cta/image1.svg";
import CtaImg2 from "../src/assets/img/cta/image2.svg";
import FacebookIcon from "../src/assets/img/copyright/facebook.svg";
import TwitterIcon from "../src/assets/img/copyright/twitter.svg";
import LinkedinIcon from "../src/assets/img/copyright/linkedin.svg";

export const header = {
  logo: LogoImg,
  btnText: "Request a demo",
};

export const nav = [
  { name: "Features", href: "/" },
  { name: "About us", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Feedback", href: "/" },
];

export const hero = {
  title: "Track your Expenses to Save Money",
  subtitle: "Helps you to organize your income and expenses",
  btnText: "Try free demo",
  compText: "— Web, iOS and Android",
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: "Alwalys online",
    title: "Real-time support with cloud",
    subtitle:
      "We offer real-time support service that lets you get help from remotely-located experts, regardless of where you are in the world. —you’ll get immediate access to expert advice and support. ",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: "Free some cost",
    title: "Save cost for you and family",
    subtitle:
      "xpense is the perfect budget-friendly software for businesses that want to take control of their data and get more out of their cloud.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: "Use anytime",
    title: "Use anytime when you need",
    subtitle:
      "perfect for small businesses and professionals who want to track their expenses, anywhere they go.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: "The Product we work with.",
  subtitle:
    "we believe that your cloud server should be simple, secure and affordable. That's why we offer tailored solutions for entrepreneurs, small businesses and enterprises.",
  cards: [
    {
      icon: CardIconImg1,
      title: "Cross platform",
      subtitle: "available for IOS, Android, Windows, and MAC",
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: "Cloud server",
      subtitle: "Unlimited storage space; upload as much data as you want",
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: "Secure",
      subtitle: "5 levels of security including SSL encryption.",
      delay: 600,
    },
  ],
};

export const pricing = {
  title: "Choose your flexible plan.",
  cards: [
    {
      icon: PricingIcon1,
      title: "Starter Plan",
      services: [
        { name: "Store 10 GB of data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$9.99",
      userAmount: "up to 1 user + 3.99 per user",
      btnText: "Get this",
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: "Silver Plan",
      services: [
        { name: "Store 100 GB of data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$19.99",
      userAmount: "up to 3 user + 2.99 per user",
      btnText: "Get this",
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: "Diamond Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$29.99",
      userAmount: "up to 10 user + 1.99 per user",
      btnText: "Get this",
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: "We have millions of best wishers",
  clients: [
    {
      message:
        "I Strongly recommend cloud server to everyone interested in running a successful online business! xpense is awesome!",
      image: AvatarImg1,
      name: "Cameron Williamson",
      position: "Client",
      borderColor: "#FF7235",
    },
    {
      message:
        "xpense makes me more productive and gets the job done in a fraction of the time. I'm glad I found xpense .",
      image: AvatarImg2,
      name: "Shirley Hand",
      position: "Client",
      borderColor: "#FFBE21",
    },
    {
      message:
        "If you want to take your business to the next level, use xpense and don't look any further.",
      image: AvatarImg3,
      name: "Dr. Olivia Hansen",
      position: "Client",
      borderColor: "#4756DF",
    },
    {
      message:
        "Everyone’s on the same page. Many of our people are not very organized naturally, so xpense is a godsend!",
      image: AvatarImg4,
      name: "Aubrey Sanford",
      position: "Client",
      borderColor: "#3EC1F3",
    },
    {
      message:
        "I have tried a few software of this kind and xpense is the best by far!",
      image: AvatarImg5,
      name: "Terri Conroy",
      position: "Client",
      borderColor: "#BB7259",
    },
  ],
};

export const cta = {
  title: "20M+ downloaded from 32 different countries",
  subtitle: "Try demo for 7 days with full features.",
  btnText: "Try free demo",
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: "Home", href: "/" },
    { name: "About us", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Features", href: "/" },
    { name: "Blog", href: "/" },
  ],
  legal: [
    { name: "Terms of use", href: "/" },
    { name: "Terms of conditions", href: "/" },
    { name: "Privacy policy", href: "/" },
    { name: "Cookie policy", href: "/" },
  ],
  newsletter: {
    title: "Newsletter",
    subtitle: "Over 25000 people have subscribed",
  },
  form: {
    placeholder: "Enter your email",
    btnText: "Subscribe",
    smallText: "We don’t sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: "Privacy & Terms",
    href: "/",
  },
  link2: {
    name: "Contact us",
    href: "/",
  },
  copyText: "Copyright @ 2022 xpence",
  social: [
    { icon: FacebookIcon, href: "/" },
    { icon: TwitterIcon, href: "/" },
    { icon: LinkedinIcon, href: "/" },
  ],
};
