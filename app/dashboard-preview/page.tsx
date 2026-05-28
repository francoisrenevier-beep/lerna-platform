"use client"

import Link from "next/link"
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  ChevronRight, 
  Play,
  Award,
  Zap,
  Target,
  Flame,
  GraduationCap,
  Calendar,
  Bell,
  Settings,
  Search,
  Home,
  Library,
  User,
  BarChart3,
  FileText
} from "lucide-react"

// ── Mock Data ─────────────────────────────────────────────────────────────────

const mockUser = {
  prenom: "Marie",
  nom: "Dupont",
  role: "Infirmiere",
}

const mockInstitution = {
  nom: "CHU de Lyon"
}

const mockFormations = [
  {
    id: "1",
    titre: "Gestion de la douleur",
    description: "Techniques avancees de prise en charge",
    progression: 75,
    totalModules: 8,
    modulesTermines: 6,
    dureeEstimee: "4h30",
    categorie: "Soins",
    niveau: "Avance",
  },
  {
    id: "2", 
    titre: "Hygiene hospitaliere",
    description: "Protocoles et bonnes pratiques",
    progression: 30,
    totalModules: 12,
    modulesTermines: 4,
    dureeEstimee: "6h00",
    categorie: "Prevention",
    niveau: "Intermediaire",
  },
  {
    id: "3",
    titre: "Communication patient",
    description: "Relation soignant-soigne",
    progression: 100,
    totalModules: 6,
    modulesTermines: 6,
    dureeEstimee: "3h00",
    categorie: "Soft Skills",
    niveau: "Debutant",
  }
]

const mockBadges = [
  { id: "1", nom: "Premier pas", icone: "trophy", obtenuLe: "2024-01-15", description: "Premiere formation terminee" },
  { id: "2", nom: "Assidu", icone: "flame", obtenuLe: "2024-02-01", description: "7 jours consecutifs" },
  { id: "3", nom: "Expert", icone: "star", obtenuLe: "2024-02-20", description: "Score parfait" },
]

const mockStats = {
  formationsTerminees: 12,
  heuresFormation: 48,
  scoresMoyens: 87,
  streak: 14
}

// ── Page Component ────────────────────────────────────────────────────────────

