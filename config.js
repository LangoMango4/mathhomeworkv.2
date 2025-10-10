/* ===========================
   MyMathsHomework – CONFIG
   (PLAINTEXT passwords)
   =========================== */
window.MMHC = {
  app: {
    // If your site is https://USERNAME.github.io/REPO/, set "/REPO".
    // Leave null to auto-detect.
    repoBaseOverride: null,
    showUpdateLog: true,
    currentVersion: "2.14"
  },

  // Simple PINs
  pins: {
    user:  ["24680"],
    admin: ["14312"]
  },

  // Accounts with PLAINTEXT passwords (front-end visible)
  accounts: [
    { username: "admin",   password: "admin123", role: "admin" },
    { username: "student", password: "user123",  role: "user"  }
  ],

  // Map normalized key -> EXACT filename in /Sounds (case-sensitive on GitHub Pages)
  sounds: {
    androidbeep:  "androidbeep.mp3",
    backintheday: "backintheday.mp3",
    bingchilling: "bingchilling.mp3",
    clashroyal:   "clashroyal.mp3",
    crickets:     "crickets.mp3",
    fail:         "fail.mp3",
    getout:       "getout.mp3",
    goofyahhsounds:"goofyahhsounds.mp3",
    hogrida:      "hogrida.mp3",
    incorrectbuzzer:"incorrectbuzzer.mp3",
    italianbrainrot:"italianbrainrot.mp3",
    legobreak:    "legobreak.mp3",
    lionsleep:    "lionsleep.mp3",
    metalpipe:    "metalpipe.mp3",
    ohio:         "ohio.mp3",
    rahhh:        "rahhh.mp3",
    shutup:       "shutup.mp3",
    text:         "text.mp3",
    vineboom:     "vineboom.mp3",
    whatthesigma: "whatthesigma.mp3"
  },

  // Optional tuning
  soundMeta: {
    vineboom: { volume: 0.9 },
    metalpipe:{ volume: 0.9 },
    crickets: { volume: 0.7, maxDuration: 10 }
  },

  // Player defaults
  player: { defaultVolume: 1.0, stopPrevious: true }
};
