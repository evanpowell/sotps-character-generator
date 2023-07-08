import { VocationEnum } from "../character/profile/vocation";

const vocationDescriptions = {
  [VocationEnum.ACOLYTE]:
    "Stewards of the gods' servants who provide aid to religious officials in procession and in temple",
  [VocationEnum.ADVISOR]:
    "Employed as political guides for Thelea's prominent, their counsel often steers the course of society",
  [VocationEnum.ALCHEMIST]:
    "True appreciators of the power imbued in the natural world, and the technologies to harness it",
  [VocationEnum.AMBASSADOR]:
    "Liaisons attentive to history and customs, often spending extensive time in foreign lands",
  [VocationEnum.ANTAGONIST]:
    "Living under contract of a prominent guild, these scholars bend knowledge to effect personal gain",
  [VocationEnum.APOTHECARY]:
    "Enterprising herbalists and alchemists who hone their craft for commerce and community care",
  [VocationEnum.ARCHER]:
    "Often working as trainers for the Empire's bow, they excel in fletching and shooting skilled arrows",
  [VocationEnum.ARCHITECT]:
    "Perceptive builders whose knowledge of stone and construction inform Thelea's greatest structures",
  [VocationEnum.ARTIFICER]:
    "Merging magic with mundane, these practitioners typically build intricate devices for the elite",
  [VocationEnum.ASSASSIN]:
    "Killers for hire, often employed by guilds who pay regional authorities to overlook their crimes",
  [VocationEnum.AUGUR]:
    "With a deep understanding of history and politics, their counsel often holds the weight of the future",
  [VocationEnum.AWAKENER]:
    "Often attached to a guild, their magics provoke thunderous and explosive displays of power",
  [VocationEnum.BARD]:
    "Poets and musicians who share extensive knowledge and satire in public performances",
  [VocationEnum.BATTLEMAGE]:
    "Practitioners isolated and shunned by many, they wield the magics of destruction and chaos",
  [VocationEnum.BEASTMASTER]:
    "Hired to tame the wildest beasts, they often spend extensive time among the animals of Thelea",
  [VocationEnum.BLACKGUARD]:
    "Wielding magic for the elite, components have left their arms blackened and their fingers hard",
  [VocationEnum.BOTANIST]:
    "Observers of growth and change in plant life, they document and investigate Thelea's varied flora",
  [VocationEnum.BREWER]:
    "Robust herbalists who craft barrels of magic from yeasts and grain, and fine spirits from fruits",
  [VocationEnum.BREWMASTER]:
    "Innovators and recipe makers who meticulously make and test the Empire's medicines and tonics",
  [VocationEnum.BUILDER]:
    "Experienced crafters who turn raw materials into anything from carts to castles, for a fee",
  [VocationEnum.BULWARK]:
    "Ground soldiers who build their practice around defense and control, often fortifying a shield wall",
  [VocationEnum.CARETAKER]:
    "Quiet tenders who take an oath of silence and oversee the cleaning and shrouding of Thelea's dead",
  [VocationEnum.CARTOGRAPHER]:
    "Mapmakers with a keen understanding of landscapes, roads, and topography, employed by guilds",
  [VocationEnum.CHAMBERLAIN]:
    "Serving the prominent families of Thelea as a manager of household logistics",
  [VocationEnum.CHEF]:
    "Artisans of culinary traditions who cook in the employ of prominent houses or noble caravans",
  [VocationEnum.CHRONICLER]:
    "Experienced in Thelean lore as much as inscription, they pen the spoken words of Thelea's elite",
  [VocationEnum.CLERIC]:
    "Anointed soldiers who pledge their arms to a temple or cause, often becoming champions or zealots",
  [VocationEnum.COLDRUNNER]:
    "Unsanctioned by the Order, they wield their dark powers as magical assassins for lawless guilds",
  [VocationEnum.CONJURER]:
    "At society's fringes, they practice magics and summonings for the desperate who pay gold",
  [VocationEnum.CRYPTOGRAPHER]:
    "Symbologists who use coded languages to secure the sensitive information of the Empire's elite",
  [VocationEnum.DANCER]:
    "Using movement to tell stories and perform rituals, their practices can be seen across the Empire",
  [VocationEnum.DELEGATOR]:
    "Procurers of service and operations who use knowledge of need to yield surplus and sustainability",
  [VocationEnum.DIPLOMAT]:
    "Their keen understanding of public moods and power brings them contracts of noble negotiations",
  [VocationEnum.DISTILLER]:
    "Working fine alembics and retorts, they toil to refine the potency of ingredients and concoctions",
  [VocationEnum.DIVINER]:
    "Decried by Elders, they are the knowers paid to challenge authority and manipulate the powerful",
  [VocationEnum.DRUID]:
    "Guided by the wilds, they discover and document the magical components of the natural world",
  [VocationEnum.DUELIST]:
    "Impressive sword artists who train to be dazzling as much as they are deadly in their skills",
  [VocationEnum.ELDER]:
    "Respected interpreters of knowledge who catalog and archive the tomes of Thelea's scholarly halls",
  [VocationEnum.ENCHANTER]:
    "Thelean outcasts who illegally imbue magical properties into tools, weapons, and armors",
  [VocationEnum.ENGINEER]:
    "Intricate builders of mechanisms, machines, and moving parts, from travel carts to trebuchet",
  [VocationEnum.ENTERTAINER]:
    "At the front of the crowd, their captivating presence often creates joy, intrigue, and excitement",
  [VocationEnum.EVOKER]:
    "Liberators of protected knowledge whose magics are offered freely to any who might wish to learn",
  [VocationEnum.FARMHAND]:
    "They learn trades and operations as they work near settlements to provide food and livestock",
  [VocationEnum.FENCE]:
    "Using their contacts and influence to move stolen goods and build a sizable profit margin",
  [VocationEnum.FORAGER]:
    "Employed in many small settlements to collect useful plants and mushrooms for trade",
  [VocationEnum.FORGEMASTER]:
    "The makers of metal and the processors of ore who craft tenacity with immense heat and stone",
  [VocationEnum.FOX]:
    "The vocation of swift talkers and smugglers, they move merchandise at the fringes of settlements",
  [VocationEnum.FREERIDER]:
    "Travelers of fortune, they restlessly fight against banditry and coventry at the fringes of society",
  [VocationEnum.GATEKEEPER]:
    "Working long hours at the edge of a city or township, they interact with many interesting people",
  [VocationEnum.GATHERER]:
    "Wanderers of the wild who often spend months away from settlements procuring elusive ingredients",
  [VocationEnum.GHOST]:
    "Silent and aware, they often fulfill guild contracts to collect goods or information in full secrecy",
  [VocationEnum.GRAPPLER]:
    "Resilient combatants who practice dangerous immobilization techniques and gritty tactics",
  [VocationEnum.HEALER]:
    "Knowledgeable healers who use careful elixirs and tonics to bolster the body's healing effects",
  [VocationEnum.HERALD]:
    "Messengers entrusted with the deeds and lineages of nobility and the Empire's most prominent ",
  [VocationEnum.HERBALIST]:
    "True students of the potent ingredients found in plants, often working closely with healers",
  [VocationEnum.HISTORIAN]:
    "Scholars in the truest sense who weave facts and secrets into the influential narratives of the past",
  [VocationEnum.HUNTER]:
    "Culling local animal populations under the purview of regional nobility, for trade in settlements",
  [VocationEnum.JEWELER]:
    "They create fineries that set precious jewels into intricate metalworks, selling to Thelea's elite",
  [VocationEnum.JUGGLER]:
    "With comedy and often crude satire, they excel in public forums and often gain wide celebrity",
  [VocationEnum.MAKER]:
    "Preservers of the provincial crafting techniques found throughout Thelea, in form and function",
  [VocationEnum.MECHANIC]:
    "Fixers in great demand within any settlement where there are numerous vehicles and machines",
  [VocationEnum.MEDICINE_MAKER]:
    "Hired by city nobles and sanctioned by the Order, they create regularly used Thelean remedies",
  [VocationEnum.MENDER]:
    "The cherished members of any community who work to fix holes and broken things",
  [VocationEnum.MENTALIST]:
    "Valued by powerful elite for their facility for patterns and memory to gain leverage and intelligence",
  [VocationEnum.MILITIA_LEADER]:
    "Trained to gather and command soldiers based on local community needs, outside official channels",
  [VocationEnum.MIXOLOGIST]:
    "With a penchant for flair, they craft elixirs, salves, and tonics for applause and immediate sale",
  [VocationEnum.MONK]:
    "Focused practitioners of age-old martial arts who see political causes as secondary to spiritual ones",
  [VocationEnum.MOUNTAINEER]:
    "Guides who oversee travels across dangerous mountain passes who learn many customs and songs",
  [VocationEnum.MYSTIC]:
    "Often employed by Thelea's guilds, their sixth sense for patterns is used to sway whole communities",
  [VocationEnum.NOSTRUMIST]:
    "Working in the employ of prominent alchemists, they gather ingredients and clean alembics",
  [VocationEnum.ORACLE]:
    "Patient and knowledgeable, they are employed throughout Thelea to interpret signs and omens",
  [VocationEnum.OVERSEER]:
    "The founders of intricate networks of people, they manage large operations of commerce or trade",
  [VocationEnum.PEDDLER]:
    "They craft useful goods and gear, selling them outside the purview of Thelean trade guilds",
  [VocationEnum.PERFUMER]:
    "Earning coin through mixing clever remedies and sensual oils for the Empire's prominent",
  [VocationEnum.PHILOSOPHER]:
    "Thinkers immersed in the history of the Empire, politically sought for their unconventional ideas",
  [VocationEnum.PICKPOCKET]:
    "Hired by guilds or freelancers, they use their sleight of hand and misdirection to reallocate goods",
  [VocationEnum.PILGRIM]:
    "Stewards of perseverance who help keep watch over caravans that travel Thelea's many great roads",
  [VocationEnum.POLITICIAN]:
    "Whether publicly seen, or quietly influential, they use social expectation to build power",
  [VocationEnum.PREPPER]:
    "Builders of function, employed to wall and furnish the indoor areas of large houses or buildings",
  [VocationEnum.PRIEST]:
    "Observers and listeners who serve as guides for ritual and spirituality under the Temple's purview",
  [VocationEnum.PROVISIONER]:
    "Stewards of the larder and the shed, often employed by large houses to keep their stores full",
  [VocationEnum.PROWLER]:
    "Employed to search settlements or cloisters, clandestinely gathering intelligence for hire",
  [VocationEnum.PUPPETEER]:
    "Using cunning and intrigue to leverage others into completing tasks, often for a faction or guild",
  [VocationEnum.RANGER]:
    "World-wise ruffians who are commissioned by guilds to travel across the Empire to achieve a goal",
  [VocationEnum.RINGLEADER]:
    "Anonymous but invaluable for creating networks of informants in Thelea's richest settlements",
  [VocationEnum.RIVAL]:
    "Fighters who are recruited to oppose the authority of a faction or guild, often fighting for gold",
  [VocationEnum.ROCKCLIMBER]:
    "Daredevils who brave the hidden crevices of great cliffs to find unforeseen paths beyond",
  [VocationEnum.ROGUE]:
    "Often freelancing for guilds, they employ disguises and cons to gain advantage and profit",
  [VocationEnum.SAGE]:
    "Thoughtful interpreters of history and signs who tend to record their ideas in obscure tomes",
  [VocationEnum.SALVAGER]:
    "Foragers and finders, salving the burdens of the labor bound to collecting useful plants and herbs",
  [VocationEnum.SANDMAN]:
    "Displaced sorcerers who scrounge for components and wield magics for their own profit or gains",
  [VocationEnum.SAVANT]:
    "The Empire's mathematicians and advocates who settle prominent disputes, or initiate them",
  [VocationEnum.SCAFFOLDER]:
    "In charge of the elaborate frames and supports that make tall machines and architecture buildable",
  [VocationEnum.SCAVENGER]:
    "Treading the Empire's great roads to reclaim and reallocate lost goods and once-forgotten refuse",
  [VocationEnum.SCORPION]:
    "Often on guild contracts, they are paid to incapacitate targets and transport them into custody",
  [VocationEnum.SCOUT]:
    "Valued as spies in enemy lands, and as navigators among caravans, they travel the wilds of Thelea",
  [VocationEnum.SELLSWORD]:
    "Often without order or discipline, these mercenaries will lend their arms to the highest bidder",
  [VocationEnum.SHADOWDANCER]:
    "Mercenary wielders of profane magics, their practice obscures them within clouds of components",
  [VocationEnum.SHAMAN]:
    "Spiritual and ritual guides who work outside the Temple's purview, usually to benefit a community",
  [VocationEnum.SHEPHERD]:
    "Following herds of animals and keeping them safe near settlements, they are valued stewards",
  [VocationEnum.SHIPMAN]:
    "Swashbucklers who brave the oceans and hustle the ports, keeping ships moving in the Empire",
  [VocationEnum.SLEEPER]:
    "Hired by prominent Theleans to offer medicines that ease tension and help inspire dreams",
  [VocationEnum.SMITH]:
    "Metalworkers who make and maintain the lasting tools of civilization, from horseshoes to halberds ",
  [VocationEnum.SORCERER]:
    "Shunned by the superstitious, yet still in great demand, they practice magics for a modest fee",
  [VocationEnum.SPIDER]:
    "Clever practitioners of complex workings, locks, traps, and movable parts, hidden or in plain sight",
  [VocationEnum.SPYMASTER]:
    "Experts of the art of façade and chicanery, they gather information and connections for advantage ",
  [VocationEnum.SQUIRE]:
    "Stewards of prominent nobles and warriors, caring for equipment, food, bedding, and messages",
  [VocationEnum.STABLEHAND]:
    "Stewards of the Empire's many animal companions, attending to them so they can serve society",
  [VocationEnum.STALWART]:
    "Skilled in numerous trades, they build social clout by always making use of their abilities",
  [VocationEnum.STORYTELLER]:
    "Often with a traveler's fortitude they hold the public's ear weaving the tales of current events",
  [VocationEnum.STRATEGIST]:
    "Rear soldiers whose attention to munitions and patterns aid in both victory and in minimizing loss",
  [VocationEnum.TACTICIAN]:
    "Hired to assess the structures of war, they find value in the power of planning and resource",
  [VocationEnum.TAILOR]:
    "Turning the finest threads into elaborate cloth, tapestries, and garments, from utility to fashion",
  [VocationEnum.THAUMATURGE]:
    "Slow and steady students of magic, they work to understand the power within magical components",
  [VocationEnum.THIEF]:
    "Unscrupulous and adept with their hands, they acquire valuable goods and information to fence",
  [VocationEnum.TRACKER]:
    "Employed by guilds to find fugitives or locate hidden enclaves, they are often in high demand",
  [VocationEnum.TRADER]:
    "Sanctioned by the Order, skilled in commerce and crafting to fill demands and turn a bit of profit",
  [VocationEnum.TRAPPER]:
    "Masters of intricate workings, often employed to trap fauna in forests to collect meat and pelts",
  [VocationEnum.TRAVELER]:
    "Quietly collecting tips and stories from across the Empire, they often know more than they let on",
  [VocationEnum.VANGUARD]:
    "The feared front lines, charging headstrong into battle to break through the enemy's shield wall",
  [VocationEnum.VIPER]:
    "Infiltrating soldiers who train to penetrate an opponent's weaknesses and exploit their pain",
  [VocationEnum.WARLOCK]:
    "Unhinged, but nonetheless powerfully disciplined, they practice magics forbidden by the Order",
  [VocationEnum.WARRIOR]:
    "Seasoned foot soldiers who fight with grit and honor, clashing blood and arms for the banner cause",
  [VocationEnum.WEAVER]:
    "Often working with tailorsB, their shuttle and thread work is as much for beauty as for function",
  [VocationEnum.WHISPERER]:
    "Hired in secret to create magical wards and protections for the Empire's prominent and paranoid",
  [VocationEnum.WITCH]:
    "Honored alchemical practitioners who maintain generational knowledge of medicines and poisons",
  [VocationEnum.WIZARD]:
    "Officiated and careful practitioners who protect and study obscure grimoires to demystify magics",
  [VocationEnum.WRANGLER]:
    "Negotiators of civilization's stables and pens, privy to Thelea's roads, routes, vehicles, and mounts",
} as const;

export { vocationDescriptions };
