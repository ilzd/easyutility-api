const maps = [
  {
    name: "Mirage",
    imageUrl: "https://liquipedia.net/commons/images/thumb/c/cd/CS2_Mirage_A_site_behind_triple.jpg/600px-CS2_Mirage_A_site_behind_triple.jpg",
    minimapUrl: "https://static.wikia.nocookie.net/cswikia/images/1/10/De_mirage_radar.png/revision/latest?cb=20180928185436",
    callouts: [
      {
        calloutId: "mirage_t_spawn",
        name: { en: "T Spawn", pt_BR: "Base TR", es: "Base T" },
      },
      {
        calloutId: "mirage_a_site",
        name: { en: "A Site", pt_BR: "Bomb A", es: "Sitio A" },
      },
      {
        calloutId: "mirage_window",
        name: { en: "Window", pt_BR: "Janela", es: "Ventana" },
      },
    ],
  },
  {
    name: "Inferno",
    imageUrl: "https://images.steamusercontent.com/ugc/2193876107321389670/E0076B0C43D57FC4528BAB444CBBD621EF69C1D7/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    minimapUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Inferno_Minimap_%28CSGO%29.png/250px-Inferno_Minimap_%28CSGO%29.png",
    callouts: [
      {
        calloutId: "inferno_t_spawn",
        name: { en: "T Spawn", pt_BR: "Base TR", es: "Base T" },
      },
      {
        calloutId: "inferno_b_site",
        name: { en: "B Site", pt_BR: "Bomb B", es: "Sitio B" },
      },
      {
        calloutId: "inferno_banana",
        name: { en: "Banana", pt_BR: "Banana", es: "Banana" },
      },
    ],
  },
];

module.exports = maps;