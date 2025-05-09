import { Badge } from "@/components/ui/badge"
import Image from "next/image"


interface ProfileCardProps {
  avatar: string
  name: string
  jobTitle: string
  description: string
  tags: string[]
  hashtags: string[]
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
      <div className="border border-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-24 h-24 relative mb-4">
            <Image
              src="/user.png"
              alt="Profile picture"
              width={96}
              height={96}
              className="rounded-full object-cover bg-white"
            />
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold">{props.name}</h1>

          {/* Job Title */}
          <p className="text-center mt-1">
            {props.jobTitle}
          </p>

          {/* Description */}
          <p className="mt-4 mb-4">
            {props.description}
          </p>

          <div className="self-start flex flex-wrap gap-2 mb-4 mt-4">
            {props.tags.map((tag) => (
              <Badge key={tag} className="font-normal border border-gray-500">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="self-start flex flex-wrap gap-2 mb-4 mt-4">
            {props.hashtags.map((tag) => (
              <Badge key={tag} className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
  )
}


export const mockProfiles: ProfileCardProps[] = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Park",
    jobTitle: "Senior Software Engineer @ ByteWave",
    description: "I help early-career developers ace their coding interviews with live mock sessions.",
    tags: ["Mock Interview", "Portfolio Review", "Resume Review"],
    hashtags: ["#coding", "#interviewprep", "#softwareengineer"]
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Daniel Kim",
    jobTitle: "Product Manager @ DigiSphere",
    description: "Offering portfolio reviews and feedback to help you land your dream PM role.",
    tags: ["Portfolio Review", "Resume Review"],
    hashtags: ["#productmanagement", "#portfolio", "#career"]
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Sophia Lee",
    jobTitle: "UX/UI Designer @ Creativa",
    description: "Let me review your design portfolio and provide actionable UX/UI tips.",
    tags: ["Portfolio Review", "Resume Review"],
    hashtags: ["#design", "#uxui", "#portfolio"]
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Michael Chen",
    jobTitle: "Data Scientist @ Analytica Labs",
    description: "Get hands-on guidance on your data science projects and resumes.",
    tags: ["Resume Review", "Portfolio Review"],
    hashtags: ["#datascience", "#resume", "#machinelearning"]
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Olivia Rodriguez",
    jobTitle: "Career Coach @ GrowthPath",
    description: "Coffee chat sessions to discuss career goals, strategies, and networking tips.",
    tags: ["Coffee Chat", "Portfolio Review"],
    hashtags: ["#careercoach", "#networking", "#growth"]
  }
];