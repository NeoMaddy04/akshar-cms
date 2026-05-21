import { prisma } from "./prisma";

export const DEFAULT_CONTENT: Record<string, Record<string, string>> = {
  home: {
    hero_title: "Engineering Homes with Meticulous Precision.",
    hero_subtitle: "Led by Er. Uma Maheswari B.E, M.E, we blend structural integrity with aesthetic brilliance to build spaces that stand the test of time.",
    hero_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdnGjI5Q_6F-VbpWRyc_VzpZBs6jvt5G3Ld6TZLHdF2GOUqCBj3s1Nxrz692YP9qyq4pQtPcm54x9_uDBVgXL7at1GrhdjXx0W7tTuJz_zgXskkqGVmteTL58SY3_0bQVwASa-0bwnQpzB6K23rkqW9ha5inFmPtvYCKqufVIPWRS66L2lgcX2hAf3-EdtfJILIfXaaPlo1yILbfRO6EH-em0t5_6Eh6uGp4MG0msfd8P9UVIdzMgMumfp3ggd5cUG7qZo_ChhYfc",
    philosophy_title: "The Engineering Difference.",
    philosophy_text: "With advanced degrees in engineering (B.E, M.E), Er. Uma Maheswari leads Akshar Construction with a philosophy that beauty must be underpinned by uncompromising structural strength.",
  },
  about: {
    hero_title: "Engineering Excellence meets Interior Aesthetics",
    heritage_text1: "At Akshar Construction, we don't just build houses; we engineer sanctuaries. Founded on the principle that aesthetic beauty must be rooted in structural perfection, we bridge the gap between heavy-duty civil engineering and high-end interior design.",
    heritage_text2: "Every project is a testament to meticulous planning, where Er. Uma Maheswari's technical prowess ensures that every beam is placed with precision, and every finish reflects the homeowner's soul. Our approach is holistic—viewing a home as a singular, living organism from foundation to upholstery.",
    founder_name: "Er. Uma Maheswari",
    founder_desc: "With over two decades of experience in structural engineering and a Master's degree in Engineering, Uma Maheswari brings a rare depth of technical knowledge to the world of residential luxury. Her philosophy is simple: a beautiful home is only as good as its engineering foundation.",
    stat_1_number: "20+",
    stat_1_label: "Years Exp",
    stat_2_number: "150+",
    stat_2_label: "Homes Built",
  },
  services: {
    hero_title: "Meticulous Craftsmanship, Engineering Precision.",
    hero_desc: "We bridge the gap between architectural vision and structural reality. Every project at Akshar Construction is a testament to our commitment to durability, aesthetic refinement, and premium living standards.",
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
