import ProfileCard, { mockProfiles } from "@/components/profileCard"
import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen pt-10 pb-6 overflow-hidden bg-black border border-white/10">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6 pb-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center py-4 px-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Find Mentors that work in your desired industry with Ko-bi
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            You can browse through a list of mentors for resume review, coffee chat request and more.
          </p>
        </div>

        <div className="space-y-6 flex flex-col">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-semibold mb-6">Mentors</h2>
            <Link href='/profiles'>
              <Button className="border border-white cursor-pointer">
                View All Mentors
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            {mockProfiles.map((profile, index) => (
              <ProfileCard 
                key={index} 
                avatar={profile.avatar} 
                name={profile.name}
                jobTitle={profile.jobTitle}
                description={profile.description}
                tags={profile.tags}
                hashtags={profile.hashtags}
              />
            ))}
          </div>
        </div>
      </ShineBorder>
    </section>
  )
}
