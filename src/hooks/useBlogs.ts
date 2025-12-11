import { useState, useEffect } from 'react';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  createdAt: string;
  category: string;
  published: boolean;
}

const defaultBlogs: Blog[] = [
  {
    id: '1',
    title: 'Understanding Constitutional Homeopathy',
    slug: 'understanding-constitutional-homeopathy',
    excerpt: 'Learn how constitutional treatment addresses your unique physical and mental characteristics for lasting wellness.',
    content: `<p>Constitutional homeopathy is a holistic approach to healing that takes into account your entire being - physical symptoms, mental state, emotional patterns, and even your personality traits.</p>
    
<h2>What Makes Constitutional Treatment Different?</h2>
<p>Unlike conventional medicine that treats symptoms in isolation, constitutional homeopathy seeks to understand why you developed a particular condition in the first place. Your constitutional remedy is selected based on your totality - the complete picture of who you are.</p>

<h2>The Process</h2>
<p>During a constitutional consultation, your homeopath will spend significant time understanding:</p>
<ul>
<li>Your physical symptoms and how they manifest</li>
<li>Your mental and emotional state</li>
<li>Your sleep patterns, food preferences, and sensitivities</li>
<li>Your life history and significant events</li>
</ul>

<h2>Benefits of Constitutional Treatment</h2>
<p>When the right constitutional remedy is found, patients often experience:</p>
<ul>
<li>Improved overall energy and vitality</li>
<li>Better emotional balance</li>
<li>Resolution of chronic symptoms</li>
<li>Enhanced immunity</li>
</ul>`,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    author: 'Dr. Manohara MC',
    createdAt: '2024-01-15',
    category: 'Education',
    published: true,
  },
  {
    id: '2',
    title: 'Homeopathy for Seasonal Allergies',
    slug: 'homeopathy-for-seasonal-allergies',
    excerpt: 'Discover natural remedies for managing seasonal allergies without the drowsiness of conventional antihistamines.',
    content: `<p>Seasonal allergies affect millions of people, causing symptoms like sneezing, runny nose, itchy eyes, and fatigue. Homeopathy offers natural alternatives that can provide relief without the common side effects of conventional treatments.</p>

<h2>Common Homeopathic Remedies for Allergies</h2>
<p>Several remedies are commonly used for allergy symptoms:</p>
<ul>
<li><strong>Allium cepa</strong> - For watery, burning nasal discharge</li>
<li><strong>Sabadilla</strong> - For violent sneezing fits</li>
<li><strong>Euphrasia</strong> - For eye symptoms with bland nasal discharge</li>
<li><strong>Natrum muriaticum</strong> - For allergies with clear, watery discharge</li>
</ul>

<h2>Building Long-term Immunity</h2>
<p>Beyond acute relief, constitutional treatment can help reduce your overall susceptibility to allergies by strengthening your immune system.</p>`,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
    author: 'Dr. Deepa Joshi',
    createdAt: '2024-02-20',
    category: 'Treatment',
    published: true,
  },
  {
    id: '3',
    title: 'The Mind-Body Connection in Homeopathy',
    slug: 'mind-body-connection-homeopathy',
    excerpt: 'Explore how homeopathy recognizes the inseparable link between mental and physical health.',
    content: `<p>One of the fundamental principles of classical homeopathy is the understanding that mind and body are inseparable. Physical symptoms often have their roots in emotional or mental disturbances, and vice versa.</p>

<h2>Dr. Vijaykar's Teachings</h2>
<p>Dr. Prafful Vijaykar's predictive homeopathy emphasizes understanding disease at a deeper level. According to his teachings, suppression of symptoms at one level can lead to disease manifesting at a deeper level.</p>

<h2>Practical Applications</h2>
<p>At our clinic, we always consider:</p>
<ul>
<li>What was happening in your life when symptoms began?</li>
<li>How do emotions affect your physical symptoms?</li>
<li>What mental patterns accompany your condition?</li>
</ul>

<p>This comprehensive approach allows us to select remedies that address the whole person, leading to deeper and more lasting healing.</p>`,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    author: 'Dr. Umme Hafeefa',
    createdAt: '2024-03-10',
    category: 'Philosophy',
    published: true,
  },
];

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const savedBlogs = localStorage.getItem('clinic_blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(defaultBlogs);
      localStorage.setItem('clinic_blogs', JSON.stringify(defaultBlogs));
    }
  }, []);

  const addBlog = (blog: Omit<Blog, 'id' | 'createdAt'>) => {
    const newBlog: Blog = {
      ...blog,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [...blogs, newBlog];
    setBlogs(updated);
    localStorage.setItem('clinic_blogs', JSON.stringify(updated));
    return newBlog;
  };

  const updateBlog = (id: string, updates: Partial<Blog>) => {
    const updated = blogs.map(b => b.id === id ? { ...b, ...updates } : b);
    setBlogs(updated);
    localStorage.setItem('clinic_blogs', JSON.stringify(updated));
  };

  const deleteBlog = (id: string) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    localStorage.setItem('clinic_blogs', JSON.stringify(updated));
  };

  const getBlogBySlug = (slug: string) => blogs.find(b => b.slug === slug);

  return { blogs, addBlog, updateBlog, deleteBlog, getBlogBySlug };
};
