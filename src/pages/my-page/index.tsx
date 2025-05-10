'use client';

import { EditProfileDialog } from '@/components/editProfileDialog';
import ProfileCard, { mockProfiles } from '@/components/profileCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
// import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
  // const { toast } = useToast()

  // This would typically come from a database or API
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    joinedDate: 'January 15, 2023',
    avatar: '/user.png',
  };

  // const handleSaveProfile = (updatedUser: UserProfile) => {
  //   setUser(updatedUser)
  //   toast({
  //     title: "Profile updated",
  //     description: "Your profile information has been updated successfully.",
  //   })
  // }

  return (
    <div className="container mx-auto max-w-5xl px-4">
      {/* User Profile Section */}
      <div className="mb-12 flex flex-col items-center space-y-4">
        <Avatar className="h-32 w-32 bg-white">
          <AvatarImage
            src={user.avatar || '/placeholder.svg'}
            alt={user.name}
          />
          <AvatarFallback>
            {user.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
          <p className="text-muted-foreground text-sm">
            Joined {user.joinedDate}
          </p>
          <EditProfileDialog
            user={user}
            onSave={() => console.log('saved: ', user)}
          />
        </div>
      </div>

      {/* User Posts Section */}
      <div className="flex flex-col justify-center space-y-6">
        <div className="mb-6 flex justify-between">
          <h2 className="mb-6 text-xl font-semibold">Posts</h2>
          <Button
            className="cursor-pointer gap-2 border border-white"
            onClick={() => {}}>
            <Plus size={16} />
            Create New Post
          </Button>
        </div>
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
      </div>
    </div>
  );
}
