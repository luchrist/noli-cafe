import { CafeConfig } from "./types";

const cafe: CafeConfig = {
  name: "Noli Café",
  phone: "",
  email: "",
  instagram: "@nolicafecart",
  openingHours: [
    { label: "Montag", times: "Geschlossen" },
    { label: "Dienstag", times: "08:30 – 13:00 Uhr" },
    { label: "Mittwoch", times: "Geschlossen" },
    { label: "Donnerstag", times: "08:30 – 13:00 Uhr" },
    { label: "Freitag", times: "08:30 – 13:00 Uhr" },
    { label: "Samstag", times: "09:00 – 16:00 Uhr" },
    { label: "Sonntag", times: "09:00 – 13:00 Uhr" },
  ],
  philosophy: {
    headline: "Klingeln. Plaudern. Genießen.",
    text: "Unser kleiner orangefarbener Kaffeewagen steht unter dem Magnolienbaum eines denkmalgeschützten Arbeiterhäuschens in der Ebertstraße. Wer an der Klingel zieht, bekommt frisch zubereiteten Specialty Coffee, einen Matcha aus der Rocket-Maschine oder ein Croissant von der Bäckerei Dannemann nebenan. Hafermilch gibt es immer, Eisgetränke seit diesem Sommer, und dazu ein Plausch wie beim Nachbarn um die Ecke.",
    slogan: "Fresh coffee to go. Made next door.",
  },
  menu: [
    {
      name: "Kaffee",
      icon: "coffee",
      items: [
        { name: "Espresso", price: "2,80 €" },
        { name: "Doppio", price: "3,80 €" },
        { name: "Espresso Macchiato", price: "3,20 €" },
        { name: "Cortado", price: "3,40 €" },
        { name: "Cappuccino", price: "3,90 €", tags: ["Beliebt"] },
        { name: "Hafer Cappuccino", price: "4,20 €" },
        { name: "Flat White", price: "4,50 €" },
        { name: "Latte Macchiato", price: "4,50 €" },
        { name: "Americano", price: "3,90 €" },
        { name: "Tagesfilter", price: "3,90 €" },
        { name: "Hand Brew", price: "5,90 €" },
      ],
    },
    {
      name: "Specials",
      icon: "specials",
      items: [
        { name: "Matcha Latte", price: "5,50 €", tags: ["Beliebt"] },
        { name: "Dirty Matcha Latte", price: "5,90 €" },
        { name: "Chai Latte", price: "4,50 €" },
        { name: "Dirty Chai Latte", price: "4,90 €" },
        { name: "Caramel Macchiato", price: "4,90 €" },
        { name: "Kakao", price: "4,00 €" },
        { name: "Chococcino", price: "4,50 €" },
        { name: "Grüner Tee", price: "4,00 €" },
        { name: "Earl Grey", price: "4,00 €" },
        { name: "Minztee", price: "4,00 €" },
      ],
    },
    {
      name: "Iced Drinks",
      icon: "iced",
      items: [
        { name: "Iced Cappuccino", price: "4,90 €" },
        { name: "Iced Latte", price: "4,90 €" },
        { name: "Iced Americano", price: "4,90 €" },
        { name: "Iced Flat White", price: "4,90 €" },
        { name: "Iced Matcha Latte", price: "5,90 €", tags: ["Beliebt"] },
        { name: "Iced Dirty Matcha Latte", price: "6,50 €" },
        { name: "Iced Chai Latte", price: "4,90 €" },
        { name: "Iced Caramel Macchiato", price: "5,90 €" },
        { name: "Cold Brew", price: "4,60 €" },
        { name: "Homemade Iced Tea", price: "4,50 €" },
        { name: "Espresso On Vanilla", price: "4,90 €" },
      ],
    },
    {
      name: "Süßes vom Nachbar",
      icon: "sweets",
      items: [
        {
          name: "Croissants von Bäckerei Dannemann",
          description:
            "Frisch aus der Backstube nebenan. Solange der Vorrat reicht.",
        },
        {
          name: "Süßes Gebäck der Saison",
          description:
            "Wechselnde Kleinigkeiten, passend zum Kaffee.",
        },
      ],
    },
  ],
  dishes: [
    { name: "Hafer Cappuccino", image: "/assets/acquisition/dishes/kaffee-mit-herz-latte-art-01.jpg" },
    { name: "Iced Latte", image: "/assets/acquisition/dishes/eiskaffee-mit-zimt-01.jpg" },
    { name: "Flat White", image: "/assets/acquisition/dishes/latte-mit-herz-kunst-01.jpg" },
    { name: "Cappuccino", image: "/assets/acquisition/dishes/kaffee-mit-latte-art-01.jpg" },
    { name: "Kaffee mit Latte Art", image: "/assets/acquisition/dishes/kaffee-mit-latte-art-02.jpg" },
    { name: "Coffee to go", image: "/assets/acquisition/dishes/kaffeebecher-mit-latte-art-01.jpg" },
    { name: "Hafer Cappuccino", image: "/assets/acquisition/dishes/kaffee-mit-herz-latte-art-01.jpg" },
    { name: "Iced Latte", image: "/assets/acquisition/dishes/eiskaffee-mit-zimt-01.jpg" },
  ],
  reviews: [
    {
      name: "Katja Weichsel",
      rating: 5,
      text: "Das Konzept des Café Noli ist überraschend einfach und setzt einen Höhepunkt in den Alltag. Ein hübscher Caféstand unter dem Magnolienbaum eines denkmalgeschützten Arbeiterhäuschens ist der Hingucker der ruhigen Straße, nur wenige Gehminuten vom Bahnhof entfernt. Mehrmals die Woche hat es geöffnet, und durch das Betätigen einer Klingel erscheinen die sympathischen Cafébetreiber. Der Kaffee ist delikat, und auch nicht-Kaffee-Trinker kommen mit einem leckeren Kakao oder Matcha auf ihre Kosten.",
      date: "in der letzten Woche",
    },
    {
      name: "Mary",
      rating: 5,
      text: "Der kleine orangefarbene Kaffee-Stand „Noli\" unter dem Magnolienbaum ist einfach zauberhaft. So unscheinbar und doch etwas ganz Besonderes. Der Cappuccino war fantastisch, mit viel Liebe gemacht und perfekt für einen kleinen Genussmoment unterwegs. Eine richtig schöne Idee, die den Tag ein bisschen schöner macht.",
      date: "vor einem Monat",
    },
    {
      name: "Joseph S.",
      rating: 5,
      text: "Das Noli Café wird von einer total sympathischen jungen Familie betrieben. Sie verkaufen Coffee to Go direkt vor der Haustür. Der Kaffee-Wagen ist echt cool und die verschiedenen Getränke super lecker. Seit heute gibt's auch Iced Getränke. Natürlich gibt's alles auch mit Hafermilch.",
      date: "vor 3 Wochen",
    },
    {
      name: "Jerome Greenhalgh",
      rating: 5,
      text: "Wie ein Kaffee bei den Nachbarn. Persönlich, lecker und einfach. Und noch Croissants von Bäckerei Dannemann runden das Angebot ab. Klasse.",
      date: "vor einem Monat",
    },
    {
      name: "Axel K.",
      rating: 5,
      text: "Super leckerer Hafer Cappuccino. Danke.",
      date: "vor einem Monat",
    },
  ],
  galleryImages: [
    "/assets/acquisition/restaurant/kaffeestand-im-freien-01.jpg",
    "/assets/acquisition/dishes/kaffee-mit-herz-latte-art-01.jpg",
    "/assets/acquisition/restaurant/bluhender-magnolienbaum-und-sonnenschirm-01.jpg",
    "/assets/acquisition/restaurant/mitarbeiter-am-kaffeestand-01.jpg",
    "/assets/acquisition/dishes/eiskaffee-mit-zimt-01.jpg",
    "/assets/acquisition/restaurant/outdoor-foodstand-unter-magnolienbaum-01.jpg",
  ],
};

export default cafe;
