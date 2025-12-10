// this file holds demo data so the ui can feel dynamic without a backend >_< i dont need to make it work yet

export const stats = [
  {
    id: "co2",
    label: "co₂ saved",
    value: 32.4,
    unit: "kg",
    trend: 18,
  },
  {
    id: "distance",
    label: "eco distance",
    value: 54.2,
    unit: "km",
    trend: 9,
  },
  {
    id: "trips",
    label: "green trips",
    value: 21,
    unit: "",
    trend: 0,
  },
  {
    id: "time-outdoors",
    label: "time outdoors",
    value: 7.3,
    unit: "h",
    trend: -4,
  },
];

export const leaderboard = [
  { id: 1, name: "alex p.", city: "central district", level: "leaf tier", co2Saved: 142.8 },
  { id: 2, name: "jamie l.", city: "northside", level: "sprout tier", co2Saved: 128.2 },
  { id: 3, name: "you", city: "campus area", level: "sprout tier", co2Saved: 96.5 },
  { id: 4, name: "riley k.", city: "harbor", level: "seed tier", co2Saved: 75.9 },
];

export const badges = [
  {
    id: 1,
    name: "first step",
    description: "completed your first eco journey.",
    icon: "👣",
    unlocked: true,
    progress: 100,
  },
  {
    id: 2,
    name: "city cyclist",
    description: "cycled 25 km in a week.",
    icon: "🚴‍♀️",
    unlocked: false,
    progress: 60,
  },
  {
    id: 3,
    name: "bus buddy",
    description: "used public transport 10 times.",
    icon: "🚌",
    unlocked: false,
    progress: 20,
  },
  {
    id: 4,
    name: "co₂ saver",
    description: "saved 50 kg of co₂.",
    icon: "🌱",
    unlocked: true,
    progress: 100,
  },
];

export const trips = [
  {
    id: 1,
    from: "home",
    to: "campus",
    mode: "cycling",
    date: "mon · 08:15",
    distance: 4.8,
    co2Saved: 0.9,
    note: "nice weather, avoided morning traffic.",
  },
  {
    id: 2,
    from: "campus",
    to: "central station",
    mode: "public transport",
    date: "sun · 18:40",
    distance: 6.2,
    co2Saved: 1.4,
    note: "used tram instead of car for weekend trip.",
  },
  {
    id: 3,
    from: "home",
    to: "local market",
    mode: "walking",
    date: "sat · 11:05",
    distance: 1.2,
    co2Saved: 0.3,
    note: "short walk, tracked steps and calories.",
  },
  {
    id: 4,
    from: "library",
    to: "home",
    mode: "cycling",
    date: "fri · 20:10",
    distance: 3.1,
    co2Saved: 0.6,
    note: "night ride with bike lights, low traffic.",
  },
];
