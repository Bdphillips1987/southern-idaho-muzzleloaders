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
      "At the meeting, the club said they will let a new person shoot for free if they come out and try it. Call Leon Reed at 208-423-4788 before you go. Tell him you are new. Ask whether a rifle will be on the line for you. This site does not promise one.",
      "The monthly shoot is the last Saturday. The October shoot, when this note was written, is October 31, 2026. Later months follow the same rule. The events page keeps the dates.",
      "Free does not mean unannounced. It means you should not stay home because you think you have to buy a gun and pay dues before you are allowed to see what the smoke is like. Leon tells people the dues number. It is not posted here.",
      "Read the safety page before you come. Eyes and ears. Stay behind the line until you are invited up. The person running the line that day has the last word.",
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
      "A flintlock makes the spark with a sharp flint against steel. A percussion gun makes it with a cap on the nipple. Both load from the muzzle. Both belong at this club.",
      "You do not need the whole pile to stand behind the line the first time. You need it once you decide the sport is yours. Until then, ask on the phone. Do not pour a charge because a website showed you a picture of a measure.",
      "Do not use smokeless powder in a muzzleloader built for black powder. Do not take a load from a webpage. If you have a rifle, ask someone who knows that rifle what charge it uses, and write it down.",
      "The pictures are scenes made for the site. They are not the club’s property, and not a shopping list with prices. Prices change. Leon knows what the line is actually using.",
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
      "The muzzleloader day is not downtown. It is the last Saturday, in Shoshone. October 31. If you are already in Twin Falls for the month’s other plans, Shoshone is the short drive north, in the same Magic Valley. Lincoln County and Twin Falls County are both in it.",
      "Shoshone sits in Lincoln County. Twin Falls is the next county over. Mail for the club still goes to P.O. Box 6027, Twin Falls, ID 83303-6027. The shooting location the club named is Shoshone. No street address is published here.",
      "This page is meant to be kept up. Club news goes here, and so do short notes on the valley when they are real and sourced. It will not invent a festival to fill a Tuesday.",
    ],
  },
  {
    slug: "flintlock-and-percussion",
    title: "Flintlock and percussion. Two sparks, one slow sport.",
    date: "October 22, 2026",
    kicker: "The guns",
    dek: "A plain account of the two traditional locks the club shoots. No catalog. No costume.",
    paragraphs: [
      "For a long time, a gun loaded from the front. Powder down the bore. A ball on top. Something to light it. That is a muzzleloader. The club keeps that skill in the Magic Valley.",
      "A flintlock carries a piece of flint in the cock. The cock falls, the flint strikes steel, and sparks drop into a small pan of powder. The flash runs through a touch hole and lights the charge behind the ball. Fur-trade rifles were flintlocks. People still shoot them because they like the older way.",
      "Percussion came in the early 1800s. A small copper cap sits on a nipple. The hammer crushes the cap, and the flame goes to the charge. It is surer when the weather is damp. It is still loaded from the muzzle. It is still traditional.",
      "Southern Idaho Muzzleloaders shoots both. You do not have to pick a century before you call. Tell Leon what you have, or that you have nothing yet. A first try is free when you call first. He can say whether a rifle will be there. This page will not promise one.",
      "Neither lock is a hurry. You measure. You seat the ball. You wait for the line. The smoke is part of the shot. That is the whole idea.",
    ],
  },
  {
    slug: "a-first-saturday",
    title: "What a first Saturday feels like.",
    date: "October 22, 2026",
    kicker: "A first visit",
    dek: "The pace of a monthly shoot, as far as a website can say it. The time of day still comes from Leon.",
    paragraphs: [
      "You call Leon Reed before you drive. The club is private. A map search will not put you on the line. The shooting is in Shoshone. The start time is not on this site.",
      "When you arrive, you find the person running the line before you uncase a rifle. You do not load, cap, or prime until that person says so. Guests stay behind the shooters. The boom is real.",
      "A shot takes a while. Powder is measured. A cloth patch wraps a round ball. The ball is seated. Then one careful shot, and a cloud of smoke. Nobody steps forward to see a target until the line is stopped.",
      "Between shots, people talk. It is closer to a camp than to a drill. Bring eyes and ears even if you only came to watch. Closed shoes. A patient mood.",
      "Families who want to come should say so on the phone. The club has not published a written rule about children, so ask Leon rather than guessing. If you have never shot one of these, the club said the first try can be free. Call first.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
