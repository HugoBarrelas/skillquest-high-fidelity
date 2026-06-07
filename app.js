const app = document.querySelector("#app");

const STORE_KEY = "skillquest_v3_state";

const icons = {
  logo: '<path d="M12 3v3"/><path d="M18.4 5.6 16.3 7.7"/><path d="M21 12h-3"/><path d="M4.6 5.6 6.7 7.7"/><path d="M3 12h3"/><path d="M8 15a6 6 0 1 1 8 0c-.6.6-1 1.5-1 2.3V18H9v-.7c0-.8-.4-1.7-1-2.3Z"/><path d="M9 21h6"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  user: '<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  briefcase: '<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.79a.53.53 0 0 1 .294-.906l5.165-.75a2.123 2.123 0 0 0 1.596-1.16z"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15v4"/><path d="M12 9v10"/><path d="M17 5v14"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  book: '<path d="M12 7v14"/><path d="M3 5a3 3 0 0 1 3-3h5v19H6a3 3 0 0 0-3 3Z"/><path d="M21 5a3 3 0 0 0-3-3h-5v19h5a3 3 0 0 1 3 3Z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  moon: '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  language: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  trophy: '<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21h10a5 5 0 0 0-2.024-3.018A2 2 0 0 1 14 16.286V14.66"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M6 2h12v7a6 6 0 0 1-12 0Z"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>'
};

const baseChallenges = [
  { id: 1, title: "Design Logo", skill: "Design", people: 2, time: "2H", level: "Iniciante", description: "Criar uma identidade visual simples para uma marca de verão.", owner: "Ocean Studio" },
  { id: 20, title: "Tic Tac Hoe", skill: "JavaScript", people: 4, time: "5H", level: "Intermédio", description: "Construir a lógica de um jogo de tabuleiro com validação de vencedor.", owner: "PlayLab" },
  { id: 12, title: "Bug Fix", skill: "Java", people: 1, time: "3H", level: "Avançado", description: "Corrigir erros de execução e explicar a solução aplicada.", owner: "CodeFix" },
  { id: 7, title: "Portfolio UI", skill: "Design UI/UX", people: 3, time: "4H", level: "Intermédio", description: "Desenhar uma página de portefólio com hierarquia clara e cartões responsivos.", owner: "Pixel Crew" },
  { id: 31, title: "SQL Dashboard", skill: "Bases de Dados", people: 2, time: "6H", level: "Avançado", description: "Criar consultas para métricas e explicar decisões de modelação.", owner: "DataNest" },
  { id: 4, title: "Count Even", skill: "JavaScript", people: 1, time: "2H", level: "Iniciante", description: "Resolver um exercício simples de arrays e contagem de números pares.", owner: "CodeSprint" }
];

const challengeFilters = [
  ["all", "Todos"],
  ["design", "Design"],
  ["code", "Código"],
  ["database", "Dados"],
  ["beginner", "Inicial"]
];

const forumTopics = [
  { id: "java", title: "Dúvidas Java", users: "300", comments: "2k", tag: "Ajuda rápida", description: "Perguntas sobre classes, erros de compilação e exercícios de Java.", posts: [
    ["Marta", "Como sei quando devo usar uma interface em vez de uma classe abstrata?", "08:30"],
    ["João L.", "Começa por pensar se precisas de contrato comum ou comportamento partilhado.", "08:42"]
  ] },
  { id: "python", title: "Tudo sobre Python", users: "343", comments: "22k", tag: "Popular", description: "Discussões sobre listas, funções, automação e pequenos projetos.", posts: [
    ["Ana P.", "Partilha o erro completo quando o ciclo não percorre a lista.", "10:12"],
    ["Artur", "Usei enumerate e já consegui resolver. Obrigado!", "10:37"]
  ] },
  { id: "design", title: "Ideias designs", users: "1200", comments: "300", tag: "Criatividade", description: "Inspiração para layouts, cores, tipografia e protótipos.", posts: [
    ["Helena C.", "O mais importante é manter consistência nos espaçamentos.", "14:05"],
    ["Rita", "Cards com menos texto ficam mais fáceis de avaliar.", "14:20"]
  ] },
  { id: "cpp", title: "C / C++", users: "400", comments: "572", tag: "Técnico", description: "Ajuda com ponteiros, memória, funções e exercícios de lógica.", posts: [
    ["Carlos M.", "Se o programa fecha sozinho, começa por verificar acessos fora do array.", "11:22"],
    ["Tiago", "Era mesmo isso. Obrigado pela dica.", "11:35"]
  ] }
];

const defaultNotifications = [
  { id: "n1", title: "Design Logo corresponde às suas competências", body: "Novo desafio recomendado", icon: "briefcase", route: "challenge", unread: true },
  { id: "n2", title: "Tic Tac Hoe termina em 5H", body: "Prazo a terminar", icon: "clock", route: "management", unread: true },
  { id: "n3", title: "A sua solução Bug Fix foi avaliada", body: "Feedback recebido", icon: "star", route: "evaluation", unread: false },
  { id: "n4", title: "Foi adicionado a uma nova equipa", body: "Equipa formada", icon: "users", route: "chats", unread: false }
];

const defaultMessages = [
  { from: "mentor", text: "Olá! Qual é a sua dúvida?", time: "10:14" },
  { from: "me", text: "Tenho uma dúvida sobre listas em Python.", time: "10:16" },
  { from: "mentor", text: "Claro. Estás a tentar percorrer a lista ou alterar valores?", time: "10:17" }
];

const defaultRecruiterMessages = [
  { from: "student", text: "Bom dia, vi o desafio de Design Logo e tenho uma dúvida.", time: "09:42" },
  { from: "me", text: "Claro, diz-me onde estás bloqueado.", time: "09:44" },
  { from: "student", text: "Não sei se a paleta pode ter azul escuro ou só tons de verão.", time: "09:45" }
];

const defaultTeamMessages = [
  { from: "team", text: "João: O que acham desta paleta?", time: "11:02" },
  { from: "me", text: "Acho que funciona, mas falta contraste no botão.", time: "11:05" },
  { from: "team", text: "Marta: Vou ajustar isso antes da submissão.", time: "11:07" }
];

const areaOptions = [
  "Informática",
  "Design UI/UX",
  "Programação Web",
  "Bases de Dados",
  "Marketing Digital",
  "Recursos Humanos",
  "Gestão de Projetos",
  "Cibersegurança",
  "Data Science"
];

const contactProfiles = {
  "mentor-joao": { type: "Mentor", name: "João L.", area: "Python", status: "Online", rating: "4.9", sessions: 38, copy: "Ajuda alunos a desbloquear lógica, listas e automação com exemplos simples.", route: "chatDetail", chatContext: "mentor" },
  "mentor-anabela": { type: "Mentora", name: "Anabela C.", area: "Bases de Dados", status: "Disponível", rating: "4.8", sessions: 27, copy: "Especialista em modelação, SQL e normalização de dados.", route: "chatDetail", chatContext: "mentor" },
  "mentor-maria": { type: "Mentora", name: "Maria M.", area: "CSS / HTML", status: "Disponível", rating: "4.7", sessions: 31, copy: "Revê interfaces responsivas, acessibilidade e organização visual.", route: "chatDetail", chatContext: "mentor" },
  "recruiter-ocean": { type: "Recrutador", name: "Ocean Studio", area: "Design Logo", status: "Online", rating: "4.8", sessions: 12, copy: "Equipa que publica desafios de identidade visual e pode esclarecer requisitos antes da submissão.", route: "chatDetail", chatContext: "mentor" },
  "recruiter-playlab": { type: "Recrutador", name: "PlayLab", area: "JavaScript", status: "Disponível", rating: "4.7", sessions: 9, copy: "Recrutador responsável por desafios de lógica, jogos simples e validação de código.", route: "chatDetail", chatContext: "mentor" },
  "recruiter-datanest": { type: "Recrutador", name: "DataNest", area: "Bases de Dados", status: "Disponível", rating: "4.6", sessions: 7, copy: "Publica desafios de SQL e dashboards, com foco em clareza de dados e explicação técnica.", route: "chatDetail", chatContext: "mentor" },
  "student-artur": { type: "Aluno", name: "Artur Silva", area: "Design Logo", status: "A aguardar feedback", rating: "4.6", sessions: 14, copy: "Candidato focado em design visual e prototipagem de interfaces.", route: "chatDetail", chatContext: "student" },
  "student-ines": { type: "Aluna", name: "Inês Rocha", area: "API de Ranking", status: "Online", rating: "4.4", sessions: 9, copy: "Está a trabalhar em autenticação e endpoints de ranking.", route: "chatDetail", chatContext: "student" },
  "student-tiago": { type: "Aluno", name: "Tiago M.", area: "Landing Page", status: "Entrega submetida", rating: "4.2", sessions: 6, copy: "Entrega projetos front-end com atenção a responsividade.", route: "chatDetail", chatContext: "student" },
  "team-design": { type: "Equipa", name: "Design Logo", area: "Projeto colaborativo", status: "1H em falta", rating: "3 membros", sessions: 2, copy: "Equipa a fechar paleta, contraste e proposta final.", route: "chatDetail", chatContext: "team" },
  "team-tictac": { type: "Equipa", name: "Tic Tac Hoe", area: "JavaScript", status: "3H em falta", rating: "4 membros", sessions: 5, copy: "Equipa a rever validação de vencedor e estados do jogo.", route: "chatDetail", chatContext: "team" }
};

const ROLE_LOCK_MS = 7 * 24 * 60 * 60 * 1000;

const defaultState = {
  accounts: [],
  currentEmail: null,
  selectedRole: null,
  pendingRole: null,
  selectedSubmissionId: null,
  selectedChallengeId: 1,
  selectedContactId: "mentor-joao",
  selectedTopicId: "java",
  notificationReadIds: [],
  confirmClearDemo: false,
  routeHistory: [],
  menuContext: false,
  chatBack: "chats",
  chatContext: "mentor",
  messages: [],
  recruiterMessages: [],
  teamMessages: [],
  notifications: [],
  submissions: [],
  forumComments: {},
  recruiterChallenges: [],
  toast: "",
  theme: "light"
};

let state = loadState();
let loadingTimer = null;

function loadState() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = { ...structuredClone(defaultState), ...JSON.parse(raw) };
    if (!Array.isArray(parsed.recruiterMessages)) parsed.recruiterMessages = [];
    if (!Array.isArray(parsed.teamMessages)) parsed.teamMessages = [];
    if (!Array.isArray(parsed.messages)) parsed.messages = [];
    if (!Array.isArray(parsed.accounts)) parsed.accounts = [];
    if (!Array.isArray(parsed.notificationReadIds)) parsed.notificationReadIds = [];
    if (!Array.isArray(parsed.routeHistory)) parsed.routeHistory = [];
    if (typeof parsed.confirmClearDemo !== "boolean") parsed.confirmClearDemo = false;
    if (!parsed.forumComments || typeof parsed.forumComments !== "object") parsed.forumComments = {};
    if (!parsed.selectedChallengeId) parsed.selectedChallengeId = 1;
    if (!parsed.selectedContactId) parsed.selectedContactId = "mentor-joao";
    if (!parsed.selectedTopicId) parsed.selectedTopicId = "java";
    if (!parsed.chatBack) parsed.chatBack = "chats";
    if (!parsed.chatContext) parsed.chatContext = "mentor";
    if (!["light", "dark"].includes(parsed.theme)) parsed.theme = "light";
    return parsed;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function activeAccount() {
  return state.accounts.find((account) => account.email === state.currentEmail) || null;
}

function currentRole() {
  return state.selectedRole || activeAccount()?.role || "student";
}

function loadAccountChats(account) {
  state.messages = Array.isArray(account?.messages) ? structuredClone(account.messages) : [];
  state.recruiterMessages = Array.isArray(account?.recruiterMessages) ? structuredClone(account.recruiterMessages) : [];
  state.teamMessages = Array.isArray(account?.teamMessages) ? structuredClone(account.teamMessages) : [];
}

function persistAccountChats(account = activeAccount()) {
  if (!account) return;
  account.messages = structuredClone(state.messages);
  account.recruiterMessages = structuredClone(state.recruiterMessages);
  account.teamMessages = structuredClone(state.teamMessages);
}

function roleHome(role = currentRole()) {
  return role === "recruiter" ? "recruiterDashboard" : "dashboard";
}

function roleLabel(role = currentRole()) {
  return role === "recruiter" ? "Recrutador" : "Aluno";
}

function activeChallengeFilter() {
  return sessionStorage.getItem("challengeFilter") || "all";
}

function activeChallengeSearch() {
  return sessionStorage.getItem("challengeSearch") || "";
}

function filteredChallenges() {
  const filter = activeChallengeFilter();
  const query = activeChallengeSearch().trim().toLowerCase();
  const byFilter = baseChallenges.filter((item) => {
    if (filter === "design") return item.skill.toLowerCase().includes("design");
    if (filter === "code") return ["javascript", "java"].some((skill) => item.skill.toLowerCase().includes(skill));
    if (filter === "database") return item.skill.toLowerCase().includes("dados");
    if (filter === "beginner") return item.level === "Iniciante";
    return true;
  });
  if (!query) return byFilter;
  return byFilter.filter((item) => [item.title, item.skill, item.level, item.description, item.owner].join(" ").toLowerCase().includes(query));
}

