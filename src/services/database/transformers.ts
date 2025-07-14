
import { Project } from '@/data/projects';
import { BlogPost } from '@/data/blogs';

// Transform database row to Project type
export const transformDbProjectToProject = (dbProject: any): Project => {
  console.log('Transformer - Raw DB project data:', dbProject);
  
  const transformedProject = {
    id: dbProject.id,
    title: dbProject.title,
    client: dbProject.client,
    serviceId: dbProject.service_id,
    description: dbProject.description,
    challenge: dbProject.challenge,
    solution: dbProject.solution,
    image: dbProject.image,
    liveUrl: dbProject.link,
    technologies: dbProject.technologies || [],
    detailedMetrics: dbProject.detailed_metrics || [],
    gallery: dbProject.gallery || [],
    extendedTestimonial: dbProject.extended_testimonial || { quote: '', author: '', position: '', company: '' },
    // Map the missing fields from database
    timeline: dbProject.timeline || dbProject.project_timeline || '',
    team: dbProject.team_size || dbProject.team || '',
    industry: dbProject.industry || dbProject.project_industry || '',
    // Add default values for other required Project fields
    metrics: {},
    clientLogo: '',
    testimonial: dbProject.extended_testimonial?.quote || '',
    approach: [],
    techStack: [],
    features: []
  };
  
  console.log('Transformer - Transformed project:', transformedProject);
  return transformedProject;
};

// Transform database row to BlogPost type
export const transformDbBlogToBlogPost = (dbBlog: any): BlogPost => {
  return {
    id: dbBlog.id,
    title: dbBlog.title,
    content: dbBlog.content,
    excerpt: dbBlog.excerpt,
    author: dbBlog.author || { name: '', avatar: '', bio: '' },
    publishedDate: dbBlog.published_date,
    readingTime: dbBlog.reading_time || 5,
    featuredImage: dbBlog.image,
    category: 'General',
    tags: dbBlog.tags || []
  };
};
