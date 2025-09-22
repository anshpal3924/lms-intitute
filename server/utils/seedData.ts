import mongoose from 'mongoose';
import CourseModel from '../models/course.model';
import LayoutModel from '../models/layout.model';
require('dotenv').config();

const dbUrl: string = process.env.DB_URL || '';

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected successfully');
  } catch (error: any) {
    console.log('Database connection error:', error.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();

    // Create sample hero/banner data
    const existingBanner = await LayoutModel.findOne({ type: 'Banner' });
    if (!existingBanner) {
      await LayoutModel.create({
        type: 'Banner',
        banner: {
          image: {
            public_id: 'sample_hero',
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          },
          title: 'Improve Your Online Learning Experience Better Instantly',
          subTitle: 'We have 40k+ Online courses & 500K+ Online registered students. Find your desired courses from them.',
        },
      });
      console.log('Hero banner data created');
    }

    // Create sample categories
    const existingCategories = await LayoutModel.findOne({ type: 'Categories' });
    if (!existingCategories) {
      await LayoutModel.create({
        type: 'Categories',
        categories: [
          { title: 'Web Development' },
          { title: 'Mobile Development' },
          { title: 'Data Science' },
          { title: 'Machine Learning' },
          { title: 'Design' },
          { title: 'Business' },
        ],
      });
      console.log('Categories created');
    }

    // Create sample FAQ data
    const existingFAQ = await LayoutModel.findOne({ type: 'FAQ' });
    if (!existingFAQ) {
      await LayoutModel.create({
        type: 'FAQ',
        faq: [
          {
            question: 'How do I enroll in a course?',
            answer: 'You can enroll by clicking the "Enroll Now" button on any course page and completing the payment process.',
          },
          {
            question: 'Are there any prerequisites for courses?',
            answer: 'Each course has its own prerequisites listed on the course details page. Please check before enrolling.',
          },
          {
            question: 'Can I get a refund if I\'m not satisfied?',
            answer: 'Yes, we offer a 30-day money-back guarantee for all our courses.',
          },
          {
            question: 'How long do I have access to the course?',
            answer: 'You have lifetime access to all courses you purchase.',
          },
        ],
      });
      console.log('FAQ data created');
    }

    // Create sample course
    const existingCourses = await CourseModel.find();
    if (existingCourses.length === 0) {
      await CourseModel.create({
        name: 'Complete React.js Development Course',
        description: 'Learn React.js from scratch to advanced level with hands-on projects',
        categories: 'Web Development',
        price: 999,
        estimatedPrice: 1999,
        tags: 'react,javascript,frontend,web development',
        level: 'Beginner',
        demoUrl: 'https://www.youtube.com/watch?v=example',
        thumbnail: {
          public_id: 'react-course',
          url: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        benefits: [
          { title: 'Learn React fundamentals' },
          { title: 'Build real-world projects' },
          { title: 'Understand state management' },
        ],
        prerequisites: [
          { title: 'Basic JavaScript knowledge' },
          { title: 'HTML & CSS basics' },
        ],
        courseData: [
          {
            videoUrl: 'sample-video-url',
            title: 'Introduction to React',
            description: 'Learn the basics of React.js',
            videoSection: 'Getting Started',
            videoLength: 15,
            links: [
              {
                title: 'React Documentation',
                url: 'https://reactjs.org/docs',
              },
            ],
          },
        ],
        ratings: 4.5,
        purchased: 0,
        reviews: [],
      });
      console.log('Sample course created');
    }

    console.log('Seed data completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
