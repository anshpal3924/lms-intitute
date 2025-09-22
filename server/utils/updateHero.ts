import mongoose from 'mongoose';
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

const updateHeroImage = async () => {
  try {
    await connectDB();

    // Update existing banner with working image URL
    const bannerData = await LayoutModel.findOne({ type: 'Banner' });
    if (bannerData) {
      await LayoutModel.findByIdAndUpdate(bannerData._id, {
        type: 'Banner',
        banner: {
          image: {
            public_id: 'sample_hero_updated',
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          },
          title: 'Improve Your Online Learning Experience Better Instantly',
          subTitle: 'We have 40k+ Online courses & 500K+ Online registered students. Find your desired courses from them.',
        },
      });
      console.log('Hero banner image updated successfully');
    }

    console.log('Update completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating hero image:', error);
    process.exit(1);
  }
};

updateHeroImage();