function selectedChallenge() {
  const id = Number(state.selectedChallengeId || 1);
  return baseChallenges.find((challenge) => challenge.id === id)
    || state.recruiterChallenges.find((challenge) => Number(challenge.id) === id)
    || baseChallenges[0];
}

function challengeObjectives(challenge) {
  const objectives = {
    "Design Logo": ["Cumprir a paleta de cores pedida.", "Criar elementos visuais consistentes.", "Garantir leitura clara em tamanhos pequenos."],
    "Tic Tac Hoe": ["Validar vencedor em linhas, colunas e diagonais.", "Bloquear jogadas inválidas.", "Mostrar reinício depois do fim do jogo."],
    "Bug Fix": ["Identificar o erro principal.", "Corrigir a execução sem quebrar testes.", "Explicar a solução aplicada."],
    "Portfolio UI": ["Criar hierarquia visual clara.", "Usar layout responsivo.", "Apresentar projetos com microcopy objetiva."],
    "SQL Dashboard": ["Criar consultas para métricas principais.", "Explicar decisões de modelação.", "Preparar resultado para leitura executiva."],
    "Count Even": ["Percorrer arrays corretamente.", "Contar apenas números pares.", "Documentar a solução em linguagem simples."]
  };
  return objectives[challenge.title] || [
    "Ler o briefing antes de começar.",
    "Entregar uma solução alinhada com a competência pedida.",
    "Explicar decisões importantes na submissão."
  ];
}

function selectedContact() {
  const fallback = currentRole() === "recruiter" ? "student-artur" : "recruiter-ocean";
  return contactProfiles[state.selectedContactId] || contactProfiles[fallback];
}

function selectedTopic() {
  return forumTopics.find((topic) => topic.id === state.selectedTopicId) || forumTopics[0];
}

function topicPosts(topic) {
  return [...topic.posts, ...(state.forumComments?.[topic.id] || [])];
}

function studentBadges(account, submissions) {
  const skills = account?.skills || [];
  const hasForumActivity = Object.values(state.forumComments || {}).some((comments) =>
    comments.some(([author]) => author === account?.name)
  );
  const hasMentorMessages = (state.messages || []).some((message) => message.from === "me");
  return [
    { title: "Primeira Submissão", copy: submissions.length ? "Entrega registada" : "Pronta para desbloquear", icon: "upload", active: submissions.length > 0 },
    { title: "HTML Pro", copy: skills.some((skill) => skill.toLowerCase().includes("html")) ? "Competência ativa" : "Adiciona HTML ao perfil", icon: "book", active: skills.some((skill) => skill.toLowerCase().includes("html")) },
    { title: "Top Fórum", copy: hasForumActivity ? "Participação na comunidade" : "Participa no fórum", icon: "chat", active: hasForumActivity },
    { title: "Mentoria Usada", copy: hasMentorMessages ? "Pediu ajuda antes de submeter" : "Fala com um mentor", icon: "users", active: hasMentorMessages }
  ];
}

function currentTheme() {
  return state.theme === "dark" ? "dark" : "light";
}

function menuBack(defaultBack) {
  return state.menuContext ? "menu" : defaultBack;
}

function recruiterChallengesFor(account = activeAccount()) {
  return (state.recruiterChallenges || []).filter((challenge) => challenge.recruiterEmail === account?.email);
}

function recruiterSubmissionsFor(account = activeAccount()) {
  const ownedChallenges = recruiterChallengesFor(account);
  const ownedIds = new Set(ownedChallenges.map((challenge) => String(challenge.id)));
  return (state.submissions || []).filter((submission) =>
    submission.recruiterEmail === account?.email
    || (ownedIds.size > 0 && ownedIds.has(String(submission.challengeId)))
  );
}

function submissionItems() {
  const fallback = {
    id: "demo-submission",
    challenge: "Design Logo",
    title: "Proposta visual inicial",
    name: "Artur Silva",
    email: "artur@skillquest.pt",
    text: "Submissão de exemplo para avaliação.",
    fileName: "design-logo-proposta.pdf",
    link: "https://portfolio.example/design-logo",
    status: "Pendente",
    submittedAt: "Hoje, 14:20"
  };
  const account = activeAccount();
  if (currentRole() === "recruiter") return recruiterSubmissionsFor(account);
  return (state.submissions || []).filter((submission) => submission.email === account?.email);
}

function selectedSubmission() {
  const all = submissionItems();
  return all.find((item) => String(item.id) === String(state.selectedSubmissionId)) || all[0] || null;
}

function visibleNotifications() {
  const readIds = new Set(state.notificationReadIds || []);
  const account = activeAccount();
  if (currentRole() === "recruiter") {
    const recruiterNotes = [];
    const personalNotes = state.notifications.filter((note) => note.email === account?.email);
    if (recruiterChallengesFor(account).length || recruiterSubmissionsFor(account).length) recruiterNotes.push(
      { id: "r1", title: "Nova candidatura recebida", body: "Artur enviou uma entrega para Design Logo.", icon: "users", route: "recruiterSubmissions", unread: true },
      { id: "r2", title: "Pergunta de aluno", body: "Uma dúvida aguarda resposta no chat.", icon: "chat", route: "chats", unread: true },
      { id: "r3", title: "Desafio em revisão", body: "A API de Ranking tem candidaturas para analisar.", icon: "briefcase", route: "recruiterSubmissions", unread: false }
    );
    return [...personalNotes, ...recruiterNotes].map((note) => ({ ...note, unread: note.unread && !readIds.has(note.id) }));
  }
  return state.notifications
    .filter((note) => note.email === account?.email)
    .map((note) => ({ ...note, unread: note.unread && !readIds.has(note.id) }));
}

function markNotificationRead(id) {
  if (!state.notificationReadIds.includes(id)) state.notificationReadIds.push(id);
  const stored = state.notifications.find((note) => note.id === id);
  if (stored) stored.unread = false;
}

function addWelcomeNotification(account, role) {
  if (!account || account.welcomeNotificationSent) return;
  const isRecruiter = role === "recruiter";
  state.notifications.unshift({
    id: `welcome-${Date.now()}`,
    email: account.email,
    title: "Bem-vindo à SkillQuest",
    body: isRecruiter
      ? "A tua conta está pronta. Cria o primeiro desafio para começares a receber candidaturas."
      : "A tua conta está pronta. Explora desafios, fala com mentores e acompanha o teu progresso.",
    icon: isRecruiter ? "briefcase" : "logo",
    route: roleHome(role),
    unread: true
  });
  account.welcomeNotificationSent = true;
}

function notificationGroups(notes) {
  const unread = notes.filter((note) => note.unread);
  const read = notes.filter((note) => !note.unread);
  return [
    ["Por ler", unread],
    ["Recentes", read]
  ].filter(([, items]) => items.length);
}

function recruiterStats() {
  const account = activeAccount();
  const challenges = recruiterChallengesFor(account);
  const submissions = recruiterSubmissionsFor(account);
  const candidates = challenges.reduce((sum, challenge) => sum + Number(challenge.candidates || 0), 0) + submissions.length;
  const review = challenges.filter((challenge) => String(challenge.status || "").toLowerCase().includes("revis")).length
    + submissions.filter((item) => !item.rating).length;
  const published = challenges.filter((challenge) => String(challenge.status || "").toLowerCase().includes("public")).length;
  const topSkill = challenges[0]?.skill || "Sem dados";
  return {
    challenges: challenges.length,
    candidates,
    review,
    published,
    topSkill
  };
}

function roleSwitchInfo(account) {
  const lastChange = Number(account?.lastRoleChange || 0);
  const elapsed = Date.now() - lastChange;
  const remaining = Math.max(0, ROLE_LOCK_MS - elapsed);
  return {
    canSwitch: !lastChange || remaining <= 0,
    daysRemaining: Math.ceil(remaining / (24 * 60 * 60 * 1000))
  };
}

function requireSession() {
  if (!activeAccount() && !["login", "register", "success", "chooseRole", "onboarding"].includes(currentRoute())) {
    go("login", { replace: true });
    return false;
  }
  return true;
}

function setToast(message) {
  state.toast = message;
  saveState();
}

