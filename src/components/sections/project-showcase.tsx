import { ProjectCard, type Project } from '@/components/ui/project-card';

const projects: Project[] = [
  {
    id: '1',
    title: 'Decentralized Identity Solution',
    description: 'Empowering Sierra Leoneans with self-sovereign digital identities, enhancing access to services and financial inclusion.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'digital identity',
    projectUrl: '#',
    tags: ['Identity', 'SSI', 'Social Impact'],
  },
  {
    id: '2',
    title: 'NFT Marketplace for Local Artists',
    description: 'A platform for Sierra Leonean artists to tokenize and sell their work globally, fostering the local creative economy.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'art marketplace',
    projectUrl: '#',
    tags: ['NFT', 'Art', 'Creator Economy'],
  },
  {
    id: '3',
    title: 'AgriLedger: Supply Chain Transparency',
    description: 'Leveraging blockchain to track agricultural products from farm to market, ensuring fair prices and reducing fraud.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'agriculture technology',
    projectUrl: '#',
    tags: ['Supply Chain', 'Agriculture', 'Blockchain'],
  },
];

export function ProjectShowcaseSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-in-bottom">
          Our Impactful Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              className="animate-slide-in-bottom"
              style={{animationDelay: `${0.2 + index * 0.15}s`}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
