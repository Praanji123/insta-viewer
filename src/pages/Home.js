import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaDownload, FaEyeSlash, FaInstagram, FaStar, FaUsers, FaHeart, FaPlay, FaChevronDown, FaChevronUp, FaTrophy, FaRocket, FaMobile } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LanguageSelector = styled.select`
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  padding: 10px 15px;
  color: #495057;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 20px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="1" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const AdBanner = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchSection = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  
  @media (max-width: 568px) {
    flex-direction: column;
    border-radius: 25px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 18px 25px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  outline: none;
  background: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:focus {
    box-shadow: 0 4px 25px rgba(0,0,0,0.2);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const SearchButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  padding: 18px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(255, 107, 107, 0.6);
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

const ExampleUsers = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ExampleUser = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const NoticeBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  padding: 20px 25px;
  border-radius: 15px;
  text-align: center;
  margin-top: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const NoticeIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
`;

const NoticeText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.9;
`;

const Stats = styled.section`
  background: white;
  padding: 80px 20px;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatCard = styled(motion.div)`
  padding: 30px;
  border-radius: 15px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
`;

const Features = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
`;

const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const FeaturesSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
  }
`;

const FeatureIcon = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2.2rem;
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
`;

const Testimonials = styled.section`
  padding: 100px 20px;
  background: #2c3e50;
  color: white;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const AuthorTitle = styled.div`
  opacity: 0.7;
  font-size: 0.9rem;
`;

const FAQ = styled.section`
  padding: 100px 20px;
  background: #f8f9fa;
`;

const FAQContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: white;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: #2c3e50;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 30px 25px;
  color: #7f8c8d;
  line-height: 1.6;
`;

const HowItWorks = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Step = styled(motion.div)`
  text-align: center;
  position: relative;
  background: white;
  padding: 40px 25px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const StepNumber = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 auto 25px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const StepDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 60px 20px 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ecf0f1;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ecf0f1;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #34495e;
  color: #95a5a6;
  font-size: 0.9rem;
  line-height: 1.5;
