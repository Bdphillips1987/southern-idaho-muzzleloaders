export type Post = {
  slug: string;
  title: string;
  date: string;
  kicker: string;
  dek: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "free-try-in-shoshone",
    title: "Come try a shot. The club said the first one is free.",
    date: "October 14, 2026",
    kicker: "Shoshone",
    dek: "From the club meeting: if you have never shot a muzzleloader, you can come out and try it without paying for the shots.",
    paragraphs: [
      "The club is the Magic Valley: Shoshone and Twin Falls. Public directories still show the Twin Falls mailing address, P.O. Box 6027. There is no street number on this site.",
      "At the meeting, the club said they will let a new person shoot for free if they come out and try it. Call Leon Reed at 208-423-4788 before you go, so he knows you are coming and can tell you whether a rifle will be on the line for you.",
      "The monthly shoot is still the last Saturday. The next one is October 31, 2026. Free does not mean unannounced. It means you should not stay home because you think you have to buy a gun and pay dues before you are allowed to see what the smoke is like.",
    ],
  },
  {
    slug: "what-a-muzzleloader-needs",
    title: "The short list of what a muzzleloader actually needs.",
    date: "October 14, 2026",
    kicker: "Gear",
    dek: "A rifle loaded from the front, loose powder, a patched round ball, and something to make the spark. Plus eyes and ears.",
    paragraphs: [
      "Older shooters already own this pile. Newer ones should not have to guess it from a catalog. The gear page shows the basic pieces: the gun, the horn, balls and patches, a measure, flints or caps, and modern eye and ear protection.",
      "You do not need all of it to stand behind the line the first time. You need it once you decide the sport is yours. Until then, ask on the phone. Do not pour a charge because a website showed you a picture of a measure.",
      "The pictures are reference scenes of the kind of tools, not the club’s property and not a shopping list with prices. Prices change. Leon knows what the line is actually using.",
    ],
  },
  {
    slug: "valley-notes-october",
    title: "Valley notes: Shoshone on the 31st, Twin Falls just packed Main.",
    date: "October 14, 2026",
    kicker: "Magic Valley",
    dek: "The blog is for the club’s shoots and for what is happening around Shoshone and Twin Falls. Here is the first one.",
    paragraphs: [
      "Downtown Twin Falls ran Oktoberfest on Main at the start of the month. KMVT reported the streets packed on the final Saturday, October 3, with music, food, and families. That is the crowd this club is trying to talk to: people who already go out together.",
      "The muzzleloader day is not downtown. It is the last Saturday, in Shoshone. October 31. If you are already in Twin Falls for the month’s other plans, Shoshone is the short drive north, not a different state.",
      "This page is meant to be kept up. Club news goes here, and so do short notes on the valley when they are real and sourced. It will not invent a festival to fill a Tuesday.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
