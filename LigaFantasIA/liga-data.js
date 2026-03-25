// ============================================================
// LIGA FANTAS-IA — DATOS COMPARTIDOS
// Incluir en todas las páginas: <script src="liga-data.js"></script>
// ============================================================

const LIGA = {

  // ======= 7 IAs =======
  IAS: [
    { id:'chatgpt',    name:'ChatGPT',    company:'OpenAI',          emoji:'🤖', color:'#10a37f' },
    { id:'gemini',     name:'Gemini',     company:'Google DeepMind', emoji:'💎', color:'#4285f4' },
    { id:'claude',     name:'Claude',     company:'Anthropic',       emoji:'🔮', color:'#7c3aed' },
    { id:'copilot',    name:'Copilot',    company:'Microsoft',       emoji:'🪟', color:'#0078d4' },
    { id:'grok',       name:'Grok',       company:'xAI',             emoji:'⚡', color:'#e33d3d' },
    { id:'perplexity', name:'Perplexity', company:'Perplexity AI',   emoji:'🔍', color:'#20b2aa' },
    { id:'mistral',    name:'Mistral',    company:'Mistral AI',      emoji:'🌊', color:'#ff9500' },
  ],

  // ======= 8 EQUIPOS =======
  TEAMS: [
    {
      id:'rv', name:'Realidad Virtual F.C.', emoji:'💻', color:'#00e5ff',
      manager:'', // asignado al inicio
      desc:'Favorito al título. Patrocinado por tecnología. Muy alto en Visión y Calidad, algo endebles físicamente.',
      players:[
        {n:1,  name:'Áxel "Pixel" Vargas',       pos:'POR', pot:75, cal:70, vel:45, vis:82, price:'4.2M'},
        {n:2,  name:'Nilo Ramírez',               pos:'DEF', pot:78, cal:72, vel:68, vis:80, price:'7.8M'},
        {n:3,  name:'Eric "Glitch" Mendoza',      pos:'DEF', pot:70, cal:85, vel:74, vis:79, price:'9.5M'},
        {n:4,  name:'Oriol Codes',                pos:'DEF', pot:82, cal:68, vel:71, vis:69, price:'6.5M'},
        {n:5,  name:'Ian Castell',                pos:'DEF', pot:69, cal:79, vel:82, vis:71, price:'8.2M'},
        {n:6,  name:'Biel "Byte" Serrano',        pos:'MED', pot:74, cal:91, vel:73, vis:94, price:'15.5M'},
        {n:7,  name:'Jan Fuentes',                pos:'MED', pot:77, cal:84, vel:69, vis:88, price:'11.8M'},
        {n:8,  name:'Pol "Firewall" Díaz',        pos:'MED', pot:88, cal:76, vel:62, vis:85, price:'10.2M'},
        {n:9,  name:'Arnau Cruz',                 pos:'EXT', pot:65, cal:88, vel:94, vis:77, price:'13.5M'},
        {n:10, name:'Nil "Algoritmo" Soler',      pos:'DEL', pot:79, cal:96, vel:82, vis:91, price:'24.0M'},
        {n:11, name:'Roc Mora',                   pos:'DEL', pot:81, cal:89, vel:76, vis:70, price:'11.2M'},
        {n:12, name:'Didac Pastor',               pos:'POR', pot:72, cal:65, vel:58, vis:68, price:'3.5M'},
        {n:13, name:'Unai Expósito',              pos:'DEF', pot:73, cal:70, vel:69, vis:72, price:'5.8M'},
        {n:14, name:'Alex "Lag" Pons',            pos:'DEF', pot:79, cal:71, vel:78, vis:64, price:'6.8M'},
        {n:15, name:'Joel Lozano',                pos:'MED', pot:63, cal:75, vel:71, vis:81, price:'6.5M'},
        {n:16, name:'Marc "Hacker" Vila',         pos:'MED', pot:71, cal:82, vel:73, vis:89, price:'10.8M'},
        {n:17, name:'Pau Roca',                   pos:'EXT', pot:68, cal:77, vel:88, vis:76, price:'9.7M'},
        {n:18, name:'Guillem Servera',            pos:'EXT', pot:62, cal:80, vel:89, vis:75, price:'9.2M'},
        {n:19, name:'Oriol "Bit" Colomer',        pos:'DEL', pot:77, cal:84, vel:70, vis:68, price:'7.9M'},
        {n:20, name:'Ferran Ballester',           pos:'DEL', pot:65, cal:72, vel:75, vis:67, price:'4.9M'},
        {n:21, name:'Bernat "Cache" Amat',        pos:'MED', pot:73, cal:79, vel:70, vis:80, price:'8.4M'},
        {n:22, name:'Lluís Giner',                pos:'DEF', pot:70, cal:68, vel:66, vis:70, price:'4.3M'},
      ]
    },
    {
      id:'ac', name:'Atlético Campero', emoji:'🌾', color:'#8d6e63',
      manager:'',
      desc:'Tradición rural. Muy fuertes físicamente (POT) pero con poca visión. Luchan por no descender.',
      players:[
        {n:1,  name:'Berto "Yugo" Díaz',           pos:'POR', pot:82, cal:45, vel:41, vis:40, price:'1.2M'},
        {n:2,  name:'Ceferino Arada',              pos:'DEF', pot:88, cal:38, vel:62, vis:39, price:'2.0M'},
        {n:3,  name:'Jacinto Trillo',              pos:'DEF', pot:91, cal:40, vel:55, vis:35, price:'1.8M'},
        {n:4,  name:'Anselmo "Pala" Herrera',      pos:'DEF', pot:79, cal:52, vel:48, vis:50, price:'2.1M'},
        {n:5,  name:'Isidro Rozas',                pos:'DEF', pot:84, cal:41, vel:53, vis:42, price:'1.7M'},
        {n:6,  name:'Braulio "Buey" Castro',       pos:'MED', pot:92, cal:48, vel:60, vis:45, price:'2.8M'},
        {n:7,  name:'Honorato Sierra',             pos:'MED', pot:85, cal:55, vel:57, vis:51, price:'3.0M'},
        {n:8,  name:'Eleuterio "Barbecho" Gil',    pos:'MED', pot:83, cal:47, vel:63, vis:44, price:'2.4M'},
        {n:9,  name:'Primitivo Vega',              pos:'EXT', pot:77, cal:50, vel:78, vis:43, price:'3.0M'},
        {n:10, name:'Segismundo "Pellejo" Rueda',  pos:'DEL', pot:94, cal:61, vel:72, vis:47, price:'4.3M'},
        {n:11, name:'Custodio "Cuerna" Campos',    pos:'DEL', pot:90, cal:53, vel:70, vis:46, price:'3.3M'},
        {n:12, name:'Nicomedes Aroca',             pos:'POR', pot:78, cal:35, vel:40, vis:36, price:'0.9M'},
        {n:13, name:'Rosendo Gamarra',             pos:'DEF', pot:80, cal:44, vel:50, vis:43, price:'1.6M'},
        {n:14, name:'Calixto "Sacho" Mora',        pos:'DEF', pot:86, cal:43, vel:49, vis:41, price:'1.7M'},
        {n:15, name:'Fulgencio Cuenca',            pos:'MED', pot:79, cal:46, vel:58, vis:47, price:'2.1M'},
        {n:16, name:'Serafín "Bieldo" Vara',       pos:'MED', pot:87, cal:49, vel:61, vis:48, price:'2.8M'},
        {n:17, name:'Epifanio Soto',               pos:'EXT', pot:75, cal:47, vel:71, vis:42, price:'2.3M'},
        {n:18, name:'Timoteo "Rastrojo" Cerdá',    pos:'EXT', pot:76, cal:45, vel:73, vis:40, price:'2.2M'},
        {n:19, name:'Crisóstomo Landa',            pos:'DEL', pot:89, cal:50, vel:66, vis:44, price:'3.1M'},
        {n:20, name:'Hermógenes Riaza',            pos:'DEL', pot:82, cal:51, vel:68, vis:46, price:'2.9M'},
        {n:21, name:'Columbano "Abono" Tormo',     pos:'MED', pot:81, cal:48, vel:56, vis:47, price:'2.2M'},
        {n:22, name:'Eutimio Pedraza',             pos:'DEF', pot:77, cal:42, vel:52, vis:39, price:'1.3M'},
      ]
    },
    {
      id:'ce', name:'Cemento Armónico C.F.', emoji:'🏗️', color:'#90a4ae',
      manager:'',
      desc:'Equipo obrero. Sólidos atrás, toscos en ataque. Muy irregulares a lo largo de la temporada.',
      players:[
        {n:1,  name:'Ladislao "Bloque" Hormigo',   pos:'POR', pot:80, cal:55, vel:32, vis:53, price:'3.2M'},
        {n:2,  name:'Hernán "Viga" Aguirre',       pos:'DEF', pot:89, cal:52, vel:61, vis:51, price:'3.8M'},
        {n:3,  name:'Ramiro "Cemento" Sirvent',    pos:'DEF', pot:92, cal:48, vel:58, vis:49, price:'3.6M'},
        {n:4,  name:'Teodoro "Ladrillo" Franco',   pos:'DEF', pot:87, cal:51, vel:57, vis:50, price:'3.6M'},
        {n:5,  name:'Zacarías "Yeso" Paredes',     pos:'DEF', pot:84, cal:53, vel:60, vis:54, price:'3.8M'},
        {n:6,  name:'Amancio "Grúa" Losa',         pos:'MED', pot:86, cal:62, vel:64, vis:63, price:'5.8M'},
        {n:7,  name:'Pepe "Mezcla" Bastida',       pos:'MED', pot:79, cal:68, vel:66, vis:70, price:'6.2M'},
        {n:8,  name:'Ambrosio "Cimiento" Canto',   pos:'MED', pot:83, cal:60, vel:63, vis:62, price:'5.4M'},
        {n:9,  name:'Cipriano "Azulejo" Pla',      pos:'EXT', pot:75, cal:69, vel:77, vis:61, price:'5.8M'},
        {n:10, name:'Fabián "Mortero" Lago',       pos:'DEL', pot:88, cal:70, vel:71, vis:60, price:'6.8M'},
        {n:11, name:'Benigno "Forja" Hidalgo',     pos:'DEL', pot:90, cal:65, vel:68, vis:58, price:'6.2M'},
        {n:12, name:'Adolfo "Silice" Ros',         pos:'POR', pot:72, cal:50, vel:35, vis:47, price:'2.2M'},
        {n:13, name:'Casimiro "Cantera" Roca',     pos:'DEF', pot:81, cal:54, vel:62, vis:52, price:'3.6M'},
        {n:14, name:'Eliseo "Tablón" Muro',        pos:'DEF', pot:85, cal:49, vel:55, vis:48, price:'3.4M'},
        {n:15, name:'Florencio "Remache" Clavel',  pos:'MED', pot:78, cal:63, vel:65, vis:64, price:'5.8M'},
        {n:16, name:'Gaspar "Pilar" Coloma',       pos:'MED', pot:82, cal:64, vel:62, vis:66, price:'6.2M'},
        {n:17, name:'Higinio "Grava" Arenas',      pos:'EXT', pot:73, cal:61, vel:73, vis:55, price:'4.8M'},
        {n:18, name:'Ildefonso "Cal" Montero',     pos:'EXT', pot:74, cal:66, vel:76, vis:59, price:'5.4M'},
        {n:19, name:'Jacobo "Hierro" Acero',       pos:'DEL', pot:87, cal:64, vel:70, vis:57, price:'6.4M'},
        {n:20, name:'Laureano "Plancha" Ferrer',   pos:'DEL', pot:84, cal:67, vel:69, vis:60, price:'6.4M'},
        {n:21, name:'Melchor "Andamio" Valls',     pos:'MED', pot:77, cal:62, vel:64, vis:65, price:'5.6M'},
        {n:22, name:'Nicanor "Solera" Cueto',      pos:'DEF', pot:79, cal:50, vel:59, vis:51, price:'3.2M'},
      ]
    },
    {
      id:'si', name:'Sintéticos F.C.', emoji:'🧬', color:'#b39ddb',
      manager:'',
      desc:'Creados en laboratorio. Estadísticas muy balanceadas y altas. Máximos rivales de Realidad Virtual.',
      players:[
        {n:1,  name:'Zero Uno',     pos:'POR', pot:86, cal:82, vel:60, vis:85, price:'12.0M'},
        {n:2,  name:'Prime Nexus',  pos:'DEF', pot:90, cal:85, vel:88, vis:83, price:'18.0M'},
        {n:3,  name:'Vektor Core',  pos:'DEF', pot:91, cal:84, vel:87, vis:82, price:'18.0M'},
        {n:4,  name:'Axon Prime',   pos:'DEF', pot:88, cal:86, vel:89, vis:84, price:'16.0M'},
        {n:5,  name:'Synap Cell',   pos:'DEF', pot:87, cal:83, vel:90, vis:81, price:'16.0M'},
        {n:6,  name:'Logic Gate',   pos:'MED', pot:89, cal:94, vel:86, vis:96, price:'22.0M'},
        {n:7,  name:'Data Stream',  pos:'MED', pot:85, cal:92, vel:88, vis:94, price:'20.0M'},
        {n:8,  name:'Cyber Link',   pos:'MED', pot:90, cal:90, vel:91, vis:92, price:'20.0M'},
        {n:9,  name:'Pixel Neo',    pos:'EXT', pot:82, cal:91, vel:98, vis:88, price:'18.0M'},
        {n:10, name:'Bio Xero',     pos:'DEL', pot:95, cal:96, vel:92, vis:89, price:'28.0M'},
        {n:11, name:'Nano Tech',    pos:'DEL', pot:94, cal:95, vel:94, vis:87, price:'26.0M'},
        {n:12, name:'Frame Rate',   pos:'POR', pot:81, cal:78, vel:55, vis:80, price:'8.0M'},
        {n:13, name:'Solid State',  pos:'DEF', pot:86, cal:82, vel:85, vis:81, price:'14.0M'},
        {n:14, name:'Quantum Dot',  pos:'DEF', pot:88, cal:83, vel:86, vis:82, price:'16.0M'},
        {n:15, name:'Virtual Core', pos:'MED', pot:84, cal:89, vel:84, vis:91, price:'18.0M'},
        {n:16, name:'Neural Net',   pos:'MED', pot:87, cal:93, vel:87, vis:95, price:'22.0M'},
        {n:17, name:'Plasma Ray',   pos:'EXT', pot:81, cal:88, vel:95, vis:85, price:'16.0M'},
        {n:18, name:'Echo Wave',    pos:'EXT', pot:83, cal:89, vel:94, vis:86, price:'16.0M'},
        {n:19, name:'Cobalt Flux',  pos:'DEL', pot:91, cal:92, vel:90, vis:84, price:'22.0M'},
        {n:20, name:'Lithium Ion',  pos:'DEL', pot:92, cal:91, vel:91, vis:85, price:'22.0M'},
        {n:21, name:'Optic Fiber',  pos:'MED', pot:85, cal:90, vel:89, vis:93, price:'20.0M'},
        {n:22, name:'Robo Copia',   pos:'DEF', pot:87, cal:84, vel:88, vis:83, price:'14.0M'},
      ]
    },
    {
      id:'ip', name:'Los Infrapagados', emoji:'💸', color:'#ef9a9a',
      manager:'',
      desc:'Mucho talento (CAL y VIS alta) pero nulo físico por las largas jornadas laborales. Dan sorpresas.',
      players:[
        {n:1,  name:'Evaristo "Mileurista" Plaza',    pos:'POR', pot:48, cal:75, vel:30, vis:74, price:'2.5M'},
        {n:2,  name:'Benito "Contrato" Basura',       pos:'DEF', pot:52, cal:78, vel:45, vis:77, price:'3.2M'},
        {n:3,  name:'Fulano "Prácticas" Mengano',     pos:'DEF', pot:47, cal:80, vel:43, vis:82, price:'3.2M'},
        {n:4,  name:'Sutano "Ertes" López',           pos:'DEF', pot:55, cal:76, vel:48, vis:76, price:'3.2M'},
        {n:5,  name:'Mengano "Nocturnidad" Pérez',    pos:'DEF', pot:50, cal:77, vel:46, vis:78, price:'3.2M'},
        {n:6,  name:'Zutano "Jornada" Partida',       pos:'MED', pot:46, cal:91, vel:51, vis:92, price:'7.0M'},
        {n:7,  name:'Perengano "Plus" Triste',        pos:'MED', pot:53, cal:89, vel:50, vis:90, price:'6.8M'},
        {n:8,  name:'Fulgencio "Teletrabajo" Ortiz',  pos:'MED', pot:51, cal:88, vel:52, vis:91, price:'6.8M'},
        {n:9,  name:'Anónimo "Sinde" García',         pos:'EXT', pot:44, cal:85, vel:64, vis:83, price:'5.6M'},
        {n:10, name:'Ignacio "Precario" Morales',     pos:'DEL', pot:61, cal:94, vel:55, vis:88, price:'7.4M'},
        {n:11, name:'Desiderio "Autónomo" Fernández', pos:'DEL', pot:58, cal:92, vel:53, vis:89, price:'7.2M'},
        {n:12, name:'Godofredo "Becario" Díaz',       pos:'POR', pot:42, cal:68, vel:32, vis:70, price:'1.8M'},
        {n:13, name:'Herminio "Comunes" Vázquez',     pos:'DEF', pot:49, cal:74, vel:44, vis:75, price:'2.8M'},
        {n:14, name:'Indalecio "Plusvalía" Gómez',    pos:'DEF', pot:54, cal:79, vel:47, vis:79, price:'3.4M'},
        {n:15, name:'Jenaro "Convenio" Martín',       pos:'MED', pot:48, cal:86, vel:49, vis:88, price:'6.2M'},
        {n:16, name:'Kiko "HorasExtra" Alonso',       pos:'MED', pot:52, cal:87, vel:48, vis:89, price:'6.4M'},
        {n:17, name:'Lino "SalarioMín" Rubio',        pos:'EXT', pot:45, cal:82, vel:63, vis:81, price:'5.0M'},
        {n:18, name:'Modesto "IRPF" Molina',          pos:'EXT', pot:47, cal:83, vel:62, vis:82, price:'5.2M'},
        {n:19, name:'Néstor "Paguita" Navarro',       pos:'DEL', pot:56, cal:90, vel:52, vis:86, price:'6.8M'},
        {n:20, name:'Ovidio "Cláusula" Suárez',       pos:'DEL', pot:60, cal:91, vel:54, vis:87, price:'7.2M'},
        {n:21, name:'Paulino "Sindicato" Muñoz',      pos:'MED', pot:49, cal:86, vel:50, vis:89, price:'6.2M'},
        {n:22, name:'Quintín "Finiquito" Romero',     pos:'DEF', pot:51, cal:75, vel:46, vis:74, price:'2.8M'},
      ]
    },
    {
      id:'nb', name:'Nebulosa F.C.', emoji:'🌫️', color:'#78909c',
      manager:'',
      desc:'Equipo misterioso de zona de niebla. Muy veloces e impredecibles. Calidad media-baja.',
      players:[
        {n:1,  name:'Niebla Bruma',       pos:'POR', pot:70, cal:58, vel:48, vis:55, price:'3.2M'},
        {n:2,  name:'Sombras Velo',       pos:'DEF', pot:68, cal:61, vel:82, vis:60, price:'4.2M'},
        {n:3,  name:'Eclipse Vapor',      pos:'DEF', pot:71, cal:60, vel:85, vis:58, price:'4.4M'},
        {n:4,  name:'Bruma Fantasma',     pos:'DEF', pot:66, cal:63, vel:83, vis:61, price:'4.2M'},
        {n:5,  name:'Nublado Gris',       pos:'DEF', pot:69, cal:59, vel:80, vis:59, price:'4.0M'},
        {n:6,  name:'Vaho Niebla',        pos:'MED', pot:64, cal:70, vel:84, vis:71, price:'5.0M'},
        {n:7,  name:'Cierzo Helado',      pos:'MED', pot:67, cal:69, vel:86, vis:70, price:'5.0M'},
        {n:8,  name:'Sirimiri Frío',      pos:'MED', pot:65, cal:71, vel:83, vis:72, price:'5.0M'},
        {n:9,  name:'Vendaval Oscuro',    pos:'EXT', pot:63, cal:68, vel:94, vis:65, price:'5.0M'},
        {n:10, name:'Tormenta Callada',   pos:'DEL', pot:77, cal:72, vel:90, vis:66, price:'6.2M'},
        {n:11, name:'Relámpago Sordo',    pos:'DEL', pot:75, cal:70, vel:95, vis:64, price:'6.2M'},
        {n:12, name:'Neblina Espesa',     pos:'POR', pot:65, cal:54, vel:45, vis:52, price:'2.4M'},
        {n:13, name:'Nubarrón Agrio',     pos:'DEF', pot:67, cal:60, vel:81, vis:59, price:'3.8M'},
        {n:14, name:'Precipicio Húmedo',  pos:'DEF', pot:70, cal:62, vel:84, vis:61, price:'4.2M'},
        {n:15, name:'Alborada Fría',      pos:'MED', pot:64, cal:68, vel:85, vis:69, price:'5.0M'},
        {n:16, name:'Crepúsculo Lóbrego', pos:'MED', pot:66, cal:69, vel:86, vis:71, price:'5.0M'},
        {n:17, name:'Aurora Tenue',       pos:'EXT', pot:62, cal:66, vel:92, vis:63, price:'4.8M'},
        {n:18, name:'Viento Mudo',        pos:'EXT', pot:64, cal:67, vel:93, vis:64, price:'4.8M'},
        {n:19, name:'Fulgor Opaco',       pos:'DEL', pot:73, cal:69, vel:88, vis:62, price:'5.6M'},
        {n:20, name:'Resplandor Vago',    pos:'DEL', pot:74, cal:71, vel:91, vis:65, price:'6.0M'},
        {n:21, name:'Sombra Chinesca',    pos:'MED', pot:65, cal:68, vel:84, vis:70, price:'5.0M'},
        {n:22, name:'Humareda Negra',     pos:'DEF', pot:68, cal:61, vel:83, vis:60, price:'4.0M'},
      ]
    },
    {
      id:'me', name:'Metrópoli S.C.', emoji:'🏙️', color:'#ffd54f',
      manager:'',
      desc:'Equipo de gran ciudad, elegante. Buen equilibrio, aspiran a Europa. Jugadores con clase.',
      players:[
        {n:1,  name:'Darío Alameda',        pos:'POR', pot:78, cal:74, vel:50, vis:73, price:'6.8M'},
        {n:2,  name:'Saúl Castellano',      pos:'DEF', pot:80, cal:77, vel:73, vis:75, price:'9.2M'},
        {n:3,  name:'Iker Noble',           pos:'DEF', pot:82, cal:76, vel:75, vis:74, price:'9.4M'},
        {n:4,  name:'Hugo Paseo',           pos:'DEF', pot:79, cal:78, vel:74, vis:76, price:'9.4M'},
        {n:5,  name:'Pablo Avenida',        pos:'DEF', pot:81, cal:75, vel:76, vis:74, price:'9.2M'},
        {n:6,  name:'Daniel Rascacielos',   pos:'MED', pot:77, cal:85, vel:77, vis:86, price:'12.0M'},
        {n:7,  name:'Adrián Bulevar',       pos:'MED', pot:78, cal:84, vel:78, vis:85, price:'12.0M'},
        {n:8,  name:'Álvaro Farola',        pos:'MED', pot:79, cal:83, vel:79, vis:84, price:'12.0M'},
        {n:9,  name:'Gonzalo Taxi',         pos:'EXT', pot:74, cal:82, vel:89, vis:79, price:'10.8M'},
        {n:10, name:'Rodrigo Metro',        pos:'DEL', pot:85, cal:88, vel:82, vis:80, price:'15.0M'},
        {n:11, name:'Fernando Centro',      pos:'DEL', pot:84, cal:87, vel:81, vis:81, price:'14.8M'},
        {n:12, name:'Carlos Estación',      pos:'POR', pot:73, cal:70, vel:48, vis:68, price:'5.0M'},
        {n:13, name:'Javier Semáforo',      pos:'DEF', pot:77, cal:74, vel:72, vis:72, price:'7.4M'},
        {n:14, name:'Miguel Paso',          pos:'DEF', pot:80, cal:76, vel:74, vis:75, price:'9.0M'},
        {n:15, name:'Jorge Tráfico',        pos:'MED', pot:76, cal:81, vel:75, vis:82, price:'10.8M'},
        {n:16, name:'Alberto Acera',        pos:'MED', pot:77, cal:82, vel:76, vis:83, price:'11.2M'},
        {n:17, name:'Víctor Farola',        pos:'EXT', pot:73, cal:79, vel:87, vis:76, price:'9.8M'},
        {n:18, name:'Rubén Marqués',        pos:'EXT', pot:75, cal:80, vel:88, vis:78, price:'10.2M'},
        {n:19, name:'Óscar Puente',         pos:'DEL', pot:82, cal:85, vel:79, vis:78, price:'13.2M'},
        {n:20, name:'Andrés Glorieta',      pos:'DEL', pot:83, cal:86, vel:80, vis:79, price:'13.6M'},
        {n:21, name:'Tomás Viaducto',       pos:'MED', pot:76, cal:81, vel:77, vis:82, price:'10.8M'},
        {n:22, name:'Eduardo Rond Point',   pos:'DEF', pot:79, cal:75, vel:73, vis:73, price:'8.0M'},
      ]
    },
    {
      id:'nu', name:'Nómadas United', emoji:'🌍', color:'#ff7043',
      manager:'',
      desc:'Equipo de jugadores sin patria fija. Extranjeros de todo el mundo unidos por el fútbol. Físicos e impredecibles, con un talento especial en las bandas.',
      players:[
        {n:1,  name:'Kasimir "Errante" Volkov',    pos:'POR', pot:76, cal:68, vel:52, vis:64, price:'5.2M'},
        {n:2,  name:'Tariq Al-Rashid',             pos:'DEF', pot:82, cal:70, vel:76, vis:66, price:'7.8M'},
        {n:3,  name:'Emeka "Sabana" Okafor',       pos:'DEF', pot:85, cal:65, vel:80, vis:60, price:'7.0M'},
        {n:4,  name:'Björn "Vikingo" Lindqvist',   pos:'DEF', pot:88, cal:62, vel:68, vis:58, price:'6.4M'},
        {n:5,  name:'Matías "Gaucho" Pereyra',     pos:'DEF', pot:79, cal:72, vel:74, vis:68, price:'7.4M'},
        {n:6,  name:'Kenji "Samurái" Nakamura',    pos:'MED', pot:72, cal:82, vel:80, vis:84, price:'11.2M'},
        {n:7,  name:'Diallo "Griot" Kouyaté',      pos:'MED', pot:80, cal:76, vel:82, vis:74, price:'10.0M'},
        {n:8,  name:'Sven "Fiordo" Andersen',      pos:'MED', pot:78, cal:78, vel:70, vis:78, price:'9.4M'},
        {n:9,  name:'Rodrigo "Carioca" Vasconcelos',pos:'EXT',pot:68, cal:86, vel:92, vis:80, price:'12.8M'},
        {n:10, name:'Amir "Desierto" Hassan',      pos:'DEL', pot:82, cal:84, vel:78, vis:76, price:'13.2M'},
        {n:11, name:'Pablo "Tango" Ibáñez',        pos:'DEL', pot:78, cal:88, vel:82, vis:80, price:'14.4M'},
        {n:12, name:'Yusuf "Sahel" Traoré',        pos:'POR', pot:70, cal:62, vel:48, vis:58, price:'3.4M'},
        {n:13, name:'Costas "Mediterráneo" Papadopoulos',pos:'DEF',pot:80,cal:68,vel:70,vis:64,price:'6.8M'},
        {n:14, name:'Lev "Estepa" Bogdanov',       pos:'DEF', pot:82, cal:64, vel:66, vis:60, price:'6.0M'},
        {n:15, name:'Chidi "Lagos" Eze',           pos:'MED', pot:70, cal:80, vel:78, vis:76, price:'9.0M'},
        {n:16, name:'Hiroshi "Fuji" Tanaka',       pos:'MED', pot:68, cal:84, vel:74, vis:82, price:'10.2M'},
        {n:17, name:'Oumar "Baobab" Diallo',       pos:'EXT', pot:72, cal:78, vel:88, vis:70, price:'10.2M'},
        {n:18, name:'Sebastián "Pampas" Molina',   pos:'EXT', pot:74, cal:80, vel:86, vis:72, price:'10.8M'},
        {n:19, name:'Kwame "Kente" Mensah',        pos:'DEL', pot:80, cal:82, vel:80, vis:74, price:'12.6M'},
        {n:20, name:'Andrei "Dacia" Constantin',   pos:'DEL', pot:76, cal:80, vel:76, vis:72, price:'11.2M'},
        {n:21, name:'Finn "Fiordo" Magnusson',     pos:'MED', pot:74, cal:76, vel:72, vis:74, price:'8.4M'},
        {n:22, name:'Rashid "Oasis" Al-Farsi',     pos:'DEF', pot:76, cal:66, vel:68, vis:62, price:'5.6M'},
      ]
    },
  ],

  // ======= CALENDARIO (28 jornadas: 14 ida + 14 vuelta) =======
  // Generado con algoritmo round-robin para 8 equipos
  // IDs por índice: 0=rv,1=ac,2=ce,3=si,4=ip,5=nb,6=me,7=nu
  CALENDAR: [
    // --- IDA ---
    { j:1,  fecha:'Fin de semana 1 (5-6 Abr 2025)',   partidos:[['rv','nu'],['ac','me'],['ce','nb'],['si','ip']] },
    { j:2,  fecha:'Fin de semana 3 (19-20 Abr 2025)', partidos:[['rv','me'],['nu','nb'],['ac','ip'],['ce','si']] },
    { j:3,  fecha:'Fin de semana 5 (3-4 May 2025)',   partidos:[['rv','nb'],['me','ip'],['nu','si'],['ac','ce']] },
    { j:4,  fecha:'Fin de semana 7 (17-18 May 2025)', partidos:[['rv','ip'],['nb','si'],['me','ce'],['nu','ac']] },
    { j:5,  fecha:'Fin de semana 9 (31 May-1 Jun 2025)',partidos:[['rv','si'],['ip','ce'],['nb','ac'],['me','nu']] },
    { j:6,  fecha:'Fin de semana 11 (14-15 Jun 2025)',partidos:[['rv','ce'],['si','ac'],['ip','nu'],['nb','me']] },
    { j:7,  fecha:'Fin de semana 13 (28-29 Jun 2025)',partidos:[['rv','ac'],['ce','nu'],['si','me'],['ip','nb']] },
    // --- VUELTA ---
    { j:8,  fecha:'Fin de semana 15 (12-13 Jul 2025)',partidos:[['nu','rv'],['me','ac'],['nb','ce'],['ip','si']] },
    { j:9,  fecha:'Fin de semana 17 (26-27 Jul 2025)',partidos:[['me','rv'],['nb','nu'],['ip','ac'],['si','ce']] },
    { j:10, fecha:'Fin de semana 19 (9-10 Ago 2025)', partidos:[['nb','rv'],['ip','me'],['si','nu'],['ce','ac']] },
    { j:11, fecha:'Fin de semana 21 (23-24 Ago 2025)',partidos:[['ip','rv'],['si','nb'],['ce','me'],['ac','nu']] },
    { j:12, fecha:'Fin de semana 23 (6-7 Sep 2025)',  partidos:[['si','rv'],['ce','ip'],['ac','nb'],['nu','me']] },
    { j:13, fecha:'Fin de semana 25 (20-21 Sep 2025)',partidos:[['ce','rv'],['ac','si'],['nu','ip'],['me','nb']] },
    { j:14, fecha:'Fin de semana 27 (4-5 Oct 2025)',  partidos:[['ac','rv'],['nu','ce'],['me','si'],['nb','ip']] },
  ],

  // ======= HELPERS =======
  calcOVR(p){ return Math.round((p.pot+p.cal+p.vel+p.vis)/4); },

  diceRange(ovr){
    if(ovr>=80) return [4,5,6];
    if(ovr>=60) return [3,4,5,6];
    return [1,2,3,4,5,6];
  },

  diceBadge(ovr){
    if(ovr>=80) return '<span style="color:#ffd700;font-size:.75rem;">🎲 4-5-6</span>';
    if(ovr>=60) return '<span style="color:#81c784;font-size:.75rem;">🎲 3-4-5-6</span>';
    return '<span style="color:#90a4ae;font-size:.75rem;">🎲 1-6</span>';
  },

  rollDice(range){ return range[Math.floor(Math.random()*range.length)]; },

  teamById(id){ return LIGA.TEAMS.find(t=>t.id===id); },

  // ======= localStorage helpers =======
  save(key,val){ try{ localStorage.setItem('fantasia_'+key, JSON.stringify(val)); }catch(e){} },
  load(key,def){ try{ const v=localStorage.getItem('fantasia_'+key); return v?JSON.parse(v):def; }catch(e){ return def; } },

};
