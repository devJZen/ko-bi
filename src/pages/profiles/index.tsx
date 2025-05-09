import ProfileCard, { mockProfiles } from "@/components/profileCard"


export default function Profiles() {
    return (
        <div className="grid gap-6 md:grid-cols-2 grid-cols-1 self-center">
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
    )
}