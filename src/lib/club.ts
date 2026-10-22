export const club = {
  name: "Southern Idaho Muzzleloaders",
  legalName: "Southern Idaho Muzzle Loaders Inc.",
  facebookName: "Southern Idaho Muzzleloaders Association, Inc.",
  place: "Magic Valley",
  towns: "Shoshone and Twin Falls",
  contact: "Leon Reed",
  phoneDisplay: "208-423-4788",
  phoneTel: "+12084234788",
  mailing: ["P.O. Box 6027", "Twin Falls, ID 83303-6027"],
  facebook: "https://www.facebook.com/SouthernIdahoMuzzleloadersAssociation",
  isrpa:
    "https://idahosrpa.org/location_detail?uuid=9e3c12e2-ad6c-44c0-86f8-27945751a52b",
  idfg: "https://idfg.idaho.gov/hunt/weapons/muzzleloader",
  mission:
    "We preserve and practice the skills of the fur-trade era — flintlock and percussion, the slow way of shooting.",
  shareDescription:
    "Traditional flintlock and percussion shooting in the Magic Valley — Shoshone and Twin Falls. Last Saturday of the month. A first visit is free when you call Leon Reed first.",
  shareImage: "https://southern-idaho-muzzleloaders.alpine-premier-relay.workers.dev/og.jpg",
} as const;

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Last Saturday of a given month. `month` is 0-indexed. */
export function lastSaturday(year: number, month: number): Date {
  const last = new Date(year, month + 1, 0);
  const back = (last.getDay() + 1) % 7;
  return new Date(year, month, last.getDate() - back);
}

export function upcomingShoots(count = 6, from = new Date()): Date[] {
  const shoots: Date[] = [];
  let year = from.getFullYear();
  let month = from.getMonth();
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());

  while (shoots.length < count) {
    const day = lastSaturday(year, month);
    if (day >= today) shoots.push(day);
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
  return shoots;
}

export function formatShoot(date: Date): string {
  return `${WEEKDAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const photos = [
  {
    src: "/photos/canyon-camp.jpg",
    title: "Canyon camp",
    alt: "Flintlock rifle and powder horn on a wool blanket beside a canvas tent in Snake River canyon country",
    caption: "Scene made for the site. Not a club photograph.",
  },
  {
    src: "/photos/flintlock.jpg",
    title: "Lock, horn, and leather",
    alt: "Close view of a flintlock lock, brass furniture, and a plain powder horn on leather",
    caption: "Scene made for the site. Not a club photograph. Flint, brass, and horn.",
  },
  {
    src: "/photos/campfire.jpg",
    title: "After the line goes cold",
    alt: "Campfire with a tin cup, shooting pouch, round balls, and percussion caps",
    caption: "Scene made for the site. Not a club photograph. Round balls, patches, and caps.",
  },
  {
    src: "/photos/range-smoke.jpg",
    title: "Smoke on the line",
    alt: "Black powder smoke drifting across a sagebrush shooting line",
    caption: "Scene made for the site. Not a club photograph. Faces here are not members.",
  },
  {
    src: "/photos/loading.jpg",
    title: "Charge and patch",
    alt: "Hands pouring powder from a brass measure into a flintlock muzzle",
    caption: "Scene made for the site. Not a club photograph. The slow part is the sport.",
  },
  {
    src: "/photos/family-camp.jpg",
    title: "Room on the blanket",
    alt: "A canvas camp in the sagebrush, people watching smoke from far behind",
    caption: "Scene made for the site. Not a club photograph, and not a picture of members.",
  },
] as const;
