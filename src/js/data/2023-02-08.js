dataSetVersion = "2023-02-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "game",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
      { name: "Mega Man", key: "mm1" },
      { name: "Mega Man 2", key: "mm2" },
      { name: "Mega Man 3", key: "mm3" },
      { name: "Mega Man 4", key: "mm4" },
      { name: "Mega Man 5", key: "mm5" },
      { name: "Mega Man 6", key: "mm6" },
      { name: "Mega Man 7", key: "mm7" },
      { name: "Mega Man 8", key: "mm8" },
      { name: "Mega Man 9", key: "mm9" },
      { name: "Mega Man 10", key: "mm10" },
      { name: "Mega Man 11", key: "mm11" },
      { name: "Mega Man: Dr. Wily's Revenge", key: "mmi" },
      { name: "Mega Man II", key: "mmii" },
      { name: "Mega Man III", key: "mmiii" },
      { name: "Mega Man IV", key: "mmiv" },
      { name: "Mega Man V", key: "mmv" },
      { name: "Mega Man DOS", key: "mmd" },
      { name: "Mega Man DOS 3", key: "mmd3" },
      { name: "Wily Tower", key: "mmwt" },
      { name: "Mega Man & Bass", key: "mmb" },
      { name: "Mega Man & Bass: Challenger from the Future", key: "mmb2" },
	  { name: "Mega Man Powered Up", key: "mmpu" },
      { name: "Super Adventure Rockman", key: "sar" },
      { name: "Rockman Strategy", key: "rms" },
    ]
  },
  {
    name: "Filter by Character Category",
    key: "cat",
    tooltip: "Check this to restrict to characters that fall under specific categories.",
    checked: false,
    sub: [ 
	{ name: "Main Characters", key: "mc" }, 
	{ name: "Robot Masters", key: "rm" }, 
	{ name: "Mega Man Killers & Similar", key: "mmk" },
    ]
  },
];


