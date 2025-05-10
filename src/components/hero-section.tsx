import ProfileCard, { mockProfiles } from '@/components/profileCard';
import { Button } from '@/components/ui/button';
import { InteractiveGrid } from '@/components/ui/interactive-grid';
import { ShineBorder } from '@/components/ui/shine-border';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden border border-white/10 bg-black pt-10 pb-6">
      <InteractiveGrid
        containerClassName="absolute inset-0"
        className="opacity-30"
        points={40}
      />

      <ShineBorder
        className="relative z-10 mx-auto max-w-6xl px-6 pb-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden">
        <div className="px-2 py-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Find Mentors that work in your desired industry with Ko-bi
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            You can browse through a list of mentors for resume review, coffee
            chat request and more.
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="mb-6 flex justify-between">
            <h2 className="mb-6 text-xl font-semibold">Mentors</h2>
            <Link href="/profiles">
              <Button className="cursor-pointer border border-white">
                View All Mentors
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
