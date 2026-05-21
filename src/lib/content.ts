import { prisma } from "./prisma";

export const DEFAULT_CONTENT: Record<string, Record<string, string>> = {
  home: {
    hero_tagline: "Established Excellence",
    hero_title: "Engineering Homes with Meticulous Precision.",
    hero_subtitle: "Led by Er. Uma Maheswari B.E, M.E, we blend structural integrity with aesthetic brilliance to build spaces that stand the test of time.",
    hero_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdnGjI5Q_6F-VbpWRyc_VzpZBs6jvt5G3Ld6TZLHdF2GOUqCBj3s1Nxrz692YP9qyq4pQtPcm54x9_uDBVgXL7at1GrhdjXx0W7tTuJz_zgXskkqGVmteTL58SY3_0bQVwASa-0bwnQpzB6K23rkqW9ha5inFmPtvYCKqufVIPWRS66L2lgcX2hAf3-EdtfJILIfXaaPlo1yILbfRO6EH-em0t5_6Eh6uGp4MG0msfd8P9UVIdzMgMumfp3ggd5cUG7qZo_ChhYfc",
    competencies_tagline: "Core Competencies",
    competencies_title: "Architectural Mastery Meets Structural Engineering.",
    competencies_quote: "\"We don't just build houses; we curate experiences for a lifetime.\"",
    service1_title: "Residential Construction",
    service1_desc: "From initial foundation to the final roofing, our civil engineering expertise ensures every structure is safe, durable, and grand.",
    service2_title: "Interior Design",
    service2_desc: "Bespoke interiors that reflect your personality. We focus on spatial efficiency, luxury finishes, and ergonomic flow.",
    service3_title: "Renovations",
    service3_desc: "Breathing new life into existing spaces with modern upgrades while maintaining the structural integrity of the home.",
    portfolio_tagline: "Portfolio",
    portfolio_title: "Recent Projects",
    portfolio_desc: "Explore our portfolio of meticulously executed residential projects that showcase our commitment to quality and design excellence.",
    philosophy_tagline: "Our Philosophy",
    philosophy_title: "The Engineering Difference.",
    philosophy_text: "With advanced degrees in engineering (B.E, M.E), Er. Uma Maheswari leads Akshar Construction with a philosophy that beauty must be underpinned by uncompromising structural strength.",
    philosophy_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ddyXGboWOqjR23uvdrMQ8uJ7h6vRDSPr0h0kCXbz809ZAFciNApy9bI50SJ0FPCmWzrD28gmiOQ9qeAYSAf1Uyo75n7uvSNbnA2rNUqYHoVomjXpf_5CAnnXxnqAJpD5gk8DSifoipZlCC5Kj7FLpoZ9ObNPjKMKmjATFH_1opPG2EeogFxPiU4KhEc0u-2W3oWjcCXFyHwrhRDEhcHhWzuqlJEo2z-a6XGRPPW3B1lYDZDSRhQWNkCVbECTapIYO6PmwRgamk8",
  },
  about: {
    hero_tagline: "Precision in Every Pillar",
    hero_title: "Engineering Excellence meets Interior Aesthetics",
    hero_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFJO9tOgntpFtQ0T0KYv0XvbO6GUX-VPi4axu299GofTPtcI0ugfy-dgRy1SfflWu41Up-zcE_okZUICLbvFELkU03qkl307aQZe-CTD6aw2Evj-5R633n4MF5lJhcP8bXOZ18i88fgV-3vYuhRrQQAs1xyMTk64AHzqOgKgcjKFHwTUCF0meMidcIq5lyHgBE8h4WfB2MRj6c8xHK9W61IZyUZAaSTf9LyySoNQZi2TJq0FT1jHYcTeCNrBiuK8f8Qhd9qsHXSto",
    heritage_tagline: "Our Heritage",
    heritage_title: "A Legacy Built on Structural Integrity",
    heritage_text1: "At Akshar Construction, we don't just build houses; we engineer sanctuaries. Founded on the principle that aesthetic beauty must be rooted in structural perfection, we bridge the gap between heavy-duty civil engineering and high-end interior design.",
    heritage_text2: "Every project is a testament to meticulous planning, where Er. Uma Maheswari's technical prowess ensures that every beam is placed with precision, and every finish reflects the homeowner's soul. Our approach is holistic—viewing a home as a singular, living organism from foundation to upholstery.",
    heritage_image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOKl5uVoPmSwLo7Tk_ApHdRaB08IPrnA2SNgbYetSnsehTfAGM1-duKBAnI_5Jpu5YULRK_X-kFs0ftcBZaS6dS0IkeI_9l0thu4NMWCgDvOsrJRZag0kxhESbSVlICPnNurf_mjCYcQ0smwGWKHQ3tDIlbI82-o2zDIKlR3vizDtFYwGI3Uk5_hepHqsT-w7JEhWHz-J207eAUwua13zF_5jRmcC35i2jTyzhJFzmhxiAfSXgwjQhi_637EJxqzNu2smLXoo6YPA",
    heritage_image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7dvJWbalhW0oWuiL_IXtRETA0XVc7tmx787OSM_8GCQS-kjPkf-DWRrtybMFkWlD1B2i61VXXEOPoIeFQP1d1O0MTejR-saN0uR9oMOsAFpyfWYnZEYal7cO7GL2eNhWT4Km2mOu4XwEQKnrzutR_kPOFc0CdLbjuEIrMLbjtjmDzO-jM3xFHEglgA4P3f8-wj-OMEvqDmBwZhxw2_BpYyTuCnhEkv5rMbbYpqOdS7ZidGG1evaRtj0qBz9gZ06KZWMAVuIk-dZE",
    founder_tagline: "The Visionary",
    founder_name: "Er. Uma Maheswari",
    founder_title: "B.E, M.E – Principal Engineer & Founder",
    founder_desc: "With over two decades of experience in structural engineering and a Master's degree in Engineering, Uma Maheswari brings a rare depth of technical knowledge to the world of residential luxury. Her philosophy is simple: a beautiful home is only as good as its engineering foundation.",
    founder_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeWx7EgrHut6moNRScn3xGR0M_Go5HrQLuenlgfmUHcx10XqZOO6HkoWvIBgEJitoumxr3CzgbrvLIpDZytU-cRGr6AI4XxpiROKVo71fjfVa7jpYMPgK1oxB0pggL_1-0dRVo-dkD9oMbXQE7F_-AA84AXTqC5KAsUXODDw8RmDnv4aQ-md6JRho7qGkVwYTZfOmT5-NqKVkZn9osXNs74LhzTrjEJHni-pVVX7bnv1bktUjc7jIp4U0wJRN2_7NAW_NdNr45EKY",
    stat_1_number: "20+",
    stat_1_label: "Years Exp",
    stat_2_number: "150+",
    stat_2_label: "Homes Built",
  },
  services: {
    hero_tagline: "Our Expertise",
    hero_title: "Meticulous Craftsmanship, Engineering Precision.",
    hero_desc: "We bridge the gap between architectural vision and structural reality. Every project at Akshar Construction is a testament to our commitment to durability, aesthetic refinement, and premium living standards.",
    service1_tagline: "Flagship Core Service",
    service1_title: "Residential Construction",
    service1_desc: "From foundation to finishing, we deliver premium homes built on a legacy of structural integrity. Our team manages complex builds with engineering rigor and uncompromising quality standards.",
    service1_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdnGjI5Q_6F-VbpWRyc_VzpZBs6jvt5G3Ld6TZLHdF2GOUqCBj3s1Nxrz692YP9qyq4pQtPcm54x9_uDBVgXL7at1GrhdjXx0W7tTuJz_zgXskkqGVmteTL58SY3_0bQVwASa-0bwnQpzB6K23rkqW9ha5inFmPtvYCKqufVIPWRS66L2lgcX2hAf3-EdtfJILIfXaaPlo1yILbfRO6EH-em0t5_6Eh6uGp4MG0msfd8P9UVIdzMgMumfp3ggd5cUG7qZo_ChhYfc",
    service2_title: "Interior Design",
    service2_desc: "Crafting bespoke interiors that harmonize form and function. We focus on premium materials and ergonomic layouts.",
    service2_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuuwrgFckIv_25RDP3iuF6uME1BL7Bw138aF1625xsv5xAjHemzkyQK7y6hBP1aQZgUUfEUfYEC6JwNX4LKwd5JzAbJqPWD0di5hzsAjhcO5IW0yh4KgbEgFIlCC6ZK2wCqniSX3Y58P2SZex8IJdeu30bjAgsZ3gepdNKNCeOb6S3ws6woBjEMZeOiV35khI3ZI0xInbkW8DgetdEX9JvSArBLxV-5JuiMyXeoIDeiyRJeDIzYP9C02eZXUHBHjInpuYqcVRUmq4",
    service3_title: "Layout Planning",
    service3_desc: "Optimized spatial planning that maximizes every square foot. Our layouts are designed for future-proof living.",
    service3_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6IBjPZtydtTB80dbjnhVOje_nuQq_eHAVKJRA_bt2tspryU7ijbyF9BgFXfmee5zBXSwy2mHnkDmohw8AxBk7S2GEJfSaT1PkLxEyFZJN4ZDvImi8BcSIwf5k0gX9y-81NmKxeEZyKJ245Es0h95jhSmc1F--MRv3g6MYgCKhpnjvxaKvLimr36k5S6T-yDmrvvGQdDMn48yFUXP-4ne6L1zh9wSjuZTnSCNRuyA1BMA9nfKIDjguhjCwvsQTpwjF9JBoUMo9EGE",
    service4_title: "Home Renovation",
    service4_desc: "Revitalize your existing space with structural upgrades and modern finishes with minimal disruption.",
    service4_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoBljHZ6G9GY5iBkm0nkmctpGZm3KXjEtjIRQvZFldJSPwlsrouA2889J7OQFvOp2mbScIEyPJTF9pCEy6baKLAPano9rZSaDedhn2n4USUDs5ceISaiYHnWFD_FJ_qN1MOMW8ZMRCuBbZ9Ml0ahwMS60C_5nf1tqANWEP2vokgFfAB3QC7LNRITxjHl09-tL1P5PDPDu4uK8JXXMdIfhFNwnHlxDeEtHmZQIhbKxPWJpY8omJa1yEu0dPbwo7jHlDS-Enj9i3Oxc",
    service5_title: "False Ceiling Works",
    service5_desc: "Elevate your vertical space with custom lighting and geometric designs combining aesthetics with acoustic performance.",
    service5_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYEQUWdb1yMxFuXqk1HSL8P5P4gEQiW8N6KHnbQ8t-QdNE_Jd_Ge4Bbxs0tNOThWuabdhSAdWa6LhLw17nGNbP-kRbwWf9s5y83GM--l4Faxpmj9EQ0Lzpx4is4lIzMWB9Ca9Fzj0vViTjftFNCPxEFWnlNRvUkvP4sbCDiPz6CMoGEUZX9PrYNxFH2TQIXdD6WTuOo2s9nDgLFyK1IJJoElAaK9mhpaFY7UVlzfM3us1RBNWrspStCm1g8QLz8blMkz_AbqVFJx4",
  }
};

export async function getPageContent(page: string) {
  const dbContent = await prisma.pageContent.findMany({
    where: { page }
  });
  
  const contentMap: Record<string, string> = { ...DEFAULT_CONTENT[page] };
  for (const item of dbContent) {
    contentMap[item.key] = item.value;
  }
  return contentMap;
}
