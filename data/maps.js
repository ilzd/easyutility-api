const maps = [
  {
    name: "Mirage",
    imageUrl: "/images/maps/mirage.png",
    minimapUrl: "/images/maps/mirage_minimap.png",
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
    imageUrl: "/images/maps/inferno.png",
    minimapUrl: "/images/maps/inferno_minimap.png",
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