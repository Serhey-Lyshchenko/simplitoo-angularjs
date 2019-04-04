module.exports = class tileService {
  constructor() {}
  getTilesData() {
    return [
      {
        title: "Votre société",
        subTitle: "Modifiez vos informations",
        cornerText: "Validée",
        icon: "check",
        color: "#1EB386"
      },
      {
        title: "Votre Activité",
        subTitle: "Quelle sera l’activité de votre société ?",
        cornerText: "À compléter",
        icon: "cog",
        color: "#2C9ACD"
      },
      {
        title: "Capital Social",
        subTitle: "Qui est associé dans votre société ?",
        cornerText: "Étape 3",
        icon: "warning-red",
        color: "#E15554"
      },
      {
        title: "Vos Dirigeants",
        subTitle: "Qui dirigera votre société ?",
        cornerText: "Étape 4",
        icon: "handshake",
        color: "#2C9ACD",
        disabled: true
      },
      {
        title: "Fiscalité",
        subTitle: "Comment sera imposée votre société ?",
        cornerText: "Étape 5",
        icon: "fiscality",
        color: "#2C9ACD",
        disabled: true
      },
      {
        title: "Vos Statuts",
        subTitle: "Aperçu de vos statuts",
        cornerText: "Étape 6",
        icon: "fiscality",
        color: "#2C9ACD",
        disabled: true
      }
    ];
  }
};
