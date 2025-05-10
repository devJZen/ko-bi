import ProfileCard, { mockProfiles } from '@/components/profileCard';

export default function Profiles() {
  return (
    <div className="grid grid-cols-1 gap-6 self-center md:grid-cols-2">
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
  );
}