function icon(name, size = 22) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ""}</svg>`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function go(route, options = {}) {
  const current = currentRoute();
  if (!options.replace && !options.back && current && current !== route) {
    const previous = state.routeHistory[state.routeHistory.length - 1];
    if (previous !== current) {
      state.routeHistory.push(current);
      state.routeHistory = state.routeHistory.slice(-40);
    }
  }
  saveState();
  if (current === route) {
    render();
    return;
  }
  window.location.hash = route;
}

function currentRoute() {
  return window.location.hash.replace("#", "") || "login";
}

function goBack(fallback = roleHome()) {
  const current = currentRoute();
  let target = null;
  while (state.routeHistory.length) {
    const candidate = state.routeHistory.pop();
    if (candidate && candidate !== current && renderers[candidate]) {
      target = candidate;
      break;
    }
  }
  saveState();
  go(target || fallback || roleHome(), { back: true, replace: true });
}

function topbar(title, options = {}) {
  const backTarget = options.back || null;
  return `
    <header class="topbar">
      <button class="icon-btn" ${backTarget ? `data-back="${backTarget}"` : `data-route="menu"`} aria-label="${backTarget ? "Voltar" : "Menu"}">
        ${icon(backTarget ? "back" : "menu")}
      </button>
      <div class="topbar-title">${title}</div>
      <div class="top-actions">
        <button class="icon-btn" data-route="notifications" aria-label="Notificações">${icon("bell")}</button>
        <button class="icon-btn" data-route="profile" aria-label="Perfil">${icon("user")}</button>
      </div>
    </header>
  `;
}

function bottomNav(active) {
  const role = currentRole();
  return `
    <nav class="bottom-nav" aria-label="Navegação principal">
      <button class="nav-btn ${active === "dashboard" ? "active" : ""}" data-route="${role === "recruiter" ? "recruiterDashboard" : "dashboard"}">${icon("home")}<span>Início</span></button>
      <button class="nav-btn ${active === "chats" ? "active" : ""}" data-route="chats">${icon("chat")}<span>Chats</span></button>
      <button class="nav-btn ${active === "mentors" ? "active" : ""}" data-route="${role === "recruiter" ? "recruiterSubmissions" : "mentors"}">${icon("users")}<span>${role === "recruiter" ? "Candidaturas" : "Mentores"}</span></button>
    </nav>
  `;
}

function authBrand() {
  return `
    <div class="brand-block">
      <div class="brand-mark">${icon("logo", 44)}</div>
      <h1 class="brand-name">SkillQuest</h1>
      <p class="tagline">Aprende | Cria | Cresce</p>
    </div>
  `;
}

function toast() {
  if (!state.toast) return "";
  const message = state.toast;
  state.toast = "";
  saveState();
  return `<div class="toast">${escapeHtml(message)}</div>`;
}

function emptyState(title, copy, ic = "info", actionRoute = "", actionLabel = "") {
  return `
    <article class="empty-state">
      <span class="empty-icon">${icon(ic, 26)}</span>
      <h3 class="card-title">${title}</h3>
      <p class="card-copy">${copy}</p>
      ${actionRoute ? `<button class="secondary-btn compact-btn" data-route="${actionRoute}">${actionLabel || "Continuar"}</button>` : ""}
    </article>
  `;
}

function areaSelect(name, selected = "", label = "Área") {
  return `
    <label class="field">
      <span class="label">${label}</span>
      <select class="input" name="${name}" required>
        <option value="" ${!selected ? "selected" : ""} disabled>Selecionar área</option>
        ${areaOptions.map((area) => `<option value="${escapeHtml(area)}" ${area === selected ? "selected" : ""}>${escapeHtml(area)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderLogin() {
  return `
    <section class="screen auth">
      ${authBrand()}
      ${toast()}
      <form class="hero-panel" data-action="login">
        <h2 class="section-title">Entrar</h2>
        <label class="field">
          <span class="label">Email</span>
          <input class="input" name="email" type="email" placeholder="exemplo@email.com" required />
        </label>
        <label class="field">
          <span class="label">Palavra-passe</span>
          <input class="input" name="password" type="password" placeholder="A tua palavra-passe" required />
        </label>
        <button class="primary-btn" type="submit">${icon("check")} Entrar</button>
        <div class="auth-footer">
          Ainda não tem conta?
          <button class="text-link" type="button" data-route="register">Criar conta</button>
        </div>
      </form>
    </section>
  `;
}

function renderRegister() {
  return `
    <section class="screen auth">
      ${authBrand()}
      ${toast()}
      <form class="hero-panel" data-action="register">
        <h2 class="section-title">Criar conta</h2>
        <label class="field">
          <span class="label">Nome</span>
          <input class="input" name="name" placeholder="O teu nome" required />
        </label>
        <label class="field">
          <span class="label">Email</span>
          <input class="input" name="email" type="email" placeholder="exemplo@email.com" required />
        </label>
        <label class="field">
          <span class="label">Palavra-passe</span>
          <input class="input" name="password" type="password" minlength="6" placeholder="Mínimo 6 caracteres" required />
        </label>
        ${areaSelect("area", "", "Curso / área")}
        <button class="primary-btn" type="submit">${icon("check")} Criar conta</button>
        <div class="auth-footer">
          Já tem conta?
          <button class="text-link" type="button" data-route="login">Login</button>
        </div>
      </form>
    </section>
  `;
}

function renderSuccess() {
  const account = activeAccount();
  return `
    <section class="screen auth">
      <div class="success-check">${icon("check", 54)}</div>
      <div class="hero-panel">
        <h2 class="section-title">Conta criada</h2>
        <p class="section-subtitle">${escapeHtml(account?.name || "Utilizador")}, o teu email foi verificado com sucesso.</p>
        <button class="primary-btn" data-route="chooseRole">Escolher perfil</button>
      </div>
    </section>
  `;
}

function renderChooseRole() {
  if (!activeAccount()) return renderLogin();
  const pending = state.pendingRole || "";
  return `
    <section class="screen auth">
      ${authBrand()}
      <div class="hero-panel">
        <h2 class="section-title">Escolhe o teu tipo de utilizador</h2>
        <p class="section-subtitle">Seleciona uma opção e confirma. Podes mudar depois nas definições, com limite de 7 dias.</p>
        <div class="role-grid">
          <button class="role-card ${pending === "student" ? "selected" : ""}" data-pending-role="student" type="button">
            <span class="role-icon">${icon("book", 30)}</span>
            <span>
              <strong class="role-title">Aluno</strong>
              <p class="role-copy">Participar em desafios, submeter trabalhos e falar com mentores.</p>
            </span>
            ${icon("check")}
          </button>
          <button class="role-card ${pending === "recruiter" ? "selected" : ""}" data-pending-role="recruiter" type="button">
            <span class="role-icon">${icon("briefcase", 30)}</span>
            <span>
              <strong class="role-title">Recrutador</strong>
              <p class="role-copy">Criar desafios, acompanhar submissões e avaliar candidatos.</p>
            </span>
            ${icon("check")}
          </button>
        </div>
        ${pending ? `<button class="primary-btn role-confirm" type="button" data-confirm-role>${icon("check")} Confirmar como ${roleLabel(pending)}</button>` : `<p class="card-copy role-help">Escolhe primeiro uma opção para aparecer o botão de confirmação.</p>`}
      </div>
    </section>
  `;
}

function renderOnboarding() {
  if (!activeAccount()) return renderLogin();
  const role = currentRole();
  const cards = role === "recruiter"
    ? [
        ["briefcase", "Cria desafios claros", "Define competência, tempo e objetivo para receber candidaturas melhores."],
        ["star", "Avalia com contexto", "Abre cada submissão, dá nota e guarda feedback para o aluno."],
        ["chat", "Responde a dúvidas", "Mantém contacto com candidatos e melhora a qualidade das entregas."]
      ]
    : [
        ["briefcase", "Escolhe desafios", "Filtra por área, dificuldade ou tecnologia e entra nos detalhes."],
        ["users", "Pede ajuda", "Fala com mentores ou equipas quando ficares bloqueado."],
        ["trophy", "Desbloqueia conquistas", "Submete trabalhos, participa no fórum e acompanha o teu progresso."]
      ];
  return `
    <section class="screen auth">
      ${authBrand()}
      <div class="hero-panel onboarding-panel">
        <span class="eyebrow">Começar como ${roleLabel(role)}</span>
        <h2 class="section-title">Três passos rápidos</h2>
        <div class="onboarding-list">
          ${cards.map(([ic, title, copy]) => `
            <article class="onboarding-card">
              <span class="mini-avatar">${icon(ic)}</span>
              <span>
                <strong>${title}</strong>
                <p class="card-copy">${copy}</p>
              </span>
            </article>
          `).join("")}
        </div>
        <button class="primary-btn" data-finish-onboarding>${icon("check")} Ir para o painel</button>
      </div>
    </section>
  `;
}

function renderDashboard() {
  if (currentRole() === "recruiter") return renderRecruiterDashboard();
  const account = activeAccount();
  const submissions = state.submissions.filter((item) => item.email === account?.email);
  const challenges = filteredChallenges();
  const filter = activeChallengeFilter();
  const search = activeChallengeSearch();
  return `
    <section class="screen">
      ${topbar("SkillQuest")}
      ${toast()}
      <div class="dashboard-hero student">
        <span class="eyebrow">Hub principal</span>
        <h2 class="section-title">Painel de Oportunidades</h2>
        <p class="section-subtitle">Olá, ${escapeHtml(account?.name || "aluno")}. Escolhe um desafio, acompanha progresso e pede ajuda quando precisares.</p>
      </div>
      <div class="search-box">${icon("search")}<input data-challenge-search placeholder="Procurar desafios" value="${escapeHtml(search)}" /></div>
      <div class="filter-row" aria-label="Filtros de desafios">
        ${challengeFilters.map(([id, label]) => `<button class="filter-chip ${filter === id ? "active" : ""}" data-filter="${id}">${label}</button>`).join("")}
      </div>
      <article class="tip-card">${icon("info", 18)} <span>Tip: abre o detalhe antes de iniciar para veres critérios, prazo e ficheiros aceites.</span></article>
      <div class="stats-row">
        <div class="stat"><strong>${account?.completed || 0}</strong><span>concluídos</span></div>
        <div class="stat"><strong>${account?.rating || "-"}</strong><span>avaliação</span></div>
        <div class="stat"><strong>${account?.level ? `N${account.level}` : "N1"}</strong><span>nível</span></div>
      </div>
      <div class="quick-row">
        <button class="quick-action" data-route="management">${icon("briefcase")}<span>Gestão</span></button>
        <button class="quick-action" data-route="forum">${icon("chat")}<span>Fórum</span></button>
        <button class="quick-action" data-route="mentors">${icon("users")}<span>Mentores</span></button>
      </div>
      <div class="card-list">${challenges.length ? challenges.map(challengeCard).join("") : `
        <article class="empty-state">
          <span class="empty-icon">${icon("briefcase", 26)}</span>
          <h3 class="card-title">Sem desafios encontrados</h3>
          <p class="card-copy">Limpa a pesquisa ou experimenta outro filtro para encontrar oportunidades.</p>
          <button class="secondary-btn compact-btn" data-clear-challenge-search>Ver todos</button>
        </article>
      `}</div>
    </section>
    ${bottomNav("dashboard")}
  `;
}

function challengeCard(challenge) {
  return `
    <article class="challenge-card">
      <div class="card-top">
        <div>
          <span class="eyebrow">Desafio #${challenge.id}</span>
          <h3 class="card-title">${challenge.title}</h3>
          <p class="card-copy">${challenge.description}</p>
        </div>
        <span class="pill">${icon("clock", 16)} ${challenge.time}</span>
      </div>
      <div class="meta-row">
        <span class="pill blue">${challenge.skill}</span>
        <span class="pill gold">${challenge.level}</span>
        <span class="pill">${icon("users", 16)} ${challenge.people} pessoas</span>
      </div>
      <div class="card-actions">
        <button class="secondary-btn" data-open-challenge="${challenge.id}">Abrir desafio</button>
      </div>
    </article>
  `;
}

function renderRecruiterDashboard() {
  if (currentRole() !== "recruiter") return renderDashboard();
  const account = activeAccount();
  const stats = recruiterStats();
  const recruiterChallenges = recruiterChallengesFor(account);
  const recruiterSubmissions = recruiterSubmissionsFor(account);
  const hasRecruiterData = Boolean(stats.challenges || stats.candidates || recruiterSubmissions.length);
  return `
    <section class="screen">
      ${topbar("SkillQuest")}
      ${toast()}
      <div class="dashboard-hero recruiter">
        <span class="eyebrow">Área profissional</span>
        <h2 class="section-title">Painel do Recrutador</h2>
        <p class="section-subtitle">Olá, ${escapeHtml(account?.name || "recrutador")}. Gere desafios, acompanha candidaturas e responde aos alunos.</p>
      </div>
      <div class="stats-row">
        <div class="stat"><strong>${stats.challenges}</strong><span>desafios</span></div>
        <div class="stat"><strong>${stats.candidates}</strong><span>candidatos</span></div>
        <div class="stat"><strong>${stats.review}</strong><span>em revisão</span></div>
      </div>
      <button class="primary-btn" data-route="createChallenge">${icon("plus")} Criar desafio</button>
      <div class="empty-space"></div>
      <div class="analytics-grid">
        <article class="analytics-card">
          <span class="eyebrow">Candidaturas</span>
          <h3 class="card-title">Ritmo semanal</h3>
          <div class="bar-chart" aria-label="Candidaturas por dia">
            ${(hasRecruiterData ? [42, 64, 38, 82, 55, 76] : [0, 0, 0, 0, 0, 0]).map((value) => `<span style="height:${value}%"></span>`).join("")}
          </div>
        </article>
        <article class="analytics-card">
          <span class="eyebrow">Qualidade</span>
          <h3 class="card-title">${hasRecruiterData ? "4.8 média" : "Sem avaliações"}</h3>
          <div class="score-ring" style="--score: ${hasRecruiterData ? 86 : 0}"><strong>${hasRecruiterData ? "86%" : "0%"}</strong></div>
          <p class="score-caption">${hasRecruiterData ? "adequação das candidaturas" : "aparece após receber candidaturas"}</p>
        </article>
      </div>
      <article class="pipeline-card">
        <div class="card-top">
          <div>
            <span class="eyebrow">Pipeline</span>
            <h3 class="card-title">Candidaturas organizadas</h3>
          </div>
          <span class="pill blue">${escapeHtml(stats.topSkill)}</span>
        </div>
        <div class="pipeline-strip" aria-label="Estado dos desafios">
          <span><strong>${stats.published}</strong><small>publicados</small></span>
          <span><strong>${stats.review}</strong><small>em revisão</small></span>
          <span><strong>${recruiterSubmissions.filter((item) => item.rating).length}</strong><small>avaliados</small></span>
        </div>
      </article>
      <div class="empty-space"></div>
      <article class="tip-card">${icon("info", 18)} <span>Briefings com critérios e ficheiros aceites recebem candidaturas mais fáceis de avaliar.</span></article>
      <div class="empty-space"></div>
      <div class="card-list">
        ${recruiterChallenges.map((challenge) => `
          <article class="challenge-card">
            <div class="card-top">
              <div>
                <span class="eyebrow">${challenge.status}</span>
                <h3 class="card-title">${escapeHtml(challenge.title)}</h3>
                <p class="card-copy">${escapeHtml(challenge.skill)} · ${escapeHtml(challenge.time)} · ${escapeHtml(challenge.candidates)} candidatos</p>
              </div>
              <span class="pill blue">${icon("briefcase", 16)}</span>
            </div>
            <div class="meta-row">
              ${challenge.level ? `<span class="pill gold">${escapeHtml(challenge.level)}</span>` : ""}
              ${challenge.deadline ? `<span class="pill">${icon("clock", 16)} ${escapeHtml(challenge.deadline)}</span>` : ""}
              ${challenge.maxParticipants ? `<span class="pill">${icon("users", 16)} ${escapeHtml(challenge.maxParticipants)} máx.</span>` : ""}
            </div>
            <div class="card-actions">
              <button class="secondary-btn" data-route="recruiterSubmissions">Ver candidaturas</button>
            </div>
          </article>
        `).join("")}
        ${!recruiterChallenges.length ? `
          <article class="empty-state">
            <span class="empty-icon">${icon("briefcase", 26)}</span>
            <h3 class="card-title">Sem desafios criados</h3>
            <p class="card-copy">Cria o primeiro desafio para começar a receber candidaturas.</p>
            <button class="secondary-btn compact-btn" data-route="createChallenge">Criar desafio</button>
          </article>
        ` : ""}
      </div>
    </section>
    ${bottomNav("dashboard")}
  `;
}

function renderCreateChallenge() {
  if (currentRole() !== "recruiter") return renderDashboard();
  return `
    <section class="screen">
      ${topbar("Criar desafio", { back: menuBack("recruiterDashboard") })}
      <form class="hero-panel" data-action="createChallenge">
        <h2 class="section-title">Novo desafio</h2>
        <article class="tip-card">${icon("info", 18)} <span>Um bom desafio tem objetivo, critérios, prazo e formato de entrega.</span></article>
        <label class="field"><span class="label">Título</span><input class="input" name="title" placeholder="Ex: Website responsivo" required /></label>
        <label class="field"><span class="label">Competência principal</span><input class="input" name="skill" placeholder="Ex: HTML/CSS" required /></label>
        <div class="detail-grid">
          <label class="field"><span class="label">Tempo estimado</span><input class="input" name="time" placeholder="Ex: 4H" required /></label>
          <label class="field">
            <span class="label">Dificuldade</span>
            <select class="input" name="level" required>
              <option>Iniciante</option>
              <option selected>Intermédio</option>
              <option>Avançado</option>
            </select>
          </label>
        </div>
        <div class="detail-grid">
          <label class="field"><span class="label">Prazo</span><input class="input" name="deadline" placeholder="Ex: 24 horas" required /></label>
          <label class="field"><span class="label">Participantes</span><input class="input" name="maxParticipants" type="number" min="1" max="8" value="2" required /></label>
        </div>
        <label class="field"><span class="label">Objetivo</span><textarea class="textarea" name="description" placeholder="Explica o que o aluno deve entregar" required></textarea></label>
        <label class="field"><span class="label">Critérios de avaliação</span><textarea class="textarea" name="criteria" placeholder="Ex: código funcional, explicação clara, interface responsiva" required></textarea></label>
        <label class="field"><span class="label">Ficheiros permitidos</span><input class="input" name="allowedFiles" value="PDF, Word, PowerPoint, PNG, JPG" required /></label>
        <button class="primary-btn" type="submit">${icon("plus")} Publicar desafio</button>
      </form>
    </section>
    ${bottomNav("dashboard")}
  `;
}

function renderRecruiterSubmissions() {
  if (currentRole() !== "recruiter") return renderDashboard();
  const all = submissionItems();
  return `
    <section class="screen">
      ${topbar("Candidaturas", { back: menuBack("recruiterDashboard") })}
      ${toast()}
      <h2 class="section-title">Candidaturas recebidas</h2>
      <p class="section-subtitle">Analisa submissões, abre detalhes e responde aos candidatos.</p>
      <div class="card-list">
        ${all.length ? all.map((item) => `
          <article class="review-card">
            <span class="eyebrow">${escapeHtml(item.status || "Pendente")}</span>
            <h3 class="card-title">${escapeHtml(item.challenge)}</h3>
            <p class="card-copy">${escapeHtml(item.name || item.email || "Aluno")} · ${escapeHtml(item.text || "")}</p>
            ${item.fileName ? `<p class="card-copy"><strong>Ficheiro:</strong> ${escapeHtml(item.fileName)}</p>` : ""}
            ${item.rating ? `<div class="mini-review">${icon("star", 16)} ${escapeHtml(item.rating)}/5 · ${escapeHtml(item.feedback || "Feedback registado")}</div>` : ""}
            <div class="meta-row">
              <button class="pill action-pill" data-open-submission="${escapeHtml(item.id)}">${icon("star", 16)} Ver detalhe</button>
            <button class="pill blue action-pill" data-open-contact="student-artur">${icon("user", 16)} Ver candidato</button>
            </div>
          </article>
        `).join("") : emptyState("Sem candidaturas recebidas", "Quando alunos submeterem trabalhos aos teus desafios, aparecem aqui.", "users", "createChallenge", "Criar desafio")}
      </div>
    </section>
    ${bottomNav("mentors")}
  `;
}

function renderSubmissionDetail() {
  if (currentRole() !== "recruiter") return renderDashboard();
  const item = selectedSubmission();
  if (!item) {
    return `
      <section class="screen">
        ${topbar("Detalhe", { back: "recruiterSubmissions" })}
        ${emptyState("Sem candidatura selecionada", "Ainda não existem candidaturas para avaliar nesta conta.", "users", "recruiterSubmissions", "Voltar")}
      </section>
      ${bottomNav("mentors")}
    `;
  }
  return `
    <section class="screen">
      ${topbar("Detalhe", { back: "recruiterSubmissions" })}
      ${toast()}
      <article class="progress-card detail-card">
        <span class="eyebrow">${escapeHtml(item.status || "Pendente")}</span>
        <h2 class="section-title">${escapeHtml(item.challenge)}</h2>
        <p class="section-subtitle">${escapeHtml(item.title || "Candidatura recebida")} · ${escapeHtml(item.submittedAt || "Submetido recentemente")}</p>
        <div class="detail-grid">
          <div class="mini-stat"><strong>${escapeHtml(item.name || "Aluno")}</strong><span>Candidato</span></div>
          <div class="mini-stat"><strong>${escapeHtml(item.fileName || "Sem ficheiro")}</strong><span>Ficheiro</span></div>
        </div>
        ${item.fileName ? `
          <div class="file-summary">
            ${icon("upload", 18)}
            <span><strong>${escapeHtml(item.fileName)}</strong><small>${formatFileSize(item.fileSize)} · ${escapeHtml(item.fileType || "Anexo")} · pronto para análise</small></span>
          </div>
        ` : ""}
        ${submissionTimeline(item)}
        <div class="empty-space"></div>
        <article class="candidate-note">
          <span class="mini-avatar">${icon("info", 18)}</span>
          <span>
            <strong>Leitura rápida</strong>
            <p class="card-copy">Vê o anexo, confirma os critérios e deixa feedback acionável. O aluno recebe o estado atualizado na área de avaliação.</p>
            <button class="secondary-btn compact-btn note-action" data-scroll-target="evaluation-form">Ir para avaliação</button>
          </span>
        </article>
        <div class="empty-space"></div>
        <h3 class="card-title">Descrição da entrega</h3>
        <p class="card-copy">${escapeHtml(item.text || "O candidato ainda não adicionou descrição.")}</p>
        ${item.link ? `<p class="card-copy"><strong>Link:</strong> ${escapeHtml(item.link)}</p>` : ""}
        ${item.feedback ? `
          <div class="empty-space"></div>
          <article class="feedback-card">
            <span class="eyebrow">Feedback guardado</span>
            <h3 class="card-title">${escapeHtml(item.rating || "4")}/5 · ${escapeHtml(item.status || "Avaliado")}</h3>
            <p class="card-copy">${escapeHtml(item.feedback)}</p>
          </article>
        ` : ""}
        <div class="empty-space"></div>
        <form class="evaluation-form" id="evaluation-form" data-action="evaluateSubmission">
          <h3 class="card-title">Avaliar candidatura</h3>
          <div class="detail-grid">
            <label class="field">
              <span class="label">Nota</span>
              <select class="input" name="rating" required>
                ${[5, 4, 3, 2, 1].map((value) => `<option value="${value}" ${String(item.rating || "4") === String(value) ? "selected" : ""}>${value}/5</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span class="label">Estado</span>
              <select class="input" name="status" required>
                ${["Aprovado", "Precisa revisão", "Rejeitado"].map((status) => `<option value="${status}" ${(item.status || "") === status ? "selected" : ""}>${status}</option>`).join("")}
              </select>
            </label>
          </div>
          <label class="field"><span class="label">Feedback</span><textarea class="textarea" name="feedback" placeholder="Escreve feedback claro para o aluno" required>${escapeHtml(item.feedback || "")}</textarea></label>
          <div class="meta-row">
            <button class="primary-btn compact-btn" type="submit">${icon("star", 16)} Guardar avaliação</button>
            <button class="secondary-btn compact-btn" type="button" data-route="chatDetail" data-chat-context="student">${icon("chat", 16)} Enviar mensagem</button>
          </div>
        </form>
      </article>
    </section>
    ${bottomNav("mentors")}
  `;
}

function renderNotifications() {
  const notes = visibleNotifications();
  const unreadCount = notes.filter((note) => note.unread).length;
  const groups = notificationGroups(notes);
  return `
    <section class="screen">
      ${topbar("Notificações", { back: roleHome() })}
      <div class="card-top notifications-head">
        <div>
          <h2 class="section-title">Atividade</h2>
          <p class="section-subtitle">${unreadCount ? `${unreadCount} por ler` : "Tudo em dia"}</p>
        </div>
        ${notes.length ? `<button class="secondary-btn compact-btn" data-mark-notifications>${icon("check", 16)} Marcar lidas</button>` : ""}
      </div>
      ${notes.length ? groups.map(([title, items]) => `
        <p class="eyebrow">${title}</p>
        <div class="card-list notification-group">
          ${items.map((note) => `
            <button class="notification-card ${note.unread ? "unread" : ""}" data-notification="${note.id}">
              <span class="mini-avatar">${icon(note.icon)}</span>
              <span>
                <strong class="card-title">${escapeHtml(note.title)}</strong>
                <p class="card-copy">${escapeHtml(note.body)}</p>
              </span>
              <span class="notification-dot" aria-hidden="true"></span>
            </button>
          `).join("")}
        </div>
      `).join("") : emptyState("Sem notificações", "Feedback, mensagens e alertas importantes aparecem aqui.", "bell", roleHome(), "Voltar ao painel")}
    </section>
    ${bottomNav("dashboard")}
  `;
}

function renderChats() {
  const role = currentRole();
  if (role === "recruiter") {
    const lastMessage = state.recruiterMessages.at(-1);
    const recruiterSubmissions = recruiterSubmissionsFor();
    const hasConversations = state.recruiterMessages.length > 0 || recruiterSubmissions.length > 0;
    const students = hasConversations ? [
      { id: "student-artur", name: "Artur Silva", skill: "Design Logo", status: recruiterSubmissions.length ? "Candidatura recebida" : "Conversa iniciada", message: lastMessage?.text || "Abrir conversa com o aluno." }
    ] : [];
    return `
      <section class="screen">
        ${topbar("SkillQuest")}
        <h2 class="section-title">Conversas com alunos</h2>
        <p class="section-subtitle">Responde a dúvidas e orienta candidatos ligados aos teus desafios.</p>
        <div class="search-box">${icon("search")}<input placeholder="Procurar aluno" /></div>
        <div class="card-list">
          ${students.length ? students.map((item) => `
            <button class="chat-row" data-route="chatDetail" data-chat-context="student" data-contact-id="${item.id}">
              <span class="avatar">${icon("user", 28)}</span>
              <span>
                <strong class="chat-name">Aluno: ${item.name}</strong>
                <p class="chat-preview">${item.skill} - ${item.status} - ${item.message}</p>
              </span>
              ${icon("chat")}
            </button>
          `).join("") : emptyState("Sem conversas ainda", "Quando receberes candidaturas ou mensagens de alunos, elas aparecem aqui.", "chat", "createChallenge", "Criar desafio")}
        </div>
      </section>
      ${bottomNav("chats")}
    `;
  }
  const tab = sessionStorage.getItem("chatTab") || "mentors";
  const contactSuggestions = [
    ["recruiter-ocean", "Ocean Studio", "Design Logo", "Online", "Pergunta detalhes sobre objetivos, formato de entrega e critérios."],
    ["recruiter-playlab", "PlayLab", "JavaScript", "Disponível", "Esclarece dúvidas sobre lógica, regras do desafio e submissão."],
    ["recruiter-datanest", "DataNest", "Bases de Dados", "Disponível", "Pergunta sobre requisitos de SQL, métricas e documentação."]
  ];
  const lastMentorMessage = state.messages.at(-1);
  const lastTeamMessage = state.teamMessages.at(-1);
  const list = tab === "teams"
    ? (state.teamMessages.length ? [{ id: "team-design", name: "Design Logo", status: "Equipa ativa", message: lastTeamMessage.text }] : [])
    : (state.messages.length
      ? [{ id: state.selectedContactId || "recruiter-ocean", name: selectedContact().name, skill: selectedContact().area, status: "Conversa iniciada", message: lastMentorMessage.text, type: selectedContact().type }]
      : contactSuggestions.map(([id, name, skill, status, message]) => ({ id, name, skill, status, message, type: "Recrutador", suggestion: true })));
  return `
    <section class="screen">
      ${topbar("SkillQuest")}
      <h2 class="section-title">${tab === "teams" ? "Equipas" : state.messages.length ? "Chats abertos" : "Sugestões de contacto"}</h2>
      <div class="search-box">${icon("search")}<input placeholder="Procurar conversa" /></div>
      <div class="tabs">
        <button class="tab ${tab === "mentors" ? "active" : ""}" data-tab="mentors">Contactos</button>
        <button class="tab ${tab === "teams" ? "active" : ""}" data-tab="teams">Equipas</button>
      </div>
      <div class="card-list">
        ${list.length ? list.map((item) => `
          <button class="chat-row" data-route="chatDetail" data-chat-context="${tab === "mentors" ? "mentor" : "team"}" data-contact-id="${item.id}">
            <span class="avatar">${icon(tab === "teams" ? "users" : "user", 28)}</span>
            <span>
              <strong class="chat-name">${tab === "teams" ? "Equipa: " : `${item.type || "Contacto"}: `}${item.name}</strong>
              <p class="chat-preview">${item.skill ? `${item.skill} - ` : ""}${item.status} - ${item.message}</p>
            </span>
            ${icon("chat")}
          </button>
        `).join("") : emptyState("Sem equipas ainda", "Quando iniciares desafios em equipa, as conversas aparecem aqui.", "users", "dashboard", "Ver desafios")}
      </div>
    </section>
    ${bottomNav("chats")}
  `;
}

function renderMentors() {
  if (currentRole() === "recruiter") return renderRecruiterSubmissions();
  const mentorList = [
    ["mentor-joao", "João L.", "Python", "Ajuda em lógica, listas e automação."],
    ["mentor-anabela", "Anabela C.", "Bases de Dados", "Modelação, SQL e normalização."],
    ["mentor-maria", "Maria M.", "CSS / HTML", "Interfaces responsivas e acessibilidade."]
  ];
  return `
    <section class="screen">
      ${topbar("SkillQuest")}
      <h2 class="section-title">Explorar Mentores</h2>
      <div class="search-box">${icon("search")}<input placeholder="Procurar mentor ou tecnologia" /></div>
      <div class="card-list">
        ${mentorList.map(([id, name, skill, copy]) => `
          <article class="mentor-card">
            <span class="avatar">${icon("user", 28)}</span>
            <span>
              <strong class="chat-name">Mentor: ${name}</strong>
              <p class="chat-preview">${skill} - ${copy}</p>
            </span>
            <div class="mentor-actions">
              <button class="icon-btn" data-open-contact="${id}" aria-label="Ver perfil">${icon("user")}</button>
              <button class="icon-btn" data-route="chatDetail" data-chat-context="mentor" data-contact-id="${id}" aria-label="Abrir chat">${icon("send")}</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    ${bottomNav("")}
  `;
}

function renderContactDetail() {
  const contact = selectedContact();
  const back = currentRole() === "recruiter" ? "recruiterSubmissions" : "mentors";
  return `
    <section class="screen">
      ${topbar(contact.type, { back })}
      <article class="profile-head contact-head">
        <div class="profile-photo">${icon(contact.type === "Equipa" ? "users" : "user", 48)}</div>
        <h2>${escapeHtml(contact.name)}</h2>
        <p>${escapeHtml(contact.area)} · ${escapeHtml(contact.status)}</p>
      </article>
      <div class="stats-row">
        <div class="stat"><strong>${escapeHtml(contact.rating)}</strong><span>${contact.type === "Equipa" ? "membros" : "avaliação"}</span></div>
        <div class="stat"><strong>${escapeHtml(contact.sessions)}</strong><span>${contact.type === "Equipa" ? "tarefas" : "sessões"}</span></div>
        <div class="stat"><strong>${contact.status === "Online" ? "On" : "OK"}</strong><span>estado</span></div>
      </div>
      <article class="progress-card">
        <span class="eyebrow">${escapeHtml(contact.type)}</span>
        <h3 class="card-title">Resumo</h3>
        <p class="card-copy">${escapeHtml(contact.copy)}</p>
        <div class="empty-space"></div>
        <div class="meta-row">
          <button class="primary-btn compact-btn" data-route="${contact.route}" data-chat-context="${contact.chatContext}">${icon("chat", 16)} Abrir conversa</button>
          <button class="secondary-btn compact-btn" data-route="${back}">Voltar</button>
        </div>
      </article>
    </section>
    ${bottomNav(currentRole() === "recruiter" ? "mentors" : "")}
  `;
}

function renderMenu() {
  const role = state.selectedRole || activeAccount()?.role;
  const items = role === "recruiter"
    ? [
        ["recruiterDashboard", "Painel do Recrutador", "briefcase"],
        ["createChallenge", "Criar desafio", "plus"],
        ["recruiterSubmissions", "Candidaturas recebidas", "users"],
        ["profile", "Perfil", "user"],
        ["settings", "Definições", "settings"]
      ]
    : [
        ["evaluation", "Avaliação e detalhes", "star"],
        ["management", "Gestão de desafios", "briefcase"],
        ["forum", "Fórum da comunidade", "chat"],
        ["settings", "Definições", "settings"],
        ["profile", "Perfil", "user"]
      ];
  return `
    <section class="screen">
      ${topbar("Menu", { back: role === "recruiter" ? "recruiterDashboard" : "dashboard" })}
      <div class="menu-list">
        ${items.map(([route, label, ic]) => `
          <button class="menu-item" data-route="${route}">
            <span class="mini-avatar">${icon(ic)}</span>
            <strong>${label}</strong>
            ${icon("right")}
          </button>
        `).join("")}
        <button class="menu-item danger" data-action-click="logout">
          <span class="mini-avatar">${icon("logout")}</span>
          <strong>Sair da conta</strong>
          ${icon("right")}
        </button>
      </div>
    </section>
  `;
}

function renderProfile() {
  const account = activeAccount();
  if (!account) return renderLogin();
  const role = currentRole();
  const recruiterChallenges = recruiterChallengesFor(account);
  const recruiterSubmissions = recruiterSubmissionsFor(account);
  const recruiterCreated = recruiterChallenges.length;
  const recruiterCandidates = recruiterSubmissions.length;
  const recruiterExamples = recruiterChallenges.map((challenge) => challenge.title).slice(0, 4);
  const recruiterRating = account.recruiterRating || (recruiterSubmissions.some((item) => item.rating) ? "4.8" : "Sem dados");
  const studentSubmissions = state.submissions.filter((item) => item.email === account.email);
  if (role === "recruiter") {
    return `
      <section class="screen">
        ${topbar("Perfil", { back: menuBack("recruiterDashboard") })}
        ${toast()}
        <div class="profile-head recruiter">
          <div class="profile-photo">${icon("briefcase", 48)}</div>
          <h2>${escapeHtml(account.name)}</h2>
          <p>${escapeHtml(account.email)}</p>
        </div>
        <div class="stats-row">
          <div class="stat"><strong>${recruiterCreated}</strong><span>criados</span></div>
          <div class="stat"><strong>${recruiterRating}</strong><span>avaliação</span></div>
          <div class="stat"><strong>${recruiterCandidates}</strong><span>candidatos</span></div>
        </div>
        <article class="progress-card">
          <h3 class="card-title">Informação profissional</h3>
          <p class="card-copy"><strong>Tipo:</strong> Recrutador</p>
          <p class="card-copy"><strong>Área:</strong> ${escapeHtml(account.area || "Recursos Humanos")}</p>
          <p class="card-copy"><strong>Organização:</strong> ${escapeHtml(account.company || "Por definir")}</p>
          <p class="card-copy"><strong>Sobre:</strong> ${escapeHtml(account.recruiterBio || "Ainda não preencheste a descrição profissional.")}</p>
        </article>
        <div class="empty-space"></div>
        <article class="progress-card">
          <h3 class="card-title">Exemplos de desafios criados</h3>
          ${recruiterExamples.length
            ? `<div class="skill-tags">${recruiterExamples.map((item) => `<span class="skill-tag neutral">${escapeHtml(item)}</span>`).join("")}</div>`
            : `<p class="card-copy">Ainda não criaste desafios nesta conta.</p>`}
        </article>
        <div class="empty-space"></div>
        <button class="primary-btn" data-route="editProfile">Editar Perfil</button>
      </section>
    `;
  }
  return `
    <section class="screen">
      ${topbar("Perfil", { back: menuBack("dashboard") })}
      ${toast()}
      <div class="profile-head">
        <div class="profile-photo">${icon("user", 48)}</div>
        <h2>${escapeHtml(account.name)}</h2>
        <p>${escapeHtml(account.email)}</p>
      </div>
      <div class="stats-row">
        <div class="stat"><strong>${account.completed ?? 0}</strong><span>desafios</span></div>
        <div class="stat"><strong>${account.rating || "-"}</strong><span>média</span></div>
        <div class="stat"><strong>${account.level ?? 1}</strong><span>nível</span></div>
      </div>
      <article class="progress-card">
        <h3 class="card-title">Informação pessoal</h3>
        <p class="card-copy"><strong>Tipo:</strong> ${account.role === "recruiter" ? "Recrutador" : "Aluno"}</p>
        <p class="card-copy"><strong>Área:</strong> ${escapeHtml(account.area || "Informática")}</p>
        <p class="card-copy"><strong>Localização:</strong> ${escapeHtml(account.location || "Setúbal")}</p>
        <p class="card-copy"><strong>Sobre:</strong> ${escapeHtml(account.bio || "Aluno focado em desafios práticos e aprendizagem por projetos.")}</p>
      </article>
      <div class="empty-space"></div>
      <article class="progress-card">
        <h3 class="card-title">Competências</h3>
        <div class="skill-tags">${(account.skills || ["Java", "HTML", "C++", "Design UI"]).map((skill) => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join("")}</div>
      </article>
      <div class="empty-space"></div>
      <article class="progress-card">
        <h3 class="card-title">Conquistas</h3>
        <div class="badge-grid">
          ${studentBadges(account, studentSubmissions).map((badge) => `
            <div class="badge-card ${badge.active ? "active" : ""}">
              <span class="badge-icon">${icon(badge.icon, 20)}</span>
              <strong>${badge.title}</strong>
              <p>${badge.copy}</p>
            </div>
          `).join("")}
        </div>
      </article>
      <div class="empty-space"></div>
      <button class="primary-btn" data-route="editProfile">Editar Perfil</button>
    </section>
  `;
}

function renderEditProfile() {
  const account = activeAccount();
  if (!account) return renderLogin();
  const role = currentRole();
  const bioValue = role === "recruiter" ? account.recruiterBio || "" : account.bio || "";
  return `
    <section class="screen">
      ${topbar("Editar perfil", { back: "profile" })}
      <form class="hero-panel" data-action="saveProfile">
        <h2 class="section-title">Editar Perfil</h2>
        <label class="field"><span class="label">Nome</span><input class="input" name="name" value="${escapeHtml(account.name)}" required /></label>
        ${areaSelect("area", account.area || "", role === "recruiter" ? "Área de recrutamento" : "Área / curso")}
        <label class="field"><span class="label">Localização</span><input class="input" name="location" value="${escapeHtml(account.location || "Setúbal")}" /></label>
        ${role === "recruiter" ? `<label class="field"><span class="label">Organização</span><input class="input" name="company" value="${escapeHtml(account.company || "")}" placeholder="Ex: nome da empresa" /></label>` : `<label class="field"><span class="label">Competências</span><input class="input" name="skills" value="${escapeHtml((account.skills || []).join(", "))}" /></label>`}
        <label class="field"><span class="label">${role === "recruiter" ? "Sobre a tua atividade" : "Sobre mim"}</span><textarea class="textarea" name="bio">${escapeHtml(bioValue)}</textarea></label>
        <p class="card-copy">Para mudar entre Aluno e Recrutador, usa as Definições da conta.</p>
        <button class="primary-btn" type="submit">${icon("check")} Guardar alterações</button>
      </form>
    </section>
  `;
}

function renderEvaluation() {
  return `
    <section class="screen">
      ${topbar("Avaliação", { back: menuBack("menu") })}
      <h2 class="section-title">Avaliação de desafios</h2>
      <article class="insight-card">
        <span class="eyebrow">Resumo</span>
        <h3 class="card-title">Feedback pronto para melhorar a próxima entrega.</h3>
        <p class="card-copy">As avaliações mostram pontos fortes, requisitos em falta e a classificação recebida.</p>
      </article>
      <div class="empty-space"></div>
      <div class="card-list">
        ${reviewCard("Design Logo", [["x", "Não cumpriu todos os requisitos de cor."], ["x", "Elementos gráficos desalinhados."]], 3)}
        ${reviewCard("Bug Fix", [["x", "Tem alguns erros de execução."], ["check", "Comprova que percebe de Java."]], 4)}
      </div>
    </section>
    ${bottomNav("dashboard")}
  `;
}

function reviewCard(title, lines, stars) {
  return `
    <article class="review-card">
      <h3 class="card-title">${title}</h3>
      ${lines.map(([ic, txt]) => `<div class="review-line">${icon(ic, 18)}<span>${txt}</span></div>`).join("")}
      <div class="stars">${Array.from({ length: stars }, () => icon("star", 18)).join("")}</div>
      <p class="card-copy">${stars}/5 - Feedback recebido da empresa</p>
    </article>
  `;
}

function submissionTimeline(item) {
  const hasFeedback = Boolean(item.feedback || item.rating);
  const done = ["Aprovado", "Concluído"].includes(item.status);
  const steps = [
    ["Enviado", true],
    ["Em avaliação", true],
    ["Feedback", hasFeedback],
    ["Concluído", done]
  ];
  return `
    <div class="timeline" aria-label="Estado da submissão">
      ${steps.map(([label, active]) => `<span class="timeline-step ${active ? "active" : ""}"><i></i>${label}</span>`).join("")}
    </div>
  `;
}

function formatFileSize(bytes = 0) {
  const size = Number(bytes || 0);
  if (!size) return "Tamanho não registado";
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function startActiveChallenge(challenge = selectedChallenge()) {
  const account = activeAccount();
  if (!account || currentRole() === "recruiter") return;
  if (!Array.isArray(account.activeChallenges)) account.activeChallenges = [];
  const alreadyStarted = account.activeChallenges.some((item) => String(item.challengeId) === String(challenge.id));
  if (alreadyStarted) return;
  account.activeChallenges.unshift({
    challengeId: challenge.id,
    title: challenge.title,
    progress: 12,
    copy: "Desafio iniciado. Lê os objetivos e prepara a submissão."
  });
}

function renderManagement() {
  if (currentRole() === "recruiter") return renderRecruiterSubmissions();
  const account = activeAccount();
  const submissions = state.submissions.filter((item) => item.email === account?.email);
  const activeChallenges = account?.activeChallenges || [];
  return `
    <section class="screen">
      ${topbar("Gestão", { back: menuBack("menu") })}
      <h2 class="section-title">Gestão de desafios</h2>
      <article class="insight-card compact">
        <span class="eyebrow">Em curso</span>
        <div class="card-top">
          <h3 class="card-title">${activeChallenges.length + submissions.length} desafios acompanhados</h3>
          <span class="pill">${submissions.length} submetido(s)</span>
        </div>
        <p class="card-copy">${activeChallenges.length || submissions.length ? "Continua trabalhos ativos e acompanha entregas já enviadas." : "Ainda não tens desafios a decorrer nesta conta."}</p>
      </article>
      <div class="empty-space"></div>
      <div class="card-list">
        ${activeChallenges.map((item) => progressCard(item.title, item.progress, item.copy, item.challengeId)).join("")}
        ${submissions.map((item) => `
          <article class="progress-card">
            <span class="eyebrow">${escapeHtml(item.status)}</span>
            <h3 class="card-title">${escapeHtml(item.challenge)}</h3>
            <p class="card-copy">${escapeHtml(item.text)}</p>
            ${item.fileName ? `<p class="card-copy"><strong>Ficheiro:</strong> ${escapeHtml(item.fileName)} · ${formatFileSize(item.fileSize)} · ${escapeHtml(item.fileType || "Anexo")}</p>` : ""}
            ${submissionTimeline(item)}
          </article>
        `).join("")}
        ${!activeChallenges.length && !submissions.length ? `
          <article class="empty-state">
            <span class="empty-icon">${icon("briefcase", 26)}</span>
            <h3 class="card-title">Sem desafios em curso</h3>
            <p class="card-copy">Quando iniciares ou submeteres um desafio, ele aparece aqui para acompanhares o estado.</p>
            <button class="secondary-btn compact-btn" data-route="dashboard">Encontrar desafio</button>
          </article>
        ` : ""}
      </div>
      <div class="empty-space"></div>
      <button class="secondary-btn" data-route="dashboard">Encontrar novo desafio</button>
    </section>
    ${bottomNav("dashboard")}
  `;
}

function progressCard(title, pct, copy, challengeId = 1) {
  return `
    <article class="progress-card">
      <div class="card-top">
        <h3 class="card-title">${title}</h3>
        <span class="pill">${pct}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width: ${pct}%"></div></div>
      <p class="card-copy">${copy}</p>
      <div class="empty-space"></div>
      <button class="secondary-btn" data-open-challenge="${challengeId}" data-open-workbench="true">Continuar</button>
    </article>
  `;
}

function renderForum() {
  return `
    <section class="screen">
      ${topbar("Comunidade", { back: menuBack("menu") })}
      <h2 class="section-title">Fórum da comunidade</h2>
      <p class="section-subtitle">Explora tópicos, dúvidas e ideias partilhadas por alunos e mentores.</p>
      <div class="forum-grid">
        ${forumTopics.map((topic) => `
          <button class="topic-card" data-open-topic="${topic.id}">
            <span class="pill">${topic.tag}</span>
            <h3 class="card-title">${topic.title}</h3>
            <div class="topic-lines"><span></span><span></span><span></span><span></span></div>
            <div class="topic-meta"><span>${icon("users", 14)} ${topic.users}</span><span>${icon("chat", 14)} ${topic.comments}</span></div>
          </button>
        `).join("")}
      </div>
    </section>
    ${bottomNav("")}
  `;
}

function renderForumDetail() {
  const topic = selectedTopic();
  const posts = topicPosts(topic);
  return `
    <section class="screen">
      ${topbar("Tópico", { back: "forum" })}
      ${toast()}
      <article class="progress-card topic-detail">
        <span class="pill">${topic.tag}</span>
        <h2 class="section-title">${topic.title}</h2>
        <p class="section-subtitle">${topic.description}</p>
        <div class="topic-meta"><span>${icon("users", 14)} ${topic.users} membros</span><span>${icon("chat", 14)} ${topic.comments} respostas</span></div>
      </article>
      <div class="empty-space"></div>
      <div class="card-list">
        ${posts.map(([author, text, time]) => `
          <article class="forum-post">
            <span class="mini-avatar">${icon("user")}</span>
            <span>
              <strong>${escapeHtml(author)}</strong>
              <p class="card-copy">${escapeHtml(text)}</p>
              <small>${escapeHtml(time)}</small>
            </span>
          </article>
        `).join("")}
      </div>
      <div class="empty-space"></div>
      <form class="reply-box" data-action="addForumComment">
        <textarea class="textarea" name="comment" placeholder="Escrever resposta" required></textarea>
        <button class="primary-btn" type="submit">${icon("send")} Publicar resposta</button>
      </form>
    </section>
    ${bottomNav("")}
  `;
}

function renderSettings() {
  const account = activeAccount();
  const role = currentRole();
  const targetRole = role === "recruiter" ? "student" : "recruiter";
  const switchInfo = roleSwitchInfo(account);
  const clearConfirm = state.confirmClearDemo;
  const sections = [
    ["Atividade", [["Notificações", "bell", "settingsNotifications"]]],
    ["Conta", [["Segurança", "lock", "settingsSecurity"], ["Partilhar perfil", "send", "settingsShare"]]],
    ["Preferências", [["Ecrã", "moon", "settingsDisplay"], ["Idioma", "language", "settingsLanguage"]]],
    ["Apoio e sobre", [["Centro de ajuda", "info", "settingsHelp"], ["Termos e políticas", "info", "settingsTerms"]]]
  ];
  return `
    <section class="screen">
      ${topbar("Definições", { back: menuBack("menu") })}
      ${toast()}
      <article class="progress-card warning-card">
        <div class="card-top">
          <div>
            <span class="eyebrow">Tipo de conta</span>
            <h3 class="card-title">${roleLabel(role)}</h3>
            <p class="card-copy">Podes mudar para ${roleLabel(targetRole)}, mas só uma vez a cada 7 dias.</p>
          </div>
          <span class="pill ${role === "recruiter" ? "blue" : ""}">${role === "recruiter" ? icon("briefcase", 16) : icon("book", 16)}</span>
        </div>
        <div class="empty-space"></div>
        ${switchInfo.canSwitch
          ? `<button class="secondary-btn" data-switch-role="${targetRole}">Mudar para ${roleLabel(targetRole)}</button>`
          : `<button class="secondary-btn disabled" disabled>Disponível em ${switchInfo.daysRemaining} dia(s)</button>`}
      </article>
      <div class="empty-space"></div>
      <article class="progress-card demo-card">
        <span class="eyebrow">Protótipo</span>
        <h3 class="card-title">Dados de demonstração</h3>
        <p class="card-copy">${clearConfirm ? "Confirma a limpeza dos dados demo. A tua conta fica guardada." : "Carrega exemplos realistas para testar submissões, feedback, notificações e desafios."}</p>
        <div class="meta-row">
          <button class="secondary-btn compact-btn" data-load-demo="${role}">${icon("plus", 16)} Carregar demo</button>
          <button class="secondary-btn compact-btn ${clearConfirm ? "confirm-btn" : "danger-btn"}" data-clear-demo>${icon(clearConfirm ? "check" : "x", 16)} ${clearConfirm ? "Confirmar limpeza" : "Limpar demo"}</button>
          ${clearConfirm ? `<button class="secondary-btn compact-btn" data-cancel-clear-demo>Cancelar</button>` : ""}
        </div>
      </article>
      <div class="empty-space"></div>
      ${sections.map(([title, items]) => `
        <p class="eyebrow">${title}</p>
        <div class="settings-list">
          ${items.map(([label, ic, route]) => `
            <button class="settings-item" data-route="${route}">
              <span class="mini-avatar">${icon(ic)}</span>
              <strong>${label}</strong>
              ${icon("right")}
            </button>
          `).join("")}
        </div>
        <div class="empty-space"></div>
      `).join("")}
    </section>
    ${bottomNav("")}
  `;
}

function themeChoice(theme, title, copy, ic) {
  const selected = currentTheme() === theme;
  return `
    <button class="settings-item display-choice ${selected ? "selected" : ""}" data-theme-choice="${theme}">
      <span class="mini-avatar">${icon(ic)}</span>
      <span>
        <strong>${title}</strong>
        <p class="card-copy">${copy}</p>
      </span>
      <span class="pill">${selected ? "Ativo" : "Escolher"}</span>
    </button>
  `;
}

function renderSettingsDetail(kind) {
  const details = {
    notifications: {
      title: "Notificações",
      eyebrow: "Atividade",
      copy: "Controla os avisos importantes sem transformar a app numa caixa de ruído.",
      rows: [
        ["Novos desafios", "Receber alertas quando aparece uma oportunidade compatível.", "Ativo"],
        ["Mensagens", "Avisar quando um mentor, aluno ou recrutador responde.", "Ativo"],
        ["Avaliações", "Notificar quando uma submissão recebe feedback.", "Ativo"]
      ]
    },
    security: {
      title: "Segurança",
      eyebrow: "Conta",
      copy: "Mantém a tua conta protegida com métodos simples e claros.",
      rows: [
        ["Palavra-passe", "Última alteração registada no protótipo.", "OK"],
        ["Verificação em dois passos", "Proteção extra para contas de recrutador.", "Opcional"],
        ["Sessões ativas", "Este dispositivo está autorizado.", "1 sessão"]
      ]
    },
    share: {
      title: "Partilhar perfil",
      eyebrow: "Conta",
      copy: "Escolhe como queres mostrar o teu progresso fora da SkillQuest.",
      rows: [
        ["Link público", "skillquest.pt/u/perfil-demo", "Copiar"],
        ["Portefólio", "Mostrar desafios concluídos e competências.", "Visível"],
        ["Privacidade", "Ocultar email em páginas públicas.", "Ativo"]
      ]
    },
    display: {
      title: "Ecrã",
      eyebrow: "Preferências",
      copy: "Ajusta o aspeto visual da aplicação.",
      rows: [
        ["Modo claro", "Fundo limpo e cartões suaves.", "Selecionado"],
        ["Modo escuro", "Contraste alto para usar à noite.", "Disponível"],
        ["Animações", "Transições subtis entre páginas.", "Ativo"]
      ]
    },
    language: {
      title: "Idioma",
      eyebrow: "Preferências",
      copy: "A aplicação está preparada para português europeu.",
      rows: [
        ["Português", "Idioma atual da interface.", "Selecionado"],
        ["Inglês", "Tradução futura para equipas internacionais.", "Brevemente"],
        ["Formato regional", "Datas e horas no formato de Portugal.", "Ativo"]
      ]
    },
    help: {
      title: "Centro de ajuda",
      eyebrow: "Apoio",
      copy: "Ajuda rápida para alunos, mentores e recrutadores.",
      rows: [
        ["Submeter trabalho", "Aprende a anexar ficheiros e acompanhar feedback.", "Guia"],
        ["Criar desafios", "Boas práticas para briefings claros.", "Guia"],
        ["Contactar suporte", "Resposta estimada no mesmo dia útil.", "Abrir"]
      ]
    },
    terms: {
      title: "Termos e políticas",
      eyebrow: "Apoio",
      copy: "Resumo simples das regras do protótipo.",
      rows: [
        ["Dados da conta", "Guardados localmente neste protótipo.", "Local"],
        ["Conduta", "Respeito obrigatório entre alunos e recrutadores.", "Ativo"],
        ["Submissões", "Os ficheiros são usados apenas para avaliação.", "Claro"]
      ]
    }
  };
  const detail = details[kind] || details.notifications;
  const detailBody = kind === "display"
    ? `
        <div class="settings-list">
          ${themeChoice("light", "Modo claro", "Mantém o aspeto limpo e luminoso atual.", "sun")}
          ${themeChoice("dark", "Modo escuro", "Usa fundos profundos mantendo os azuis da SkillQuest.", "moon")}
          <div class="settings-item static">
            <span>
              <strong>Animações</strong>
              <p class="card-copy">Transições subtis entre páginas e feedback ao tocar.</p>
            </span>
            <span class="pill">Ativo</span>
          </div>
        </div>
      `
    : `
        <div class="settings-list">
          ${detail.rows.map(([title, copy, status]) => `
            <div class="settings-item static">
              <span>
                <strong>${title}</strong>
                <p class="card-copy">${copy}</p>
              </span>
              <span class="pill">${status}</span>
            </div>
          `).join("")}
        </div>
      `;
  return `
    <section class="screen">
      ${topbar(detail.title, { back: "settings" })}
      <article class="progress-card settings-detail">
        <span class="eyebrow">${detail.eyebrow}</span>
        <h2 class="section-title">${detail.title}</h2>
        <p class="section-subtitle">${detail.copy}</p>
        ${detailBody}
      </article>
    </section>
    ${bottomNav("")}
  `;
}

const renderSettingsNotifications = () => renderSettingsDetail("notifications");
const renderSettingsSecurity = () => renderSettingsDetail("security");
const renderSettingsShare = () => renderSettingsDetail("share");
const renderSettingsDisplay = () => renderSettingsDetail("display");
const renderSettingsLanguage = () => renderSettingsDetail("language");
const renderSettingsHelp = () => renderSettingsDetail("help");
const renderSettingsTerms = () => renderSettingsDetail("terms");

function renderChatDetail() {
  const role = currentRole();
  const context = state.chatContext || (role === "recruiter" ? "student" : "mentor");
  const isTeam = context === "team";
  const isStudentContact = role === "recruiter" || context === "student";
  const messages = isTeam ? state.teamMessages : isStudentContact ? state.recruiterMessages : state.messages;
  const back = state.chatBack || "chats";
  const contact = selectedContact();
  const contactType = contact.type || "Contacto";
  const title = isTeam ? `Equipa: ${contact.name}` : isStudentContact ? `Aluno: ${contact.name}` : `${contactType}: ${contact.name}`;
  const preview = `${contact.area} - ${contact.status}`;
  return `
    <section class="screen chat-detail">
      ${topbar("SkillQuest", { back })}
      <div class="chat-row">
        <span class="avatar">${icon("user", 28)}</span>
        <span>
          <strong class="chat-name">${title}</strong>
          <p class="chat-preview">${preview}</p>
        </span>
        <button class="icon-btn">${icon("phone")}</button>
      </div>
      <div class="message-stack">
        <p class="message in">${icon("lock", 16)} As mensagens são encriptadas ponto a ponto.</p>
        ${messages.map((message) => `<p class="message ${message.from === "me" ? "out" : "in"}">${escapeHtml(message.text)}<span class="message-time">${message.time}</span></p>`).join("")}
      </div>
      <form class="chat-composer" data-action="sendMessage">
        <input class="input" name="message" placeholder="Escrever mensagem" autocomplete="off" />
        <button class="icon-btn" type="submit">${icon("send")}</button>
      </form>
    </section>
  `;
}

function renderChallenge() {
  if (currentRole() === "recruiter") {
    return `
      <section class="screen">
        ${topbar("Modo recrutador", { back: "recruiterDashboard" })}
        <article class="progress-card">
          <span class="eyebrow">Acesso de aluno</span>
          <h2 class="section-title">Submeter trabalhos não está disponível no modo recrutador.</h2>
          <p class="section-subtitle">Como recrutador podes criar desafios, acompanhar candidaturas e responder a alunos.</p>
          <button class="primary-btn" data-route="recruiterDashboard">${icon("briefcase")} Ir para o painel</button>
        </article>
      </section>
      ${bottomNav("dashboard")}
    `;
  }
  const challenge = selectedChallenge();
  const objectives = challengeObjectives(challenge);
  return `
    <section class="screen">
      ${topbar("SkillQuest", { back: "dashboard" })}
      <div class="challenge-card">
        <div class="card-top">
          <div>
            <span class="eyebrow">Desafio #${escapeHtml(challenge.id)}</span>
            <h2 class="section-title">${escapeHtml(challenge.title)}</h2>
          </div>
          <span class="pill">${icon("clock", 16)} ${escapeHtml(challenge.time)}</span>
        </div>
        <p class="section-subtitle">${escapeHtml(challenge.description)}</p>
        <div class="meta-row">
          <span class="pill blue">${escapeHtml(challenge.skill)}</span>
          <span class="pill gold">${escapeHtml(challenge.level || "Intermédio")}</span>
          <span class="pill">${icon("users", 16)} ${escapeHtml(challenge.people || 1)} pessoas</span>
        </div>
        <div class="empty-space"></div>
        <h3 class="card-title">Objetivos</h3>
        ${objectives.map((objective) => `<div class="review-line">${icon("check")} <span>${escapeHtml(objective)}</span></div>`).join("")}
        <div class="empty-space"></div>
        <article class="tip-card">${icon("info", 18)} <span>Critérios claros ajudam o recrutador a avaliar a tua entrega mais depressa.</span></article>
      </div>
      <div class="empty-space"></div>
      <article class="progress-card">
        <h3 class="card-title">Precisas de ajuda?</h3>
        <p class="card-copy">Fala com um mentor antes de submeter a solução.</p>
        <div class="empty-space"></div>
        <button class="secondary-btn" data-route="chatDetail" data-chat-context="mentor">${icon("chat")} Abrir chat</button>
      </article>
      <div class="empty-space"></div>
      <button class="primary-btn" data-route="workbench">Iniciar</button>
    </section>
  `;
}

function renderWorkbench() {
  if (currentRole() === "recruiter") return renderChallenge();
  const challenge = selectedChallenge();
  return `
    <section class="screen">
      ${topbar("Trabalho", { back: "challenge" })}
      <h2 class="section-title">${escapeHtml(challenge.title)}</h2>
      <p class="section-subtitle">Área de trabalho do desafio. Acompanha tarefas, progresso e prepara a entrega final.</p>
      <article class="progress-card">
        <div class="card-top">
          <h3 class="card-title">Progresso</h3>
          <span class="pill">68%</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width: 68%"></div></div>
        <p class="card-copy">Briefing lido, paleta definida e primeira proposta pronta.</p>
      </article>
      <div class="empty-space"></div>
      <button class="primary-btn" data-route="submitWork">${icon("upload")} Submeter trabalho</button>
    </section>
    ${bottomNav("dashboard")}
  `;
}

function renderSubmitWork() {
  if (currentRole() === "recruiter") return renderChallenge();
  const challenge = selectedChallenge();
  return `
    <section class="screen">
      ${topbar("Submeter", { back: "workbench" })}
      <form class="hero-panel" data-action="submitWork">
        <h2 class="section-title">Submeter trabalho</h2>
        <p class="section-subtitle">Preenche os detalhes da tua entrega para o recrutador avaliar ${escapeHtml(challenge.title)}.</p>
        <article class="tip-card">${icon("info", 18)} <span>Ficheiros aceites: PDF, Word, PowerPoint, PNG e JPG.</span></article>
        <label class="field"><span class="label">Título da submissão</span><input class="input" name="title" value="${escapeHtml(challenge.title)} - entrega final" required /></label>
        <label class="field">
          <span class="label">Ficheiro</span>
          <span class="file-drop">
            <span class="file-cta">${icon("upload", 18)} Escolher</span>
            <span class="file-name" data-file-name>Nenhum ficheiro selecionado</span>
            <input class="file-native" name="file" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg" required />
          </span>
          <span class="file-preview" data-file-preview>O preview do anexo aparece aqui depois de escolheres um ficheiro.</span>
        </label>
        <label class="field"><span class="label">Link opcional</span><input class="input" name="link" placeholder="https://..." /></label>
        <label class="field"><span class="label">Descrição</span><textarea class="textarea" name="text" placeholder="Explica o que entregaste" required></textarea></label>
        <button class="primary-btn" type="submit">${icon("upload")} Enviar submissão</button>
      </form>
    </section>
  `;
}

function renderSubmissionSuccess() {
  const latest = [...state.submissions].reverse().find((item) => item.email === activeAccount()?.email);
  return `
    <section class="screen auth">
      <div class="success-check">${icon("check", 54)}</div>
      <div class="hero-panel confirmation-card">
        <h2 class="section-title">Trabalho submetido</h2>
        <p class="section-subtitle">A tua entrega ficou registada e aparece agora na Gestão de desafios.</p>
        ${latest ? submissionTimeline(latest) : ""}
        <button class="primary-btn" data-route="management">Ver estado</button>
      </div>
    </section>
  `;
}

const renderers = {
  login: renderLogin,
  register: renderRegister,
  success: renderSuccess,
  chooseRole: renderChooseRole,
  onboarding: renderOnboarding,
  dashboard: renderDashboard,
  recruiterDashboard: renderRecruiterDashboard,
  createChallenge: renderCreateChallenge,
  recruiterSubmissions: renderRecruiterSubmissions,
  submissionDetail: renderSubmissionDetail,
  notifications: renderNotifications,
  chats: renderChats,
  mentors: renderMentors,
  contactDetail: renderContactDetail,
  menu: renderMenu,
  profile: renderProfile,
  editProfile: renderEditProfile,
  evaluation: renderEvaluation,
  management: renderManagement,
  forum: renderForum,
  forumDetail: renderForumDetail,
  settings: renderSettings,
  settingsNotifications: renderSettingsNotifications,
  settingsSecurity: renderSettingsSecurity,
  settingsShare: renderSettingsShare,
  settingsDisplay: renderSettingsDisplay,
  settingsLanguage: renderSettingsLanguage,
  settingsHelp: renderSettingsHelp,
  settingsTerms: renderSettingsTerms,
  chatDetail: renderChatDetail,
  challenge: renderChallenge,
  workbench: renderWorkbench,
  submitWork: renderSubmitWork,
  submissionSuccess: renderSubmissionSuccess
};

function render() {
  const route = currentRoute();
  app.dataset.theme = currentTheme();
  document.documentElement.style.colorScheme = currentTheme();
  if (!requireSession()) return;
  app.classList.add("is-loading");
  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => app.classList.remove("is-loading"), 220);
  app.innerHTML = (renderers[route] || renderDashboard)();
  document.title = `SkillQuest - ${route}`;
}

function formData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function registerUser(data) {
  const email = data.email.trim().toLowerCase();
  if (state.accounts.some((account) => account.email === email)) {
    setToast("Já existe uma conta com esse email. Faz login.");
    go("login");
    return;
  }
  const account = {
    name: data.name.trim(),
    email,
    password: data.password,
    area: (data.area || "").trim(),
    role: null,
    company: "",
    recruiterBio: "",
    recruiterRating: "",
    location: "Setúbal",
    bio: "Gosto de aprender com projetos práticos e desafios reais.",
    skills: [],
    completed: 0,
    rating: "",
    level: 1,
    activeChallenges: [],
    messages: [],
    recruiterMessages: [],
    teamMessages: [],
    welcomeNotificationSent: false
  };
  state.accounts.push(account);
  state.currentEmail = email;
  state.selectedRole = null;
  state.pendingRole = null;
  state.routeHistory = [];
  state.selectedContactId = "recruiter-ocean";
  loadAccountChats(account);
  saveState();
  go("success");
}

function loginUser(data) {
  const email = data.email.trim().toLowerCase();
  const account = state.accounts.find((item) => item.email === email);
  if (!account) {
    setToast("Ainda não existe conta com esse email. Cria a conta primeiro.");
    go("register");
    return;
  }
  if (account.password !== data.password) {
    setToast("Palavra-passe incorreta.");
    render();
    return;
  }
  state.currentEmail = account.email;
  state.selectedRole = account.role || null;
  state.routeHistory = [];
  state.selectedContactId = state.selectedRole === "recruiter" ? "student-artur" : "recruiter-ocean";
  loadAccountChats(account);
  saveState();
  go(account.role ? roleHome(account.role) : "chooseRole");
}

function saveProfile(data) {
  const account = activeAccount();
  if (!account) return;
  const role = currentRole();
  account.name = data.name.trim();
  account.area = (data.area || "").trim();
  account.location = data.location?.trim() || "";
  if (role === "recruiter") {
    account.company = data.company?.trim() || "";
    account.recruiterBio = data.bio?.trim() || "";
  } else {
    account.bio = data.bio?.trim() || "";
    account.skills = (data.skills || "").split(",").map((skill) => skill.trim()).filter(Boolean);
  }
  setToast("Perfil guardado com sucesso.");
  saveState();
  go("profile");
}

function submitWork(data) {
  const account = activeAccount();
  const challenge = selectedChallenge();
  if (currentRole() === "recruiter") {
    setToast("No modo recrutador não podes submeter trabalhos.");
    saveState();
    go("recruiterDashboard");
    return;
  }
  const fileName = data.file?.name || "";
  if (!fileName) {
    setToast("Seleciona um ficheiro para anexar.");
    render();
    return;
  }
  state.submissions.push({
    id: Date.now(),
    email: account.email,
    name: account.name,
    challengeId: challenge.id,
    challenge: challenge.title,
    title: data.title,
    link: data.link || "",
    fileName,
    fileSize: data.file?.size || 0,
    fileType: data.file?.type || "Ficheiro anexado",
    text: data.text,
    status: "Submetido para avaliação",
    submittedAt: "Agora"
  });
  if (Array.isArray(account.activeChallenges)) {
    account.activeChallenges = account.activeChallenges.filter((item) => String(item.challengeId) !== String(challenge.id));
  }
  state.notifications.unshift({
    id: `n-${Date.now()}`,
    email: account.email,
    title: "Trabalho submetido com sucesso",
    body: `A tua submissão de ${challenge.title} foi enviada para avaliação.`,
    icon: "upload",
    route: "management",
    unread: true
  });
  saveState();
  go("submissionSuccess");
}

function createChallenge(data) {
  const account = activeAccount();
  state.recruiterChallenges.unshift({
    id: Date.now(),
    recruiterEmail: account?.email,
    title: data.title,
    skill: data.skill,
    time: data.time,
    level: data.level,
    deadline: data.deadline,
    maxParticipants: data.maxParticipants,
    status: "Publicado",
    candidates: 0,
    description: data.description,
    criteria: data.criteria,
    allowedFiles: data.allowedFiles
  });
  setToast("Desafio publicado com sucesso.");
  saveState();
  go("recruiterDashboard");
}

function evaluateSubmission(data) {
  const selected = selectedSubmission();
  let item = state.submissions.find((submission) => String(submission.id) === String(selected.id));
  if (!item) {
    item = { ...selected };
    state.submissions.push(item);
  }
  item.rating = data.rating;
  item.status = data.status;
  item.feedback = data.feedback.trim();
  item.evaluatedAt = "Agora";
  state.notifications.unshift({
    id: `eval-${Date.now()}`,
    email: item.email,
    title: "Candidatura avaliada",
    body: `${item.challenge} recebeu feedback do recrutador.`,
    icon: "star",
    route: "evaluation",
    unread: true
  });
  setToast("Avaliação guardada com sucesso.");
  saveState();
  render();
}

function addForumComment(data) {
  const topic = selectedTopic();
  const account = activeAccount();
  const text = data.comment.trim();
  if (!text) return;
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  if (!state.forumComments[topic.id]) state.forumComments[topic.id] = [];
  state.forumComments[topic.id].push([account?.name || "Utilizador", text, time]);
  setToast("Resposta publicada.");
  saveState();
  render();
}

function loadDemoData(role = currentRole()) {
  const account = activeAccount();
  if (!account) return;
  state.selectedRole = role;
  account.role = role;
  account.onboardingSeen = true;
  state.selectedChallengeId = 1;
  state.selectedSubmissionId = "demo-submission";
  state.selectedContactId = role === "recruiter" ? "student-artur" : "mentor-joao";
  state.notificationReadIds = [];
  state.confirmClearDemo = false;
  account.skills = ["Java", "HTML", "C++"];
  account.completed = 14;
  account.rating = "4.6";
  account.level = 3;
  account.activeChallenges = [
    { challengeId: 20, title: "Tic Tac Hoe", progress: 78, copy: "Faltam 5 horas para terminar." },
    { challengeId: 4, title: "Count Even", progress: 42, copy: "Ainda existem pistas disponíveis." }
  ];
  state.messages = structuredClone(defaultMessages);
  state.recruiterMessages = structuredClone(defaultRecruiterMessages);
  state.teamMessages = structuredClone(defaultTeamMessages);
  persistAccountChats(account);
  state.forumComments = {
    java: [[account.name, "Também me acontece isto quando misturo herança com interfaces.", "12:04"]]
  };
  state.submissions = [
    {
      id: "demo-submission",
      email: account.email,
      name: account.name,
      challengeId: 1,
      challenge: "Design Logo",
      title: "Proposta visual inicial",
      link: "https://portfolio.example/design-logo",
      fileName: "design-logo-proposta.pdf",
      fileSize: 846000,
      fileType: "application/pdf",
      text: "Submissão com paleta, estudo de símbolo e aplicação em cartão.",
      status: role === "recruiter" ? "Pendente" : "Submetido para avaliação",
      submittedAt: "Hoje, 14:20"
    },
    {
      id: "demo-feedback",
      email: account.email,
      name: account.name,
      challengeId: 12,
      challenge: "Bug Fix",
      title: "Correção de execução",
      fileName: "bug-fix-relatorio.docx",
      fileSize: 328000,
      fileType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      text: "Corrigi a exceção principal e documentei os testes usados.",
      status: "Aprovado",
      rating: "4",
      feedback: "Boa explicação. Falta só detalhar melhor os casos limite.",
      submittedAt: "Ontem, 16:10",
      evaluatedAt: "Hoje, 09:20"
    }
  ];
  state.recruiterChallenges = [
    { id: 501, title: "Landing Page Sustentável", skill: "HTML/CSS", time: "6H", level: "Intermédio", deadline: "48 horas", maxParticipants: 3, status: "Publicado", candidates: 8, description: "Criar uma landing page responsiva para uma marca sustentável.", criteria: "Responsividade, clareza visual e acessibilidade.", allowedFiles: "PDF, PNG, JPG" },
    { id: 502, title: "API de Ranking", skill: "Node.js", time: "12H", level: "Avançado", deadline: "72 horas", maxParticipants: 2, status: "Em revisão", candidates: 3, description: "Criar endpoints para pontuação e ranking de alunos.", criteria: "Validação, segurança e documentação.", allowedFiles: "PDF, Word, link GitHub" }
  ];
  if (role === "recruiter") {
    account.recruiterRating = "4.8";
    state.recruiterChallenges = state.recruiterChallenges.map((challenge) => ({ ...challenge, recruiterEmail: account.email }));
    state.submissions = state.submissions.map((submission) => ({
      ...submission,
      recruiterEmail: account.email,
      email: submission.email === account.email ? "artur@skillquest.pt" : submission.email,
      name: submission.name === account.name ? "Artur Silva" : submission.name
    }));
  } else {
    account.recruiterRating = "";
    state.recruiterChallenges = [];
  }
  state.notifications = [
    { id: "demo-n1", title: "Feedback recebido em Bug Fix", body: "A tua entrega foi aprovada com nota 4/5.", icon: "star", route: "evaluation", unread: true },
    { id: "demo-n2", title: "Nova resposta no fórum", body: "João L. respondeu ao tópico de Java.", icon: "chat", route: "forumDetail", unread: true },
    { id: "demo-n3", title: "Tic Tac Hoe termina em 5H", body: "Ainda podes continuar antes do prazo.", icon: "clock", route: "management", unread: false }
  ];
  state.notifications = state.notifications.map((note) => ({ ...note, email: account.email }));
  setToast("Dados demo carregados.");
  saveState();
  go(roleHome(role));
}

function clearDemoData() {
  const account = activeAccount();
  state.submissions = [];
  state.forumComments = {};
  state.notificationReadIds = [];
  state.notifications = [];
  state.recruiterChallenges = structuredClone(defaultState.recruiterChallenges);
  state.messages = [];
  state.recruiterMessages = [];
  state.teamMessages = [];
  if (account) {
    account.activeChallenges = [];
    account.completed = 0;
    account.rating = "";
    account.recruiterRating = "";
    account.level = 1;
    account.messages = [];
    account.recruiterMessages = [];
    account.teamMessages = [];
  }
  state.confirmClearDemo = false;
  setToast("Dados demo limpos.");
  saveState();
  render();
}

function sendMessage(data) {
  const text = data.message.trim();
  if (!text) return;
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  const role = currentRole();
  const context = state.chatContext || (role === "recruiter" ? "student" : "mentor");
  const isTeam = context === "team";
  const isStudentContact = role === "recruiter" || context === "student";
  const target = isTeam ? state.teamMessages : isStudentContact ? state.recruiterMessages : state.messages;
  target.push({ from: "me", text, time });
  target.push({
    from: isTeam ? "team" : isStudentContact ? "student" : "mentor",
    text: isTeam ? "Marta: Boa, vou atualizar isso na versão final." : isStudentContact ? "Obrigado, vou testar essa sugestão." : "Recebido. Vou analisar e responder com uma sugestão.",
    time
  });
  persistAccountChats();
  saveState();
  render();
}

document.addEventListener("click", (event) => {
  const backButton = event.target.closest("[data-back]");
  if (backButton) {
    event.preventDefault();
    goBack(backButton.dataset.back || roleHome());
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    event.preventDefault();
    const route = routeButton.dataset.route;
    const fromMenu = Boolean(routeButton.closest(".menu-list"));
    const fromGlobalNav = Boolean(routeButton.closest(".bottom-nav") || routeButton.closest(".top-actions"));
    const opensMenu = route === "menu";
    const goesHome = route === "dashboard" || route === "recruiterDashboard";
    if (fromMenu) {
      state.menuContext = true;
    } else if (fromGlobalNav || opensMenu || goesHome) {
      state.menuContext = false;
    }
    if (route === "chatDetail") {
      state.chatBack = currentRoute() === "chatDetail" ? "chats" : currentRoute();
      state.chatContext = routeButton.dataset.chatContext || (currentRole() === "recruiter" ? "student" : "mentor");
      if (routeButton.dataset.contactId) state.selectedContactId = routeButton.dataset.contactId;
    }
    if (route === "workbench") {
      startActiveChallenge();
    }
    saveState();
    go(route);
    return;
  }

  const themeButton = event.target.closest("[data-theme-choice]");
  if (themeButton) {
    state.theme = themeButton.dataset.themeChoice === "dark" ? "dark" : "light";
    setToast(state.theme === "dark" ? "Modo escuro ativado." : "Modo claro ativado.");
    saveState();
    render();
    return;
  }

  const openSubmission = event.target.closest("[data-open-submission]");
  if (openSubmission) {
    event.preventDefault();
    state.selectedSubmissionId = openSubmission.dataset.openSubmission;
    saveState();
    go("submissionDetail");
    return;
  }

  const openChallenge = event.target.closest("[data-open-challenge]");
  if (openChallenge) {
    event.preventDefault();
    state.selectedChallengeId = openChallenge.dataset.openChallenge;
    if (openChallenge.dataset.openWorkbench) {
      startActiveChallenge(selectedChallenge());
    }
    saveState();
    go(openChallenge.dataset.openWorkbench ? "workbench" : "challenge");
    return;
  }

  const openContact = event.target.closest("[data-open-contact]");
  if (openContact) {
    event.preventDefault();
    state.selectedContactId = openContact.dataset.openContact;
    saveState();
    go("contactDetail");
    return;
  }

  const markNotifications = event.target.closest("[data-mark-notifications]");
  if (markNotifications) {
    visibleNotifications().forEach((note) => markNotificationRead(note.id));
    setToast("Notificações marcadas como lidas.");
    saveState();
    render();
    return;
  }

  const scrollTarget = event.target.closest("[data-scroll-target]");
  if (scrollTarget) {
    event.preventDefault();
    document.querySelector(`#${scrollTarget.dataset.scrollTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const pendingRoleButton = event.target.closest("[data-pending-role]");
  if (pendingRoleButton) {
    state.pendingRole = pendingRoleButton.dataset.pendingRole;
    saveState();
    render();
    return;
  }

  const confirmRoleButton = event.target.closest("[data-confirm-role]");
  if (confirmRoleButton) {
    const account = activeAccount();
    if (account && state.pendingRole) {
      account.role = state.pendingRole;
      account.onboardingSeen = false;
      state.selectedRole = account.role;
      state.selectedContactId = account.role === "recruiter" ? "student-artur" : "recruiter-ocean";
      addWelcomeNotification(account, account.role);
      state.pendingRole = null;
      saveState();
      go("onboarding");
    }
    return;
  }

  const finishOnboarding = event.target.closest("[data-finish-onboarding]");
  if (finishOnboarding) {
    const account = activeAccount();
    if (account) account.onboardingSeen = true;
    state.routeHistory = [];
    saveState();
    go(roleHome());
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    sessionStorage.setItem("challengeFilter", filterButton.dataset.filter);
    render();
    return;
  }

  const clearChallengeSearch = event.target.closest("[data-clear-challenge-search]");
  if (clearChallengeSearch) {
    sessionStorage.removeItem("challengeSearch");
    sessionStorage.setItem("challengeFilter", "all");
    render();
    return;
  }

  const loadDemo = event.target.closest("[data-load-demo]");
  if (loadDemo) {
    state.confirmClearDemo = false;
    loadDemoData(loadDemo.dataset.loadDemo || currentRole());
    return;
  }

  const clearDemo = event.target.closest("[data-clear-demo]");
  if (clearDemo) {
    if (!state.confirmClearDemo) {
      state.confirmClearDemo = true;
      setToast("Clica em Confirmar limpeza para apagar apenas os dados demo.");
      saveState();
      render();
      return;
    }
    clearDemoData();
    return;
  }

  const cancelClearDemo = event.target.closest("[data-cancel-clear-demo]");
  if (cancelClearDemo) {
    state.confirmClearDemo = false;
    setToast("Limpeza cancelada.");
    saveState();
    render();
    return;
  }

  const topicButton = event.target.closest("[data-open-topic]");
  if (topicButton) {
    state.selectedTopicId = topicButton.dataset.openTopic;
    saveState();
    go("forumDetail");
    return;
  }

  const switchRoleButton = event.target.closest("[data-switch-role]");
  if (switchRoleButton) {
    const account = activeAccount();
    const targetRole = switchRoleButton.dataset.switchRole;
    const switchInfo = roleSwitchInfo(account);
    if (!account || !switchInfo.canSwitch) {
      setToast(`Só podes mudar de tipo de conta em ${switchInfo.daysRemaining} dia(s).`);
      render();
      return;
    }
    account.role = targetRole;
    account.lastRoleChange = Date.now();
    state.selectedRole = targetRole;
    state.selectedContactId = targetRole === "recruiter" ? "student-artur" : "recruiter-ocean";
    state.menuContext = false;
    state.routeHistory = [];
    setToast(`Tipo de conta alterado para ${roleLabel(targetRole)}.`);
    saveState();
    go(roleHome(targetRole));
    return;
  }

  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    sessionStorage.setItem("chatTab", tabButton.dataset.tab);
    render();
    return;
  }

  const notification = event.target.closest("[data-notification]");
  if (notification) {
    const note = visibleNotifications().find((item) => item.id === notification.dataset.notification)
      || state.notifications.find((item) => item.id === notification.dataset.notification);
    if (note) {
      markNotificationRead(note.id);
      state.menuContext = false;
      saveState();
      go(note.route);
    }
    return;
  }

  const action = event.target.closest("[data-action-click]");
  if (action?.dataset.actionClick === "logout") {
    state.currentEmail = null;
    state.selectedRole = null;
    state.pendingRole = null;
    state.routeHistory = [];
    setToast("Sessão terminada.");
    saveState();
    go("login");
  }
});

document.addEventListener("change", (event) => {
  const fileInput = event.target.closest(".file-native");
  if (!fileInput) return;
  const file = fileInput.files?.[0];
  const fileName = file?.name || "Nenhum ficheiro selecionado";
  const label = fileInput.closest(".file-drop")?.querySelector("[data-file-name]");
  if (label) label.textContent = fileName;
  const preview = fileInput.closest(".field")?.querySelector("[data-file-preview]");
  if (preview) {
    preview.textContent = file
      ? `${file.name} · ${formatFileSize(file.size)} · ${file.type || "tipo desconhecido"} · pronto para enviar`
      : "O preview do anexo aparece aqui depois de escolheres um ficheiro.";
  }
});

document.addEventListener("input", (event) => {
  const searchInput = event.target.closest("[data-challenge-search]");
  if (!searchInput) return;
  sessionStorage.setItem("challengeSearch", searchInput.value);
  render();
  const restored = document.querySelector("[data-challenge-search]");
  if (restored) {
    restored.focus();
    const cursor = restored.value.length;
    restored.setSelectionRange(cursor, cursor);
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-action]");
  if (!form) return;
  event.preventDefault();
  const data = formData(form);
  const actions = {
    register: registerUser,
    login: loginUser,
    saveProfile,
    sendMessage,
    submitWork,
    createChallenge,
    evaluateSubmission,
    addForumComment
  };
  actions[form.dataset.action]?.(data);
});

window.addEventListener("hashchange", render);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const backButton = document.querySelector(".topbar [data-back]");
  if (backButton) {
    goBack(backButton.dataset.back || roleHome());
    return;
  }
  const menuButton = document.querySelector(".topbar [data-route='menu']");
  if (menuButton) go("menu");
});

render();