`;

function Home() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast.error('Please enter a username');
      return;
    }

    const cleanUsername = username.trim()
      .replace('@', '')
      .replace('https://www.instagram.com/', '')
      .replace('https://instagram.com/', '')
      .replace(/\/$/, '');
    
    if (!cleanUsername.match(/^[a-zA-Z0-9._]+$/)) {
      toast.error('Please enter a valid Instagram username');
      return;
    }

    setLoading(true);
    
    try {
      const targetUrl = `https://insta-stories-viewer.com/${cleanUsername}`;
      console.log('Redirecting to:', targetUrl);
      
      // Show success message with countdown
      toast.success(`Opening @${cleanUsername}'s stories... Redirecting in 2 seconds`);
      
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 2000);
      
    } catch (error) {
      console.error('Redirect error:', error);
      toast.error('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const handleExampleClick = (exampleUsername) => {
    setUsername(exampleUsername);
    
    const targetUrl = `https://insta-stories-viewer.com/${exampleUsername}`;
    console.log('Opening example URL:', targetUrl);
    
    toast.success(`Opening @${exampleUsername}'s stories... Redirecting in 2 seconds`);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 2000);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Is it really anonymous?",
      answer: "Yes! When you use our service, the Instagram account owner cannot see that you viewed their stories. Your visit is completely anonymous and private."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account registration is required. Simply enter the Instagram username and start viewing stories anonymously right away."
    },
    {
      question: "Can I download stories?",
      answer: "Yes, you can download both photos and videos from Instagram stories for free. All downloads are processed securely."
    },
    {
      question: "Is this service free?",
      answer: "Yes, our Instagram story viewer is completely free to use. There are no hidden charges or premium features."
    },
    {
      question: "Does it work on mobile?",
      answer: "Absolutely! Our service is fully responsive and works perfectly on all devices including smartphones, tablets, and desktops."
    }
  ];

  const testimonials = [
    {
      text: "This is exactly what I was looking for! Finally I can view stories without anyone knowing. The interface is beautiful and it works perfectly.",
      author: "Sarah M.",
      title: "Social Media Manager"
    },
    {
      text: "Love how simple and clean this site is. No registration needed and it redirects to the actual working service. Brilliant idea!",
      author: "Mike D.",
      title: "Digital Marketer"
    },
    {
      text: "Been using this for months now. The anonymity feature is a game-changer for my research work. Highly recommended!",
      author: "Jessica L.",
      title: "Content Creator"
    }
  ];

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo>
            <FaInstagram />
            InstaStoriesViewer
          </Logo>
          <LanguageSelector>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="de">🇩🇪 Deutsch</option>
          </LanguageSelector>
        </HeaderContent>
      </Header>

      <Hero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Anonymous Instagram Stories Viewer
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            View Instagram stories anonymously without leaving any trace. No registration required, completely free, and works on all devices.
          </HeroSubtitle>
          
          <AdBanner>
            [Advertisement Space - Google AdSense Banner 728x90]
          </AdBanner>
          
          <SearchSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SearchForm onSubmit={handleSubmit}>
              <SearchInput
                type="text"
                placeholder="Enter Instagram username (e.g., cristiano, @kyliejenner)..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />
              <SearchButton
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
                {loading ? 'Loading...' : 'View Stories'}
              </SearchButton>
            </SearchForm>
            
            <ExampleUsers>
              {['mahi7781', 'cristiano', 'priyankachopra', 'bellahadid'].map((user, index) => (
                <ExampleUser
                  key={user}
                  onClick={() => handleExampleClick(user)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  @{user}
                </ExampleUser>
              ))}
            </ExampleUsers>
            
                         <NoticeBox
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
             >
               <NoticeIcon>🔗</NoticeIcon>
               <NoticeText>
                 <strong>How it works:</strong> This beautiful interface connects you to the proven insta-stories-viewer.com service. 
                 When you click "View Stories" or any example username, you'll be redirected to the original Instagram story viewer for anonymous viewing!
                 <br/><br/>
                 <em>✨ Direct access to the trusted insta-stories-viewer.com platform</em>
               </NoticeText>
             </NoticeBox>
          </SearchSection>
        </HeroContent>
      </Hero>

      <Stats>
        <FeaturesContent>
          <FeaturesTitle>Trusted by Millions Worldwide</FeaturesTitle>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <StatNumber>10M+</StatNumber>
              <StatLabel>Stories Viewed</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatNumber>500K+</StatNumber>
              <StatLabel>Happy Users</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatNumber>100%</StatNumber>
              <StatLabel>Anonymous</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatNumber>24/7</StatNumber>
              <StatLabel>Available</StatLabel>
            </StatCard>
          </StatsGrid>
        </FeaturesContent>
      </Stats>

      <Features>
        <FeaturesContent>
          <FeaturesTitle>Why Choose Our Instagram Story Viewer?</FeaturesTitle>
          <FeaturesSubtitle>
            Experience the most advanced and user-friendly Instagram story viewing platform with cutting-edge features.
          </FeaturesSubtitle>
          
          <AdBanner style={{ background: 'rgba(255, 255, 255, 0.8)', color: '#666', border: '2px dashed #ddd' }}>
            [Advertisement Space - Google AdSense Rectangle 336x280]
          </AdBanner>
          
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                <FaEyeSlash />
              </FeatureIcon>
              <FeatureTitle>100% Anonymous Viewing</FeatureTitle>
              <FeatureDescription>
                View Instagram stories without the account owner knowing. Your privacy is completely protected and no traces are left behind.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                <FaShieldAlt />
              </FeatureIcon>
              <FeatureTitle>No Registration Required</FeatureTitle>
              <FeatureDescription>
                Start viewing stories immediately without creating an account. No personal information needed, no email verification, just instant access.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                <FaDownload />
              </FeatureIcon>
              <FeatureTitle>Download Stories & Highlights</FeatureTitle>
              <FeatureDescription>
                Save Instagram stories, photos, and videos to your device. Download in high quality and keep your favorite content forever.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                <FaMobile />
              </FeatureIcon>
              <FeatureTitle>Mobile Optimized</FeatureTitle>
              <FeatureDescription>
                Perfect experience on all devices. Whether you're on desktop, tablet, or mobile, enjoy seamless story viewing anywhere.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                <FaRocket />
              </FeatureIcon>
              <FeatureTitle>Lightning Fast</FeatureTitle>
              <FeatureDescription>
                Advanced technology ensures super-fast loading times. View stories instantly without any delays or buffering issues.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <FeatureIcon>
                <FaTrophy />
              </FeatureIcon>
              <FeatureTitle>Trusted & Reliable</FeatureTitle>
              <FeatureDescription>
                Used by millions worldwide with 99.9% uptime. Our service is trusted, secure, and constantly updated for the best experience.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContent>
      </Features>

      <Testimonials>
        <FeaturesContent>
          <FeaturesTitle style={{ color: 'white', marginBottom: '4rem' }}>What Our Users Say</FeaturesTitle>
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ marginBottom: '15px' }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ color: '#ffd700', marginRight: '5px' }} />
                  ))}
                </div>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>
                    {testimonial.author.charAt(0)}
                  </AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </FeaturesContent>
      </Testimonials>

      <HowItWorks>
        <FeaturesContent>
          <FeaturesTitle style={{ color: '#2c3e50', marginBottom: '4rem' }}>How to View Instagram Stories Anonymously</FeaturesTitle>
          <StepsGrid>
            {[
              {
                number: 1,
                title: "Enter Username",
                description: "Type the Instagram username you want to view stories from. You can use @username or just username format."
              },
              {
                number: 2,
                title: "Click Search",
                description: "Hit the search button and you'll be redirected to our secure viewing platform for anonymous access."
              },
              {
                number: 3,
                title: "View Stories",
                description: "Browse through all available stories, highlights, and profile information completely anonymously."
              },
              {
                number: 4,
                title: "Download Content",
                description: "Save any photos or videos you like directly to your device with our download feature."
              }
            ].map((step, index) => (
              <Step
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Step>
            ))}
          </StepsGrid>
        </FeaturesContent>
      </HowItWorks>

      <FAQ>
        <FAQContent>
          <FeaturesTitle style={{ color: '#2c3e50', marginBottom: '3rem' }}>Frequently Asked Questions</FeaturesTitle>
          
          <AdBanner style={{ background: 'white', color: '#666', border: '2px dashed #ddd', marginBottom: '3rem' }}>
            [Advertisement Space - Google AdSense Banner 728x90]
          </AdBanner>
          
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {expandedFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
              </FAQQuestion>
              {expandedFAQ === index && (
                <FAQAnswer
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </FAQAnswer>
              )}
            </FAQItem>
          ))}
        </FAQContent>
      </FAQ>

      <Footer>
        <FooterContent>
          <FooterGrid>
            <FooterSection>
              <FooterTitle>InstaStoriesViewer</FooterTitle>
              <p style={{ color: '#bdc3c7', lineHeight: '1.6', marginBottom: '20px' }}>
                The most trusted platform for anonymous Instagram story viewing. Join millions of users who choose privacy and convenience.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <FaInstagram style={{ fontSize: '1.5rem', color: '#e1306c' }} />
                <FaHeart style={{ fontSize: '1.5rem', color: '#e74c3c' }} />
                <FaUsers style={{ fontSize: '1.5rem', color: '#3498db' }} />
              </div>
            </FooterSection>
            
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLinks>
                <FooterLink href="#home">Home</FooterLink>
                <FooterLink href="#features">Features</FooterLink>
                <FooterLink href="#how-it-works">How It Works</FooterLink>
                <FooterLink href="#faq">FAQ</FooterLink>
              </FooterLinks>
            </FooterSection>
            
            <FooterSection>
              <FooterTitle>Legal</FooterTitle>
              <FooterLinks>
                <FooterLink href="#privacy">Privacy Policy</FooterLink>
                <FooterLink href="#terms">Terms of Service</FooterLink>
                <FooterLink href="#disclaimer">Disclaimer</FooterLink>
                <FooterLink href="#contact">Contact Us</FooterLink>
              </FooterLinks>
            </FooterSection>
            
            <FooterSection>
              <FooterTitle>Support</FooterTitle>
              <FooterLinks>
                <FooterLink href="#help">Help Center</FooterLink>
                <FooterLink href="#guides">User Guides</FooterLink>
                <FooterLink href="#status">Service Status</FooterLink>
                <FooterLink href="#feedback">Feedback</FooterLink>
              </FooterLinks>
            </FooterSection>
          </FooterGrid>
          
                     <Copyright>
             <div style={{ marginBottom: '15px' }}>
               <AdBanner style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px dashed rgba(255, 255, 255, 0.3)', minHeight: '90px' }}>
                 [Advertisement Space - Google AdSense Footer Banner]
               </AdBanner>
             </div>
             © 2020-2025 InstaStoriesViewer.com - All rights reserved<br/>
             This site provides a beautiful interface that connects to insta-stories-viewer.com for anonymous Instagram viewing.<br/>
             We are not affiliated with Instagram. All trademarks belong to their respective owners.<br/><br/>
             <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #34495e', fontSize: '0.85rem', color: '#7f8c8d' }}>
               Made with ❤️ by <strong style={{ color: '#ecf0f1' }}>Prateek Srivastava</strong>
             </div>
           </Copyright>
        </FooterContent>
      </Footer>
    </Container>
  );
}

export default Home; 