dataSet[dataSetVersion].characterData = [
  {
    name: "Mega Man",
    img: "vEf5QEx.png",
    opts: {
      game: [ "mm1","mm2","mm3","mm4","mm5","mm6","mm7","mm8","mm9","mm10","mm11","mmd","mmi","mmii","mmiii","mmiv","mmv","mmd3","mmwt","mmb","sar","mmb2","rms","mmpu"],
      cat: ["mc"]
    }
  },
  {
    name: "Proto Man",
    img: "oChNchW.png",
    opts: {
      game: ["mm3","mmpu","mm4","mm5","mm6","mm7","mm8","mmb","mm9","mm10","mmiv","mmv","sar","rms"],
      cat: ["mc"]
    }
  },
  {
    name: "Bass",
    img: "JtOt2ZY.png",
    opts: {
      game: [ "mm7","mm8","mmb","mmb2","mm10"],
      cat: ["mc"]
    }
  },
  {
    name: "Roll",
    img: "S9sFGpD.png",
    opts: {
      game: ["mm1","mm3","mm4","mmv","mm7","mm8","mmb","mm9","mm10","mm11","mmb2","mmpu","sar","rms"],
      cat: ["mc"]
    }
  },
  {
    name: "Auto",
    img: "kYzlKGf.png",
    opts: {
      game: ["mm7","mm8","mmb","mm9","mm10","mm11","mmb2","rms"],
      cat: ["mc"]
    }
  },
  {
    name: "Duo",
    img: "g5v1L2i.png",
    opts: {
      game: ["mm8","rms"],
      cat: ["mc"]
    }
  },
  {
    name: "Fan",
    img: "DzQ7WlD.png",
    opts: {
      game: ["rms"],
      cat: ["mc"]
    }
  },
  {
    name: "Cut Man",
    img: "RyLE7sb.png",
    opts: {
      game: ["mm1"],
      cat: ["rm"]
    }
  },
  {
    name: "Guts Man",
    img: "DtO6dc2.png",
    opts: {
      game: ["mm1"],
      cat: ["rm"]
    }
  },
  {
    name: "Bomb Man",
    img: "i6Uc9no.png",
    opts: {
      game: ["mm1"],
      cat: ["rm"]
    }
  },
  {
    name: "Elec Man",
    img: "QTqWb3E.png",
    opts: {
      game: ["mm1"],
      cat: ["rm"]
    }
  },
  {
    name: "Fire Man",
    img: "kvYf7CV.png",
    opts: {
      game: ["mm1"],
      cat: ["rm"]
    }
  },
  {
    name: "Ice Man",
    img: "l3N0sku.png",
    opts: {
      game: ["mm1"],
      cat: ["rm"]
    }
  },
  {
    name: "Metal Man",
    img: "6QzaTc9.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Wood Man",
    img: "xjrFCL4.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Flash Man",
    img: "aRPq6HL.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Air Man",
    img: "xburZeU.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Bubble Man",
    img: "xUK5uX2.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Heat Man",
    img: "wBOamRh.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Crash Man",
    img: "0JgAjOv.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Quick Man",
    img: "j9l0XfT.png",
    opts: {
      game: ["mm2"],
      cat: ["rm"]
    }
  },
  {
    name: "Hard Man",
    img: "YdhrkBJ.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Snake Man",
    img: "ofH5iVg.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Magnet Man",
    img: "ERDUpG5.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Top Man",
    img: "kV8kwGW.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Shadow Man",
    img: "nE50EbG.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Spark Man",
    img: "wfnRLt4.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Needle Man",
    img: "5HlCTqC.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Gemini Man",
    img: "h1ILJyS.png",
    opts: {
      game: ["mm3"],
      cat: ["rm"]
    }
  },
  {
    name: "Pharaoh Man",
    img: "EduzjbD.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Toad Man",
    img: "6btydKm.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Ring Man",
    img: "dCZo0Pj.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Dust Man",
    img: "obo7mP6.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Skull Man",
    img: "rJea5oy.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Dive Man",
    img: "2mpO8mn.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Drill Man",
    img: "f0tkFQn.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Bright Man",
    img: "ASyLGYt.png",
    opts: {
      game: ["mm4"],
      cat: ["rm"]
    }
  },
  {
    name: "Gravity Man",
    img: "ti6oMhQ.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Gyro Man",
    img: "xr30W5T.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Napalm Man",
    img: "nJaQEgl.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Stone Man",
    img: "KKWPFnu.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Charge Man",
    img: "IaLaFFS.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Wave Man",
    img: "QsSIIfV.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Star Man",
    img: "URNcRG9.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Crystal Man",
    img: "L9L69rT.png",
    opts: {
      game: ["mm5"],
      cat: ["rm"]
    }
  },
  {
    name: "Yamato Man",
    img: "tbvGvuM.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Plant Man",
    img: "RCieP50.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Tomahawk Man",
    img: "Iz6qnpW.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Centaur Man",
    img: "1ei6asQ.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Knight Man",
    img: "XIKEVPr.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Wind Man",
    img: "zHLSfhg.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Flame Man",
    img: "tNmdmlz.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Blizzard Man",
    img: "fq1d741.png",
    opts: {
      game: ["mm6"],
      cat: ["rm"]
    }
  },
  {
    name: "Junk Man",
    img: "UCIZynC.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Freeze Man",
    img: "6NPqmRF.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Slash Man",
    img: "xUEUIdl.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Spring Man",
    img: "XkKLVJ0.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Shade Man",
    img: "sd65irM.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Turbo Man",
    img: "Ua0Fn3A.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Burst Man",
    img: "GR6imfI.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Cloud Man",
    img: "UYRwoXO.png",
    opts: {
      game: ["mm7"],
      cat: ["rm"]
    }
  },
  {
    name: "Aqua Man",
    img: "8hrL4l7.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Sword Man",
    img: "9KmD7f4.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Search Man",
    img: "XjBOsRC.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Astro Man",
    img: "pe16Gjq.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Clown Man",
    img: "mThPVBo.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Grenade Man",
    img: "RtCbXKT.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Frost Man",
    img: "3WPabZ6.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Tengu Man",
    img: "YxL2wje.png",
    opts: {
      game: ["mm8"],
      cat: ["rm"]
    }
  },
  {
    name: "Concrete Man",
    img: "VAtYBZU.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Galaxy Man",
    img: "rlcAXfV.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Jewel Man",
    img: "CDSn5f6.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Plug Man",
    img: "8TZ6qFa.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Tornado Man",
    img: "MFzx9lL.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Magma Man",
    img: "jzpBKV0.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Hornet Man",
    img: "wTJfp38.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Splash Woman",
    img: "W9csCvW.png",
    opts: {
      game: ["mm9"],
      cat: ["rm"]
    }
  },
  {
    name: "Commando Man",
    img: "3RTXaai.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Blade Man",
    img: "fBcRNPg.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Strike Man",
    img: "6Xt2k1d.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Sheep Man",
    img: "RKw8l1k.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Pump Man",
    img: "iwrTez2.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Solar Man",
    img: "dyDDQdk.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Chill Man",
    img: "bUeI4fC.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Nitro Man",
    img: "MOeQKy2.png",
    opts: {
      game: ["mm10"],
      cat: ["rm"]
    }
  },
  {
    name: "Block Man",
    img: "fedXBI6.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Acid Man",
    img: "afuWBEv.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Impact Man",
    img: "y5bHEly.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Bounce Man",
    img: "jgZKAsy.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Fuse Man",
    img: "t4yErmy.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Tundra Man",
    img: "OMcTrqL.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Torch Man",
    img: "Mo2RXzK.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Blast Man",
    img: "Y7yempZ.png",
    opts: {
      game: ["mm11"],
      cat: ["rm"]
    }
  },
  {
    name: "Cold Man",
    img: "KlSQrtN.png",
    opts: {
      game: ["mmb"],
      cat: ["rm"]
    }
  },
  {
    name: "Burner Man",
    img: "rLNfvKO.png",
    opts: {
      game: ["mmb"],
      cat: ["rm"]
    }
  },
  {
    name: "Pirate Man",
    img: "LlUwGvv.png",
    opts: {
      game: ["mmb"],
      cat: ["rm"]
    }
  },
  {
    name: "Ground Man",
    img: "bTvuJ4V.png",
    opts: {
      game: ["mmb"],
      cat: ["rm"]
    }
  },
  {
    name: "Magic Man",
    img: "unwpASt.png",
    opts: {
      game: ["mmb"],
      cat: ["rm"]
    }
  },
  {
    name: "Dynamo Man",
    img: "CbIGRbp.png",
    opts: {
      game: ["mmb"],
      cat: ["rm"]
    }
  },
  {
    name: "Sonic Man",
    img: "dbDDqv4.png",
    opts: {
      game: ["mmd"],
      cat: ["rm"]
    }
  },
  {
    name: "Dyna Man",
    img: "eDShRgj.png",
    opts: {
      game: ["mmd"],
      cat: ["rm"]
    }
  },
  {
    name: "Volt Man",
    img: "DWpkK8h.png",
    opts: {
      game: ["mmd"],
      cat: ["rm"]
    }
  },
  {
    name: "Oil Man (DOS)",
    img: "YQE9SMk.png",
    opts: {
      game: ["mmd3"],
      cat: ["rm"]
    }
  },
  {
    name: "Torch Man (DOS)",
    img: "A5C2ASI.png",
    opts: {
      game: ["mmd3"],
      cat: ["rm"]
    }
  },
  {
    name: "Wave Man (DOS)",
    img: "H4Z9Rek.png",
    opts: {
      game: ["mmd3"],
      cat: ["rm"]
    }
  },
  {
    name: "Shark Man",
    img: "g2aocU7.png",
    opts: {
      game: ["mmd3"],
      cat: ["rm"]
    }
  },
  {
    name: "Blade Man (DOS)",
    img: "6wQIANc.png",
    opts: {
      game: ["mmd3"],
      cat: ["rm"]
    }
  },
  {
    name: "Bit Man",
    img: "aEH6dSD.png",
    opts: {
      game: ["mmd3"],
      cat: ["rm"]
    }
  },
  {
    name: "Mercury",
    img: "Sxt6U13.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Venus",
    img: "h9PlLcR.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Mars",
    img: "CRvtk89.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Jupiter",
    img: "Qkt9AJa.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Saturn",
    img: "blvjwrH.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Uranus",
    img: "JXtFt3t.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Neptune",
    img: "CzUrTvD.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Pluto",
    img: "6GLCtK4.png",
    opts: {
      game: ["mmv"],
      cat: ["rm"]
    }
  },
  {
    name: "Aquarius",
    img: "76elAun.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Aries",
    img: "1rP4Yi4.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Cancer",
    img: "nFr9l15.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Capricorn",
    img: "KzqZ8vy.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Gemini",
    img: "wz5WFcg.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Leo",
    img: "dV4FMc2.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Libra",
    img: "XUod5zr.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Pisces",
    img: "RMRQ1g8.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Virgo",
    img: "tnJvpWv.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Sagittarius",
    img: "pqHfoFO.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Scorpio",
    img: "2Ko1Sn1.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Tauros",
    img: "suEIqaV.png",
    opts: {
      game: ["rms"],
      cat: ["rm"]
    }
  },
  {
    name: "Time Man",
    img: "QDb8vBB.png",
    opts: {
      game: ["mmpu"],
      cat: ["rm"]
    }
  },
  {
    name: "Oil Man",
    img: "dL1by9V.png",
    opts: {
      game: ["mmpu"],
      cat: ["rm"]
    }
  },
  {
    name: "Aircon Man",
    img: "r0a1doM.png",
    opts: {
      game: ["mmb2"],
      cat: ["rm"]
    }
  },
  {
    name: "Clock Men",
    img: "WAtiZKh.png",
    opts: {
      game: ["mmb2"],
      cat: ["rm"]
    }
  },
  {
    name: "Compass Man",
    img: "pC0jEC8.png",
    opts: {
      game: ["mmb2"],
      cat: ["rm"]
    }
  },
  {
    name: "Dangan Man",
    img: "e2HRBlK.png",
    opts: {
      game: ["mmb2"],
      cat: ["rm"]
    }
  },
  {
    name: "Komuso Man",
    img: "XR9Ycbz.png",
    opts: {
      game: ["mmb2"],
      cat: ["rm"]
    }
  },
  {
    name: "Konro Man",
    img: "AaswVWM.png",
    opts: {
      game: ["mmb2"],
      cat: ["rm"]
    }
  },
  {
    name: "Apollo",
    img: "dOPuZ7N.png",
    opts: {
      game: ["rms"],
      cat: ["mmk"]
    }
  },
  {
    name: "Ballade",
    img: "7ZjLEFy.png",
    opts: {
      game: ["mmiv","mmv","mm10"],
      cat: ["mmk"]
    }
  },
  {
    name: "Buster Rod G",
    img: "O7p7Pdj.png",
    opts: {
      game: ["mmwt"],
      cat: ["mmk"]
    }
  },
  {
    name: "Mega Water S",
    img: "Zw0HwDT.png",
    opts: {
      game: ["mmwt"],
      cat: ["mmk"]
    }
  },
  {
    name: "Hyper Storm H",
    img: "WnPU2fB.png",
    opts: {
      game: ["mmwt"],
      cat: ["mmk"]
    }
  },
  {
    name: "Dark Man 1",
    img: "Rnx271t.png",
    opts: {
      game: ["mm5"],
      cat: ["mmk"]
    }
  },
  {
    name: "Dark Man 2",
    img: "8UvTKPy.png",
    opts: {
      game: ["mm5"],
      cat: ["mmk"]
    }
  },
  {
    name: "Dark Man 3",
    img: "VhziEZY.png",
    opts: {
      game: ["mm5"],
      cat: ["mmk"]
    }
  },
  {
    name: "Dark Man 4",
    img: "6vH5evk.png",
    opts: {
      game: ["mm5"],
      cat: ["mmk"]
    }
  },
  {
    name: "Doc Robot",
    img: "2NIZAC0.png",
    opts: {
      game: ["mm3"],
      cat: ["mmk"]
    }
  },
  {
    name: "Evil Robot",
    img: "I4kpQxW.png",
    opts: {
      game: ["mm8"],
      cat: ["mmk"]
    }
  },
  {
    name: "Fake Man",
    img: "RWWkzgd.png",
    opts: {
      game: ["mm9"],
      cat: ["mmk"]
    }
  },
  {
    name: "King",
    img: "eK8Lx7P.png",
    opts: {
      game: ["mmb"],
      cat: ["mmk"]
    }
  },
  {
    name: "Luna",
    img: "nCFbYfw.png",
    opts: {
      game: ["rms"],
      cat: ["mmk"]
    }
  },
  {
    name: "Mega Man?",
    img: "NThG75K.png",
    opts: {
      game: ["mmpu"],
      cat: ["mmk"]
    }
  },
  {
    name: "Punk",
    img: "YPP6lXN.png",
    opts: {
      game: ["mmiii","mmv","mm10"],
      cat: ["mmk"]
    }
  },
  {
    name: "Quint",
    img: "9IGWBlY.png",
    opts: {
      game: ["mmii","mmv"],
      cat: ["mmk"]
    }
  },
  {
    name: "Ra Thor",
    img: "gRBY6t3.png",
    opts: {
      game: ["sar"],
      cat: ["mmk"]
    }
  },
  {
    name: "Rockman Shadow",
    img: "N9bpwc3.png",
    opts: {
      game: ["mmb2"],
      cat: ["mmk"]
    }
  },
  {
    name: "Sunstar",
    img: "t4DxXpa.png",
    opts: {
      game: ["mmv"],
      cat: ["mmk"]
    }
  },
  {
    name: "Terra",
    img: "IbN1voT.png",
    opts: {
      game: ["mmv"],
      cat: ["mmk"]
    }
  },
  {
    name: "Enker",
    img: "DUez7Ly.png",
    opts: {
      game: ["mmi","mmv","mm10"],
      cat: ["mmk"]
    }
  }
];
