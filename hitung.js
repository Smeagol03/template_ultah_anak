simplyCountdown(".my-countdown", {
  year: 2028, // Target year (required)
  month: 5, // Target month [1-12] (required) - Mei adalah bulan ke-5
  day: 20, // Target day [1-31] (required)
  hours: 14, // Target hour [0-23], default: 0
  minutes: 0, // Target minute [0-59], default: 0
  seconds: 0, // Target second [0-59], default: 0
  words: {
    // Custom labels in Bahasa Indonesia
    days: { root: "hari", lambda: (root, n) => root },
    hours: { root: "jam", lambda: (root, n) => root },
    minutes: {
      root: "menit",
      lambda: (root, n) => root,
    },
    seconds: {
      root: "detik",
      lambda: (root, n) => root,
    },
  },
});
