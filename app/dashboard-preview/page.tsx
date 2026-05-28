"use client"

import Link from "next/link"
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  ChevronRight, 
  Play,
  Award,
  Target,
  Flame,
  FileText
} from "lucide-react"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"

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
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Bonjour"
    if (hour < 18) return "Bon apres-midi"
    return "Bonsoir"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/50 flex">
      {/* Sidebar - Desktop */}
      <Sidebar pageActive="dashboard" institution={mockInstitution.nom} prenom={mockUser.prenom} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Preview Banner */}
        <div className="bg-amber-50 border-b border-amber-200/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-700 text-sm font-medium">
              Mode previsualisation — Donnees de demonstration
            </span>
          </div>
        </div>

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 pb-28 md:pb-12 overflow-x-hidden">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <section className="mb-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#3DBFA0] text-sm font-semibold tracking-wide">{mockInstitution.nom}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="text-slate-400 text-sm">{mockUser.role}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] tracking-tight">
                    {getGreeting()}, {mockUser.prenom}
                  </h1>
                  <p className="text-slate-500 mt-2 text-base">
                    Continuez votre parcours de formation professionnelle
                  </p>
                </div>
                
                {/* Streak badge */}
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-orange-600 text-xl font-bold">{mockStats.streak} jours</p>
                    <p className="text-orange-500/70 text-xs font-medium">Serie en cours</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Formations terminees", value: mockStats.formationsTerminees, icon: Trophy, gradient: "from-[#3DBFA0] to-teal-500", bgLight: "bg-emerald-50", borderColor: "border-emerald-200/60", textColor: "text-[#3DBFA0]" },
                  { label: "Heures de formation", value: `${mockStats.heuresFormation}h`, icon: Clock, gradient: "from-blue-500 to-cyan-500", bgLight: "bg-blue-50", borderColor: "border-blue-200/60", textColor: "text-blue-600" },
                  { label: "Score moyen", value: `${mockStats.scoresMoyens}%`, icon: Target, gradient: "from-violet-500 to-purple-500", bgLight: "bg-violet-50", borderColor: "border-violet-200/60", textColor: "text-violet-600" },
                  { label: "Badges obtenus", value: mockBadges.length, icon: Award, gradient: "from-amber-500 to-orange-500", bgLight: "bg-amber-50", borderColor: "border-amber-200/60", textColor: "text-amber-600" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`group relative p-5 rounded-2xl bg-white border ${stat.borderColor} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-[#1e3a5f] mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
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
                      <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#3DBFA0] to-teal-500" />
                      <h2 className="text-xl font-bold text-[#1e3a5f]">Continuer</h2>
                      <span className="text-sm text-slate-400 font-medium">
                        {mockFormations.filter(f => f.progression < 100).length} en cours
                      </span>
                    </div>
                    <Link 
                      href="/formations" 
                      className="text-sm text-slate-400 hover:text-[#3DBFA0] transition-colors flex items-center gap-1 font-medium"
                    >
                      Tout voir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {mockFormations.filter(f => f.progression < 100).map((formation) => (
                      <Link
                        key={formation.id}
                        href={`/formations/${formation.id}`}
                        className="group block p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-[#3DBFA0]/30 hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex items-start gap-5">
                          {/* Icon */}
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                            <BookOpen className="w-7 h-7 text-[#3DBFA0]" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <h3 className="font-bold text-[#1e3a5f] text-lg group-hover:text-[#3DBFA0] transition-colors">
                                  {formation.titre}
                                </h3>
                                <p className="text-sm text-slate-500 mt-1">{formation.description}</p>
                              </div>
                              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                <div className="w-11 h-11 rounded-xl bg-[#3DBFA0] flex items-center justify-center shadow-lg shadow-[#3DBFA0]/30">
                                  <Play className="w-5 h-5 text-white ml-0.5" />
                                </div>
                              </div>
                            </div>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-medium">
                                {formation.categorie}
                              </span>
                              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                                <Clock className="w-3.5 h-3.5" />
                                {formation.dureeEstimee}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">
                                {formation.modulesTermines}/{formation.totalModules} modules
                              </span>
                            </div>

                            {/* Progress */}
                            <div className="flex items-center gap-4">
                              <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-[#3DBFA0] to-teal-400 rounded-full transition-all duration-700 ease-out"
                                  style={{ width: `${formation.progression}%` }}
                                />
                              </div>
                              <span className="text-sm font-bold text-[#3DBFA0] tabular-nums">
                                {formation.progression}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Terminees */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-violet-400 to-purple-500" />
                    <h2 className="text-xl font-bold text-[#1e3a5f]">Terminees</h2>
                  </div>

                  <div className="space-y-3">
                    {mockFormations.filter(f => f.progression === 100).map((formation) => (
                      <div
                        key={formation.id}
                        className="group p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-xl bg-[#3DBFA0]/10 border border-[#3DBFA0]/20 flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-[#3DBFA0]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[#1e3a5f] text-base">{formation.titre}</h3>
                            <p className="text-sm text-slate-400 mt-1">{formation.categorie} • {formation.dureeEstimee}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs px-4 py-2 rounded-xl bg-[#3DBFA0]/10 text-[#3DBFA0] font-semibold border border-[#3DBFA0]/20">
                              Complete
                            </span>
                            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                              <FileText className="w-5 h-5 text-slate-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                
                {/* Badges */}
                <section className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-[#1e3a5f] text-lg flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      Badges recents
                    </h3>
                    <Link href="/badges" className="text-xs text-slate-400 hover:text-[#3DBFA0] transition-colors font-medium">
                      Voir tous
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {mockBadges.map((badge, index) => (
                      <div
                        key={badge.id}
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100 transition-colors cursor-pointer group border border-slate-100"
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
                          <p className="font-semibold text-[#1e3a5f] text-sm group-hover:text-[#3DBFA0] transition-colors">{badge.nom}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{badge.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Quick Actions */}
                <section className="p-6 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] shadow-lg">
                  <h3 className="font-bold text-white text-lg mb-5">
                    Actions rapides
                  </h3>

                  <div className="space-y-2">
                    {[
                      { href: "/catalogue", label: "Explorer le catalogue", color: "emerald" },
                      { href: "/profil", label: "Mon profil", color: "blue" },
                      { href: "/progression", label: "Statistiques", color: "violet" },
                    ].map((action, index) => (
                      <Link
                        key={index}
                        href={action.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all group"
                      >
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${action.color === 'emerald' ? 'bg-[#3DBFA0]/20 text-[#3DBFA0]' : ''}
                          ${action.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : ''}
                          ${action.color === 'violet' ? 'bg-violet-500/20 text-violet-400' : ''}
                        `}>
                          {action.color === 'emerald' && <BookOpen className="w-5 h-5" />}
                          {action.color === 'blue' && <Award className="w-5 h-5" />}
                          {action.color === 'violet' && <Target className="w-5 h-5" />}
                        </div>
                        <span className="text-sm text-white/80 group-hover:text-white font-medium flex-1">{action.label}</span>
                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Upcoming Events */}
                <section className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-5">
                    A venir
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/80 border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        <div className="text-center leading-tight">
                          <div className="text-[10px] opacity-80">MAR</div>
                          <div>15</div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a5f]">Webinaire: Nouveautes 2024</p>
                        <p className="text-xs text-slate-500 mt-0.5">14h00 - 15h30</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-violet-50/80 border border-violet-100">
                      <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        <div className="text-center leading-tight">
                          <div className="text-[10px] opacity-80">MAR</div>
                          <div>22</div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a5f]">Formation pratique</p>
                        <p className="text-xs text-slate-500 mt-0.5">09h00 - 12h00</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Bottom Nav - Mobile */}
      <BottomNav pageActive="dashboard" institution={mockInstitution.nom} />
    </div>
  )
}
