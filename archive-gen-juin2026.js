/* ============================================================
   ARCHIVE — ancienne branche `recup` de gen() (macrocycle juin 2026,
   réathlétisation post-100K). Retirée de trail-v2.html le 31/07/2026.

   Elle n'est PAS supprimée : elle est conservée ici pour référence.
   Ne pas la réinjecter telle quelle — les blocs de récupération
   (Pérou, Réathlétisation) passent désormais par la branche
   paramétrée par BLOCKSESS.

   Raison du déplacement : cette copie contenait des branches
   `dow==="ven"`, `dow==="mer"` etc. identiques à celles de la
   branche active, ce qui rendait les ancres de patch ambiguës
   et a provoqué une modification du mauvais bloc.
   ============================================================ */

  var LEGACY_RECUP=false;
  if(LEGACY_RECUP && ph==="recup"){
    // Réathlé post-100K : semaine PLATE (pas dégressive), ancre lundi club, longue = slot flottant (carte accueil).
    if(dow==="lun"){ o.typeKey="fond"; o.label="EF Club facile"; o.short="EF Club 50'"; o.sub="~50′ · Z2 · club"; o.why="Ancre de la semaine : footing club facile (lundi midi)."; o.detail=["~50′ EF avec le club, allure de conversation.","Nez qui respire, zéro forcing.","Rendez-vous fixe #1."]; o.color="var(--grn)"; o.plan={durMin:50}; }
    else if(dow==="mar"){ o.typeKey="cotes"; o.label="Côte club · reprise"; o.short="Côtes 5×2′ Z3"; o.sub="5×2′ Z3 · reprise"; o.why="Côtes club (mardi soir) — reprise progressive de la VAM."; o.detail=["Échauff : 15′ EF progressif.","Corps : 5× 2′ en montée modérée Z3 (pas à fond, on reprend le geste).","Retour : 10′ EF facile.","Mardi soir = toujours club, ton pilier."]; o.color="var(--orange)"; o.plan={reps:5,format:"Reprise"}; }
    else if(dow==="mer"){ o.typeKey="fond"; o.label="EF moyen"; o.short="EF 50' Z2"; o.sub="~50′ · Z2 · flexible"; o.why="Volume aérobie facile."; o.detail=["~50′ EF facile, solo ou pote.","Flexible : décale-le si journée chargée."]; o.color="var(--grn)"; o.plan={durMin:50}; }
    else if(dow==="jeu"){ o.typeKey="fond"; o.label="EF relance"; o.short="EF 40' souple"; o.sub="~40′ · Z2 · flexible"; o.why="Footing souple — optionnel selon la semaine."; o.detail=["~40′ très facile.","À faire en grosse semaine, à sauter en petite."]; o.color="var(--grn)"; o.plan={durMin:40}; }
    else if(dow==="ven"){ o.typeKey="fond"; o.label="EF"; o.short="EF 45' Z2"; o.sub="~45′ · Z2"; o.why="Footing facile — recharge sans forcer."; o.detail=["~45′ EF, allure de conversation, nez qui respire.","Flexible : décale-le si journée chargée."]; o.color="var(--grn)"; o.plan={durMin:45}; }
    else { o.typeKey="repos"; o.label="Séance libre ou SL"; o.sub="week-end · libre"; o.why="Séance libre (EF ou côtes courtes) ou ta sortie longue — comme ta vie le permet (carte À FAIRE)."; o.color="var(--blue)"; o.plan={}; }
  }
