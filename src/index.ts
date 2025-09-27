// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};

module.exports = {
  register({ strapi }) {
    // Ici on peut exécuter du code AVANT que Strapi démarre
  },

  bootstrap({ strapi }) {
    // Ici, Strapi est démarré
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST"] 
      },
    });

    io.on("connection", (socket) => {
      console.log("🔌 Un joueur vient de se connecter :", socket.id);

      socket.on("ping-test", (msg) => {
        console.log("📩 Message reçu du front :", msg);

        // On peut renvoyer une réponse
        socket.emit("pong-test", "Bien reçu !");
      });
    });

    strapi.io = io; // on stocke l’instance pour la réutiliser ailleurs
  },
};