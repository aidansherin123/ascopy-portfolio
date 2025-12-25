import React, { useState } from 'react';
import { Mail, Calendar, TrendingUp, Zap, ChevronDown, Instagram } from 'lucide-react';

export default function EmailCopywriterPortfolio() {
  const [selectedSample, setSelectedSample] = useState(0);
  const [showFullEmail, setShowFullEmail] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState('All');

  // Load Calendly popup widget script
  React.useEffect(() => {
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Add Calendly styles
    const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

const portfolioSamples = [
    // URBAN THREAD CO. - Clothing
    {
      brand: "Urban Thread Co.",
      type: "Welcome Series - Email 1",
      subject: "Your style deserves better than fast fashion",
      preview: "Thanks for joining. Here's why most brands get sustainable fashion wrong...",
      industry: "Clothing",
      channel: "Email",
      fullEmail: `Hi there,

Thanks for subscribing to Urban Thread Co.

Let me be straight with you: "sustainable fashion" has become meaningless.

Every brand claims it. Few actually deliver.

Here's what we do differently:

→ Full supply chain transparency (you can trace every piece)
→ Living wages for everyone who makes your clothes
→ Materials that last years, not seasons

Most brands prioritize profit. We prioritize people and planet—then make a profit.

Your first order gets 15% off with code: THREAD15

Browse the collection here: [link]

Talk soon,
The Urban Thread Team

P.S. Hit reply if you have questions. A real human (me) reads these.`
    },
    {
      brand: "Urban Thread Co.",
      type: "Instagram Ad - Carousel",
      subject: "Slide 1: Your hoodie shouldn't cost the planet",
      preview: "Slide 2: Ours lasts 5+ years... Slide 3: Made by people paid fairly...",
      industry: "Clothing",
      channel: "Ads",
      fullEmail: `SLIDE 1:
Your hoodie shouldn't cost the planet
[Image: Close-up of organic cotton texture]

SLIDE 2:
Ours lasts 5+ years, not 5 washes
[Image: Side-by-side durability test]

SLIDE 3:
Made by people paid fairly, not exploited
[Image: Artisan at work, smiling]

SLIDE 4:
Track every step from cotton to closet
[Image: QR code on clothing tag]

SLIDE 5:
Join 10,000+ people choosing better
[CTA Button: Shop Sustainable]

Caption:
Fast fashion broke the industry. We're fixing it—one piece at a time. ♻️

Every Urban Thread piece comes with full supply chain transparency. You'll know exactly who made your clothes and how much they were paid.

15% off your first order → Link in bio

#SustainableFashion #EthicalClothing #SlowFashion`
    },
    {
      brand: "Urban Thread Co.",
      type: "Abandoned Cart - SMS",
      subject: "N/A (SMS)",
      preview: "Hey! You left something in your cart. The Organic Cotton Hoodie in Forest Green is still waiting...",
      industry: "Clothing",
      channel: "SMS",
      fullEmail: `Hey! You left something in your cart 🌿

The Organic Cotton Hoodie in Forest Green is still waiting for you.

Quick heads up: This color tends to sell out fast (we only make limited batches to reduce waste).

Complete your order in the next 2 hours and get free shipping with code: COMPLETE

👉 Finish checkout: [link]

Questions? Just reply to this text.

- The Urban Thread Team`
    },
    
    // RADIANT BEAUTY LAB - Beauty
    {
      brand: "Radiant Beauty Lab",
      type: "Post-Purchase Flow - Email 2",
      subject: "Day 3: Here's what your skin is doing right now",
      preview: "Your serum arrived 3 days ago. Here's the science happening beneath the surface...",
      industry: "Beauty",
      channel: "Email",
      fullEmail: `Hey [Name],

It's been 3 days since your Vitamin C serum arrived.

Your skin is doing something incredible right now—even if you can't see it yet.

Here's what's happening beneath the surface:

DAYS 1-7: Your skin is adjusting
→ Increased cell turnover begins
→ Old, damaged cells start shedding
→ Fresh skin prepares to surface

DAYS 8-21: Visible changes emerge
→ Pigmentation starts evening out
→ Fine lines appear softer
→ That glow? It's real collagen production

DAYS 22-30: Full transformation
→ Texture visibly smoother
→ Radiance that lasts all day
→ Your skin barrier is stronger

Most people quit at day 5 because they don't see instant results.

Don't be most people.

Keep going. Your skin is thanking you already.

Next week, I'll send you advanced tips to maximize your results.

Glowing forward,
Dr. Sarah @ Radiant Beauty Lab

P.S. Take a photo today. You'll want to compare it in 3 weeks.`
    },
    {
      brand: "Radiant Beauty Lab",
      type: "Facebook Ad - Video",
      subject: "Why your $200 serum isn't working",
      preview: "Hook: Dermatologist reveals... Body: The problem isn't your skin...",
      industry: "Beauty",
      channel: "Ads",
      fullEmail: `VIDEO SCRIPT (30 seconds):

[0-3s] HOOK - On screen text:
"Why your $200 serum isn't working"
[Dermatologist in lab coat]

[4-10s] PROBLEM:
"The problem isn't your skin. It's the order you're applying products.

Most serums never penetrate because you're blocking them with heavy moisturizer first."

[11-20s] SOLUTION:
"Our Vitamin C serum uses micro-encapsulation technology. It penetrates deeper, works faster, and actually shows results in 14 days—not months."

[21-27s] PROOF:
[Before/After photos appear]
"Real results from real customers."

[28-30s] CTA:
"Try it risk-free for 60 days"
[Button: Shop Now]

CAPTION:
Most expensive serums fail because of user error, not formulation ❌

Our Vitamin C serum is designed to work even if you mess up the order (but we'll teach you the right way too 😉)

✅ Micro-encapsulated for deeper penetration
✅ Visible results in 14 days
✅ 60-day money-back guarantee

Tap to upgrade your skincare routine 👆

#Skincare #VitaminC #GlowingSkin #Dermatologist`
    },
    {
      brand: "Radiant Beauty Lab",
      type: "Restocking Alert - SMS",
      subject: "N/A (SMS)",
      preview: "🚨 IT'S BACK! Vitamin C Serum just restocked...",
      industry: "Beauty",
      channel: "SMS",
      fullEmail: `🚨 IT'S BACK!

Vitamin C Serum just restocked (sold out in 6 hours last time)

You're on the VIP list, so you get first access for the next 4 hours before we announce to everyone else.

⚡ Shop now: [link]

Not ready? Reply PAUSE to skip restocks for 30 days.

- Radiant Beauty Lab`
    },
    
    // APEX PERFORMANCE - Fitness
    {
      brand: "Apex Performance",
      type: "Educational Nurture - Email 4",
      subject: "Why your plateau isn't your fault",
      preview: "Hit a wall in your training? This is what's actually holding you back...",
      industry: "Fitness",
      channel: "Email",
      fullEmail: `[Name],

You've been consistent. You're putting in the work.

But your progress has stalled.

Before you blame yourself, read this:

Your plateau isn't about effort—it's about programming.

Here's what's actually happening:

→ Your body adapted to your routine (this is normal)
→ You're training the same muscle fibers on repeat
→ Your CNS needs variability to keep growing

The fix? Progressive overload with intentional variation.

This week, try this:
• Change your rep tempo (3 seconds down, 1 second up)
• Swap one exercise for its unilateral version
• Add a 10% increase to one compound lift

Small changes = big stimulus.

Want a customized program that automatically adjusts? Our coaches build that for you.

Book a free consultation: [link]

Keep pushing,
Coach Mike @ Apex Performance`
    },
    {
      brand: "Apex Performance",
      type: "Google Search Ad",
      subject: "Headline: Finally Break Your Plateau",
      preview: "Ad copy: Stalled progress? Our coaches create custom programs that adapt as you grow...",
      industry: "Fitness",
      channel: "Ads",
      fullEmail: `HEADLINE 1: Finally Break Your Plateau
HEADLINE 2: Custom Training Programs
HEADLINE 3: Real Coaches, Real Results

DESCRIPTION 1:
Stalled progress? Our coaches create custom programs that adapt as you grow. No more guessing—just results.

DESCRIPTION 2:
Progressive overload done right. Get a free assessment and personalized plan. Start seeing gains again in 2 weeks.

DISPLAY URL: apexperformance.com/coaching

FINAL URL: apexperformance.com/free-consultation?utm_source=google&utm_campaign=plateau

KEYWORDS:
- plateau in gym
- why am i not gaining muscle
- stuck at same weight
- custom training program
- online personal trainer

AD EXTENSIONS:
→ Free Consultation
→ Custom Programs
→ Progress Tracking
→ Expert Coaches`
    },
    {
      brand: "Apex Performance",
      type: "Workout Reminder - SMS",
      subject: "N/A (SMS)",
      preview: "Leg day in 2 hours 🦵 Your program is loaded and ready...",
      industry: "Fitness",
      channel: "SMS",
      fullEmail: `Leg day in 2 hours 🦵

Your program is loaded and ready in the app:
• Back Squats: 4x6 @ 225lbs
• Romanian Deadlifts: 3x8
• Bulgarian Split Squats: 3x10 each

Coach's note: Focus on tempo today. Control the eccentric.

💪 Open app: [link]

Reply DONE after your session to log it.

- Coach Mike`
    },
    
    // AUTHORITY ACADEMY - Info Product
    {
      brand: "Authority Academy",
      type: "Launch Sequence - Email 3",
      subject: "Why nobody reads your content (and how to fix it)",
      preview: "You're publishing 3x per week. Spending hours on each post...",
      industry: "Info Brand",
      channel: "Email",
      fullEmail: `You're publishing 3x per week.

Spending hours on each post.

But Google isn't ranking you. And you're wondering what you're doing wrong.

Here's the truth: your content probably doesn't suck.

Your distribution does.

Everyone focuses on SEO. Almost nobody focuses on this:

**Topical Authority**

Google doesn't rank individual posts anymore. It ranks entire websites based on expertise in a specific niche.

If you're writing about marketing, personal finance, AND fitness... Google doesn't trust you on any of them.

The fix?

1. Pick ONE topic
2. Cover it comprehensively (50+ articles)
3. Build internal link clusters
4. Establish yourself as THE authority

That's what we teach in Authority Academy.

Our students go from "page 5 of Google" to "first page results" in 90 days.

Not by writing more. By writing strategically.

Doors open tomorrow for 48 hours.

Get on the waitlist here: [link]

See you on page one,
Alex @ Authority Academy`
    },
    {
      brand: "Authority Academy",
      type: "YouTube Pre-Roll Ad",
      subject: "15-second Ad: Stop wasting time on content nobody sees",
      preview: "Hook: Publishing 3x per week but no traffic?... Solution: Authority Academy...",
      industry: "Info Brand",
      channel: "Ads",
      fullEmail: `15-SECOND VERSION:

[0-3s] HOOK:
"Publishing 3x per week but no traffic?"
[Person frustrated at laptop]

[4-10s] PROBLEM + SOLUTION:
"The problem isn't your content—it's your strategy. Authority Academy teaches you how to rank on Google in 90 days using topical authority."

[11-15s] CTA:
"Free masterclass starting now →"
[Link appears]

---

30-SECOND VERSION:

[0-5s] HOOK:
"I spent 6 months writing content. Zero traffic. Then I learned this..."
[Creator at desk with analytics showing 0]

[6-15s] PROBLEM:
"Google doesn't rank individual posts anymore. It ranks websites with topical authority.

If you're writing about 5 different topics, you're confusing Google."

[16-25s] SOLUTION:
"Authority Academy taught me to focus on ONE niche, build 50+ interconnected articles, and rank in 90 days."

[26-30s] CTA:
"Free masterclass shows you how. Click below."
[CTA Button: Watch Free Training]

TARGETING:
- Content creators
- Bloggers
- Online course creators
- Interests: SEO, content marketing, passive income`
    },
    {
      brand: "Authority Academy",
      type: "Webinar Reminder - SMS",
      subject: "N/A (SMS)",
      preview: "🔴 LIVE in 30 minutes! Your Authority Academy masterclass starts soon...",
      industry: "Info Brand",
      channel: "SMS",
      fullEmail: `🔴 LIVE in 30 minutes!

Your Authority Academy masterclass starts soon.

What you'll learn:
→ Why your content isn't ranking
→ The topical authority framework
→ Case study: 0 to 10K/month in 90 days

Join here: [link]

Can't make it live? Register anyway—replay available for 48hrs only.

See you there!
Alex

Reply STOP to unsubscribe from event reminders`
    }
  ];

  const services = [
    {
      title: "Welcome Sequences",
      description: "Turn new subscribers into customers with educational flows that build trust and drive first purchases",
      icon: Mail
    },
    {
      title: "Retention Campaigns",
      description: "Increase customer lifetime value through strategic post-purchase sequences and replenishment reminders",
      icon: TrendingUp
    },
    {
      title: "Automated Flows",
      description: "Test-driven email systems that continuously improve—we split-test variations with segments of your list to find what converts, then scale the winners",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-[#051f20] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #051f20;
        }
        
        .baskerville {
          font-family: 'Lato', sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(142, 182, 155, 0.2);
        }
        
        .sample-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .sample-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(142, 182, 155, 0.3);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8eb69b 0%, #b8d4c4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .accent-border {
          position: relative;
        }
        
        .accent-border::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #8eb69b, transparent);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#051f20]/95 backdrop-blur-md z-50 border-b border-[#8eb69b]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold baskerville text-[#8eb69b]">A.S. Copy</div>
          <button 
            onClick={() => document.getElementById('calendly').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#8eb69b] text-[#051f20] px-6 py-2.5 rounded-md hover:bg-[#a5c9b1] transition-colors font-medium text-sm"
          >
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#5a8a70]/20 text-[#97c4a8] px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fadeInUp border border-[#5a8a70]/40">
                Automated Systems • Strategic Copy • Real Results
              </div>
              <h1 className="text-5xl md:text-6xl font-bold baskerville mb-6 leading-tight animate-fadeInUp stagger-1 text-[#8eb69b]">
                Education that converts. <span className="gradient-text">Sequences that sell.</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed animate-fadeInUp stagger-2">
                I build automated <span className="gradient-text font-semibold">EMAIL</span>, <span className="gradient-text font-semibold">SMS</span>, and <span className="gradient-text font-semibold">AD</span> systems that educate your customers, drive repeat purchases, and increase lifetime value—without the generic marketing noise everyone else uses.
              </p>
              <div className="flex gap-4 animate-fadeInUp stagger-3">
                <button 
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#5a8a70] text-white px-8 py-3.5 rounded-md hover:bg-[#6b9d7a] transition-colors font-medium"
                >
                  View Samples
                </button>
                <button 
                  onClick={() => document.getElementById('calendly').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-[#8eb69b] text-[#8eb69b] px-8 py-3.5 rounded-md hover:bg-[#8eb69b]/10 transition-colors font-medium flex items-center gap-2"
                >
                  <Calendar size={18} />
                  Schedule Call
                </button>
              </div>
            </div>
            
            <div className="relative animate-fadeInUp stagger-4">
              <div className="bg-[#1a4f52] rounded-lg shadow-2xl p-8 border border-[#5a8a70]/30">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a8a70]/30 flex items-center justify-center flex-shrink-0 border border-[#5a8a70]/40">
                    <Mail size={20} className="text-[#97c4a8]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 mb-1">Welcome Series - Email 1</div>
                    <div className="font-semibold mb-2 text-white">Most brands get email wrong from day one</div>
                  </div>
                </div>
                <div className="text-sm text-white/70 leading-relaxed space-y-3 border-t border-[#5a8a70]/30 pt-4">
                  <p>Thanks for subscribing. Here's the truth most copywriters won't tell you:</p>
                  <p>Most of your email subscribers will never buy. Not because your product is bad—but because your emails sound like everyone else's.</p>
                  <p className="text-[#97c4a8] font-medium">I fix that. Let me show you how...</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#5a8a70]/30 flex justify-between text-xs text-white/60">
                  <span>A.S. Copy</span>
                  <span>Welcome Flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0d3d3f] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold baskerville mb-4 accent-border inline-block text-[#8eb69b]">What I Do</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mt-8">
              I specialize in email, ad, and SMS marketing copy that bridges the gap between product awareness and purchase intent
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#1a4f52] p-8 rounded-lg card-hover border border-[#5a8a70]/30">
                <div className="w-12 h-12 bg-[#5a8a70]/30 rounded-lg flex items-center justify-center mb-6 border border-[#5a8a70]/40">
                  <service.icon size={24} className="text-[#97c4a8]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 baskerville text-[#97c4a8]">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-[#051f20]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold baskerville mb-4 accent-border inline-block text-[#8eb69b]">Sample Work</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mt-8 mb-8">
              See my approach in action
            </p>
            
            {/* Channel Filter Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              {['All', 'Email', 'SMS', 'Ads'].map((channel) => (
                <button
                  key={channel}
                  onClick={() => {
                    setSelectedChannel(channel);
                    setSelectedSample(0);
                    setShowFullEmail(false);
                  }}
                  className={`px-6 py-2.5 rounded-md font-semibold transition-all ${
                    selectedChannel === channel
                      ? 'bg-[#8eb69b] text-[#051f20] shadow-lg'
                      : 'bg-[#0d3d3f] text-white/70 hover:text-white border border-[#5a8a70]/30 hover:border-[#5a8a70]/50'
                  }`}
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {portfolioSamples.filter(sample => selectedChannel === 'All' || sample.channel === selectedChannel).map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedSample(idx);
                  setShowFullEmail(false);
                }}
                className={`p-4 rounded-lg border-2 transition-all text-left sample-hover ${
                  selectedSample === idx 
                    ? 'border-[#5a8a70] bg-[#1a4f52] shadow-lg' 
                    : 'border-[#5a8a70]/20 bg-[#0d3d3f] hover:border-[#5a8a70]/40'
                }`}
              >
                <div className="text-xs text-white/60 mb-1">{sample.industry}</div>
                <div className="font-semibold text-sm text-white">{sample.brand}</div>
              </button>
            ))}
          </div>

          <div className="bg-[#1a4f52] rounded-lg shadow-xl p-8 md:p-12 border border-[#5a8a70]/30">
            <div className="mb-6">
              <div className="inline-block bg-[#5a8a70]/30 text-[#97c4a8] px-3 py-1 rounded-full text-xs font-medium mb-3 border border-[#5a8a70]/40">
                {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.type}
              </div>
              <h3 className="text-2xl font-bold baskerville mb-2 text-[#97c4a8]">
                {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.channel} | {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.brand}
              </h3>
            </div>
            
            <div className="border-l-4 border-[#5a8a70] pl-6 mb-6">
              <div className="text-sm text-white/60 mb-2">Subject Line</div>
              <div className="text-xl font-semibold mb-4 text-white">
                {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.subject}
              </div>
              <div className="text-sm text-white/60 mb-2">Preview Text</div>
              <div className="text-white/80 leading-relaxed mb-6">
                {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.preview}
              </div>
              
              {/* Click to read button */}
              <button
                onClick={() => setShowFullEmail(!showFullEmail)}
                className="text-[#97c4a8] hover:text-[#8eb69b] transition-colors font-medium text-sm flex items-center gap-2"
              >
                {showFullEmail ? '− Hide full' : '+ Click to read full'}
              </button>
            </div>

            {/* Full email content */}
            {showFullEmail && (
              <div className="bg-[#0d3d3f] p-6 rounded-lg border border-[#5a8a70]/30 mb-6">
                <div className="text-xs text-[#97c4a8] uppercase tracking-wider mb-3">Full {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.channel}</div>
                <div className="text-white/80 leading-relaxed whitespace-pre-line font-mono text-sm">
                  {portfolioSamples.filter(s => selectedChannel === 'All' || s.channel === selectedChannel)[selectedSample]?.fullEmail}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0d3d3f] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold baskerville mb-6 accent-border inline-block text-[#8eb69b]">
              I'm not your typical copywriter
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Most copywriters write emails. I build systems that turn subscribers into customers and customers into repeat buyers.
              </p>
              <p>
                My specialty? DTC brands in wellness, beauty, and functional beverages that want to educate their audience—not just blast promotions. I write sequences that feel like value, not spam.
              </p>
              <p className="text-white font-medium">
                If you're tired of emails that sound like every other brand in your inbox, we should talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="py-20 bg-[#051f20] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold baskerville mb-6 text-[#8eb69b]">Let's Talk About Your Email Strategy</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Book a 30-minute strategy call to discuss your current email flows and how we can increase your customer lifetime value
          </p>
          
          <div className="bg-[#1a4f52] rounded-lg shadow-xl p-12 border border-[#5a8a70]/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar size={32} className="text-[#97c4a8]" />
              <div className="text-2xl font-semibold baskerville text-[#97c4a8]">Schedule Your Call</div>
            </div>
            <p className="text-white/60 text-sm mb-8 text-center">
              Click below to pick a time that works for you
            </p>
            
            {/* Calendly Button */}
            <div className="flex flex-col items-center gap-6 py-12">
              <a
                href="https://calendly.com/aidansherin123/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (window.Calendly) {
                    e.preventDefault();
                    window.Calendly.initPopupWidget({ url: 'https://calendly.com/aidansherin123/30min' });
                  }
                }}
                className="bg-[#8eb69b] text-[#051f20] px-16 py-6 rounded-lg hover:bg-[#a5c9b1] transition-all font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transform inline-block border-2 border-white"
              >
                Booking Calendar
              </a>
              <p className="text-white/50 text-sm">
                Opens in a popup window
              </p>
            </div>
            
            <div className="mt-4 text-sm text-white/60 text-center">
              <p>No pitch, no pressure. Just a conversation about whether we're a good fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3d3f] text-white/70 py-12 px-6 border-t border-[#5a8a70]/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold baskerville text-[#8eb69b]">A.S. Copy</span>
                <span className="text-[#5a8a70]">•</span>
                <span className="text-sm text-white/80 leading-tight">Education that converts. Sequences that sell.</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#97c4a8] mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:aidansherin123@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-[#97c4a8] transition-colors group"
                >
                  <Mail size={20} className="text-[#97c4a8] group-hover:scale-110 transition-transform" />
                  <span>aidansherin123@gmail.com</span>
                </a>
                <a 
                  href="https://www.instagram.com/aidansherin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-[#97c4a8] transition-colors group"
                >
                  <Instagram size={20} className="text-[#97c4a8] group-hover:scale-110 transition-transform" />
                  <span>@aidansherin</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#5a8a70]/30 pt-8 text-center text-sm">
            <p>© 2024 A.S. Copy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}