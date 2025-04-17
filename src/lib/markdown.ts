import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Type definitions
interface ContentSection {
  title: string;
  content: string;
}

interface GuideContent {
  intro: string;
  sections: ContentSection[];
}

export function getGuideContent(): GuideContent {
  try {
    const fullPath = path.join(process.cwd(), 'src', 'content', 'ndiokwu_language_guide.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the markdown metadata
    const { content } = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processedContent = remark()
      .use(html, { sanitize: false }) // Don't sanitize to allow custom HTML
      .processSync(content)
      .toString();
    
    // Split content by section headers
    const sections = processedContent.split('<h2>').filter(Boolean);
    
    // Process the first section (without h2)
    const introSection = sections.shift() || '';
    
    // Process the remaining sections
    const contentSections = sections.map(section => {
      // Add back the h2 tag
      section = '<h2>' + section;
      
      // Extract the title (text content of h2)
      const titleMatch = section.match(/<h2>(.*?)<\/h2>/);
      const title = titleMatch ? titleMatch[1] : '';
      
      return {
        title,
        content: section
      };
    });
    
    return {
      intro: introSection,
      sections: contentSections
    };
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return { intro: 'Error loading content', sections: [] };
  }
}

export function extractAlphabetTable(): { consonantGrid: string; independentVowels: string } {
  const { sections } = getGuideContent();
  
  // Find the section with the consonant+vowel grid
  const consonantSection = sections.find(section => 
    section.title.includes('Consonant + Vowel Grid')
  );
  
  // Find the section with independent vowels
  const vowelSection = sections.find(section => 
    section.title.includes('Independent Vowels')
  );
  
  return {
    consonantGrid: consonantSection?.content || '',
    independentVowels: vowelSection?.content || ''
  };
} 