export default function DashboardPreview() {
  const getInitials = (prenom: string, nom: string) => {
    return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase()
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Bonjour"
    if (hour < 18) return "Bon apres-midi"
    return "Bonsoir"
  }

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* Preview Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300 text-sm font-medium">
            Mode previsualisation — Donnees de demonstration
          </span>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">LEARNA</span>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-12">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25 group-focus-within:text-white/40 transition-colors" />
                <input 
                  type="text"
                  placeholder="Rechercher une formation..."
                  className="w-full h-11 pl-11 pr-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.06] transition-all"
                />
                <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-white/20 bg-white/[0.06] px-2 py-1 rounded-md font-mono hidden lg:block">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button className="relative p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                <Bell className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-[#09090b]" />
              </button>
              <button className="p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                <Settings className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
              </button>
              <div className="ml-3 pl-4 border-l border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-emerald-500/20 cursor-pointer hover:scale-105 transition-transform">
                  {getInitials(mockUser.prenom, mockUser.nom)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-12">
        {/* Hero */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-400 text-sm font-semibold tracking-wide">{mockInstitution.nom}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-white/30 text-sm">{mockUser.role}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {getGreeting()}, {mockUser.prenom}
              </h1>
              <p className="text-white/40 mt-3 text-lg">
                Continuez votre parcours de formation professionnelle
              </p>
            </div>
            
            {/* Streak badge */}
            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-orange-300 text-xl font-bold">{mockStats.streak} jours</p>
                <p className="text-orange-400/60 text-xs font-medium">Serie en cours</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Formations terminees", value: mockStats.formationsTerminees, icon: Trophy, gradient: "from-emerald-500 to-teal-500", bg: "emerald" },
              { label: "Heures de formation", value: `${mockStats.heuresFormation}h`, icon: Clock, gradient: "from-blue-500 to-cyan-500", bg: "blue" },
              { label: "Score moyen", value: `${mockStats.scoresMoyens}%`, icon: Target, gradient: "from-violet-500 to-purple-500", bg: "violet" },
              { label: "Badges obtenus", value: mockBadges.length, icon: Award, gradient: "from-amber-500 to-orange-500", bg: "amber" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className={`
                  relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg
                  ${stat.bg === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-emerald-500/25' : ''}
                  ${stat.bg === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-blue-500/25' : ''}
                  ${stat.bg === 'violet' ? 'bg-gradient-to-br from-violet-500 to-purple-500 shadow-violet-500/25' : ''}
                  ${stat.bg === 'amber' ? 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/25' : ''}
                `}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <p className="relative text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="relative text-sm text-white/40 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Formations - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* En cours */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-7 rounded-full bg-gradient-to-b from-emerald-400 to-teal-500" />
                  <h2 className="text-xl font-bold text-white">Continuer</h2>
                  <span className="text-sm text-white/30 font-medium">
                    {mockFormations.filter(f => f.progression < 100).length} en cours
                  </span>
                </div>
                <Link 
                  href="/formations" 
                  className="text-sm text-white/30 hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium"
                >
                  Tout voir
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-3">
                {mockFormations.filter(f => f.progression < 100).map((formation) => (
                  <Link
                    key={formation.id}
                    href={`/formations/${formation.id}`}
                    className="group block p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#1e3a5f]/60 border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/30 transition-colors">
                        <BookOpen className="w-7 h-7 text-emerald-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                              {formation.titre}
                            </h3>
                            <p className="text-sm text-white/40 mt-1">{formation.description}</p>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                              <Play className="w-5 h-5 text-white ml-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.06] text-white/50 font-medium">
                            {formation.categorie}
                          </span>
                          <span className="text-xs text-white/30 flex items-center gap-1.5 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            {formation.dureeEstimee}
                          </span>
                          <span className="text-xs text-white/30 font-medium">
                            {formation.modulesTermines}/{formation.totalModules} modules
                          </span>
                        </div>

                        {/* Progress */}
                        <div className="flex items-center gap-4">
                          <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 ease-out"
                              style={{ width: `${formation.progression}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-emerald-400 tabular-nums">
                            {formation.progression}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Terminées */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-7 rounded-full bg-gradient-to-b from-violet-400 to-purple-500" />
                <h2 className="text-xl font-bold text-white">Terminees</h2>
              </div>

              <div className="space-y-3">
                {mockFormations.filter(f => f.progression === 100).map((formation) => (
                  <div
                    key={formation.id}
                    className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.03] transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white/80 text-base">{formation.titre}</h3>
                        <p className="text-sm text-white/30 mt-1">{formation.categorie} • {formation.dureeEstimee}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                          Complete
                        </span>
                        <button className="p-2 rounded-lg hover:bg-white/[0.06] transition-colors">
                          <FileText className="w-5 h-5 text-white/30" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Badges */}
            <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Badges recents
                </h3>
                <Link href="/badges" className="text-xs text-white/30 hover:text-white/60 transition-colors font-medium">
                  Voir tous
                </Link>
              </div>

              <div className="space-y-3">
                {mockBadges.map((badge, index) => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-pointer group"
                  >
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center shadow-lg
                      ${index === 0 ? 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/25' : ''}
                      ${index === 1 ? 'bg-gradient-to-br from-rose-500 to-pink-500 shadow-rose-500/25' : ''}
                      ${index === 2 ? 'bg-gradient-to-br from-violet-500 to-purple-500 shadow-violet-500/25' : ''}
                    `}>
                      {index === 0 && <Trophy className="w-5 h-5 text-white" />}
                      {index === 1 && <Flame className="w-5 h-5 text-white" />}
                      {index === 2 && <Target className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors">{badge.nom}</p>
                      <p className="text-xs text-white/30 mt-0.5">{badge.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="p-6 rounded-2xl bg-gradient-to-br from-[#1e3a5f]/30 to-[#1e3a5f]/10 border border-[#1e3a5f]/30">
              <h3 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                Actions rapides
              </h3>

              <div className="space-y-2">
                {[
                  { icon: Library, label: "Explorer le catalogue", color: "emerald" },
                  { icon: User, label: "Mon profil", color: "blue" },
                  { icon: BarChart3, label: "Statistiques", color: "violet" },
                ].map((action, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-emerald-500/20 transition-all group"
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${action.color === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' : ''}
                      ${action.color === 'blue' ? 'bg-blue-500/15 text-blue-400' : ''}
                      ${action.color === 'violet' ? 'bg-violet-500/15 text-violet-400' : ''}
                    `}>
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-white/70 group-hover:text-white font-medium flex-1">{action.label}</span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Upcoming */}
            <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                A venir
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 text-xs text-blue-300 mb-2 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    Demain, 14h00
                  </div>
                  <p className="text-sm font-semibold text-white">Webinaire: Nouveautes protocoles</p>
                  <p className="text-xs text-white/40 mt-1">45 min • En direct</p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs text-white/40 mb-2 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    Vendredi, 10h00
                  </div>
                  <p className="text-sm font-semibold text-white/80">Echeance: Certification annuelle</p>
                  <p className="text-xs text-white/30 mt-1">2 modules restants</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-[#09090b]/95 backdrop-blur-xl border-t border-white/[0.06] z-50">
        <div className="flex items-center justify-around h-18 px-2 py-2">
          {[
            { icon: Home, label: "Accueil", active: true },
            { icon: BookOpen, label: "Formations", active: false },
            { icon: Library, label: "Catalogue", active: false },
            { icon: Trophy, label: "Badges", active: false },
            { icon: User, label: "Profil", active: false },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all ${
                item.active 
                  ? 'text-emerald-400 bg-emerald-500/10' 
                  : 'text-white/40 hover:text-white/60 hover:bg-white/[0.04]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
