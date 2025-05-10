import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface ProfileCardProps {
  avatar: string;
  name: string;
  jobTitle: string;
  description: string;
  tags: string[];
  hashtags: string[];
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="w-full max-w-md rounded-lg border border-white p-6 shadow-lg">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative mb-4 h-24 w-24">
          <Image
            src="/user.png"
            alt="Profile picture"
            width={96}
            height={96}
            className="rounded-full bg-white object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold">{props.name}</h1>

        {/* Job Title */}
        <p className="mt-1 text-center">{props.jobTitle}</p>

        {/* Description */}
        <p className="mt-4 mb-4">{props.description}</p>

        <div className="mt-4 mb-4 flex flex-wrap gap-2 self-start">
          {props.tags.map((tag) => (
            <Badge key={tag} className="border border-gray-500 font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4 mb-4 flex flex-wrap gap-2 self-start">
          {props.hashtags.map((tag) => (
            <Badge key={tag} className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export const mockProfiles: ProfileCardProps[] = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Emily Park',
    jobTitle: 'Senior Software Engineer @ ByteWave',
    description:
      'I help early-career developers ace their coding interviews with live mock sessions.',
    tags: ['Mock Interview', 'Portfolio Review', 'Resume Review'],
    hashtags: ['#coding', '#interviewprep', '#softwareengineer'],
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Daniel Kim',
    jobTitle: 'Product Manager @ DigiSphere',
    description:
      'Offering portfolio reviews and feedback to help you land your dream PM role.',
    tags: ['Portfolio Review', 'Resume Review'],
    hashtags: ['#productmanagement', '#portfolio', '#career'],
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Sophia Lee',
    jobTitle: 'UX/UI Designer @ Creativa',
    description:
      'Let me review your design portfolio and provide actionable UX/UI tips.',
    tags: ['Portfolio Review', 'Resume Review'],
    hashtags: ['#design', '#uxui', '#portfolio'],
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    name: 'Michael Chen',
    jobTitle: 'Data Scientist @ Analytica Labs',
    description:
      'Get hands-on guidance on your data science projects and resumes.',
    tags: ['Resume Review', 'Portfolio Review'],
    hashtags: ['#datascience', '#resume', '#machinelearning'],
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Olivia Rodriguez',
    jobTitle: 'Career Coach @ GrowthPath',
    description:
      'Coffee chat sessions to discuss career goals, strategies, and networking tips.',
    tags: ['Coffee Chat', 'Portfolio Review'],
    hashtags: ['#careercoach', '#networking', '#growth'],
  },
];
