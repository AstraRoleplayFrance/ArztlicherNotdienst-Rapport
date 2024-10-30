async function sendToDiscord() {
    const webhookURL = "https://discord.com/api/webhooks/1301217393384620110/a72X9ntZj7pRtT-sFsX_MZV1NDMthwyOOOs6L6_Kwd0dfcGnQ7aEWJ43PGOe-rv0Ve_R";
    
    // Récupérer les valeurs du formulaire
    const intervenant = document.getElementById("intervenant_samu").value;
    const badge = document.getElementById("badge_samu").value;
    const lieu = document.getElementById("lieu_samu").value;
    const date = document.getElementById("date_samu").value;
    const telephone = document.getElementById("telephone_samu").value;
    const adresse = document.getElementById("adresse_samu").value;
    const etatMental = document.getElementById("etat_mental_samu").value;
    const medications = document.getElementById("medications_samu").value;
    const description = document.getElementById("description_samu").value;
    const nombreVictimes = document.getElementById("nombre_victimes").value;
    const infosVictimes = document.getElementById("infos_victimes").value;
  
    // Vérifier si tous les champs obligatoires sont remplis
    if (!intervenant || !badge || !lieu || !date || !telephone || !adresse || !etatMental || !description || !nombreVictimes || !infosVictimes) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  
    // Création du message formaté pour Discord
    const data = {
      content: `📝 **Rapport Intervention SAMU** - Astra Roleplay V2 📝\n\n` +
               `👨‍⚕️ **Intervenant:** ${intervenant}\n` +
               `🆔 **Badge:** ${badge}\n` +
               `📍 **Lieu:** ${lieu}\n` +
               `📅 **Date:** ${date}\n` +
               `📞 **Téléphone:** ${telephone}\n` +
               `🏠 **Adresse:** ${adresse}\n` +
               `🧠 **État Mental:** ${etatMental}\n` +
               `💊 **Médications:** ${medications || "Aucune"}\n` +
               `📋 **Description:** ${description}\n\n` +
               `🚑 **Nombre de Victimes:** ${nombreVictimes}\n` +
               `📑 **Informations des Victimes:** ${infosVictimes}\n\n` +
               `✅ **Rapport envoyé avec succès !**`
    };
  
    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        alert("Rapport envoyé avec succès !");
        document.getElementById("discordForm").reset();
      } else {
        alert("Erreur lors de l'envoi du rapport.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    }
  }
  