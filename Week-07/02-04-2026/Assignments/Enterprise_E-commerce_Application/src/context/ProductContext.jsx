import { createContext, useContext } from 'react';

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const productData = {
    1: {
      id: 1,
      name: "MacBook Pro 16\"",
      price: 2499,
      description: "Powerful 16-inch MacBook Pro with M3 Max chip, stunning Liquid Retina XDR display, and up to 36 hours of battery life. Perfect for professional creators, developers, and power users.",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "Laptops",
      specs: {
        "Processor": "Apple M3 Max",
        "Memory": "32GB unified memory",
        "Storage": "1TB SSD",
        "Display": "16.2-inch Liquid Retina XDR",
        "Battery": "Up to 22 hours",
        "Weight": "4.7 pounds"
      },
      reviews: [
        { user: "TechReviewer", rating: 5, comment: "Incredible performance and build quality!" },
        { user: "DesignerPro", rating: 5, comment: "Perfect for creative work and video editing." }
      ]
    },
    2: {
      id: 2,
      name: "iPhone 15 Pro",
      price: 1199,
      description: "The most advanced iPhone yet with A17 Pro chip, titanium design, and professional camera system. Capture stunning photos and videos with Pro camera controls.",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "Smartphones",
      specs: {
        "Processor": "A17 Pro chip",
        "Storage": "256GB",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
        "Battery": "Up to 23 hours video playback",
        "Material": "Titanium"
      },
      reviews: [
        { user: "MobileFan", rating: 5, comment: "Best iPhone ever! Camera is incredible." },
        { user: "TechGuru", rating: 4, comment: "Great performance, but expensive." }
      ]
    },
    3: {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 399,
      description: "Industry-leading noise canceling wireless headphones with premium sound quality, 30-hour battery life, and crystal clear hands-free calling.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop&crop=center",
      category: "Audio",
      specs: {
        "Driver": "30mm",
        "Frequency Response": "4Hz-40kHz",
        "Battery Life": "30 hours",
        "Charging": "USB-C, 3 min = 3 hours",
        "Weight": "250g",
        "Connectivity": "Bluetooth 5.2"
      },
      reviews: [
        { user: "AudioPhile", rating: 5, comment: "Best noise canceling I've experienced!" },
        { user: "Traveler", rating: 5, comment: "Perfect for long flights." }
      ]
    },
    4: {
      id: 4,
      name: "iPad Pro 12.9\"",
      price: 1099,
      description: "The ultimate iPad experience with M2 chip, Liquid Retina XDR display, and Apple Pencil Pro. Perfect for creators, professionals, and students.",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop&crop=center",
      category: "Tablets",
      specs: {
        "Processor": "Apple M2",
        "Display": "12.9-inch Liquid Retina XDR",
        "Storage": "256GB",
        "Camera": "12MP Wide, 10MP Ultra Wide",
        "Battery": "Up to 10 hours",
        "Weight": "1.4 pounds"
      },
      reviews: [
        { user: "Artist", rating: 5, comment: "Amazing for digital art and design work." },
        { user: "Student", rating: 4, comment: "Great for note-taking and productivity." }
      ]
    },
    5: {
      id: 5,
      name: "Apple Watch Ultra",
      price: 799,
      description: "The most rugged and capable Apple Watch ever, designed for exploration, adventure, and extreme sports with advanced health and safety features.",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&h=400&fit=crop&crop=center",
      category: "Wearables",
      specs: {
        "Display": "Always-On Retina",
        "Water Resistance": "100m",
        "Battery": "Up to 36 hours",
        "GPS": "GPS + Cellular",
        "Health": "ECG, Blood Oxygen, Heart Rate",
        "Materials": "Titanium case, Sapphire crystal"
      },
      reviews: [
        { user: "Athlete", rating: 5, comment: "Perfect for tracking workouts and health metrics." },
        { user: "OutdoorEnthusiast", rating: 5, comment: "Rugged and reliable for any adventure." }
      ]
    },
    6: {
      id: 6,
      name: "Nintendo Switch OLED",
      price: 349,
      description: "Enhanced Nintendo Switch with vibrant 7-inch OLED screen, 64GB internal storage, and all the games you love in a sleek new design.",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop&crop=center",
      category: "Gaming",
      specs: {
        "Display": "7-inch OLED screen",
        "Storage": "64GB internal",
        "Battery": "Up to 9 hours",
        "Weight": "0.93 pounds",
        "Resolution": "1280 x 720",
        "Audio": "Stereo speakers"
      },
      reviews: [
        { user: "GamerKid", rating: 5, comment: "Love the OLED screen! Games look amazing." },
        { user: "CasualGamer", rating: 4, comment: "Great upgrade from original Switch." }
      ]
    },
    7: {
      id: 7,
      name: "Canon EOS R5",
      price: 3899,
      description: "Professional full-frame mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system for photographers and videographers.",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop&crop=center",
      category: "Cameras",
      specs: {
        "Sensor": "45MP Full-frame CMOS",
        "Video": "8K RAW, 4K 120p",
        "ISO": "100-51200 (expandable to 102400)",
        "Autofocus": "5940 AF points",
        "Battery": "Up to 320 shots",
        "Weight": "1.62 pounds (body only)"
      },
      reviews: [
        { user: "ProPhotographer", rating: 5, comment: "Incredible image quality and video capabilities!" },
        { user: "Videographer", rating: 5, comment: "Perfect for professional video production." }
      ]
    },
    8: {
      id: 8,
      name: "AirPods Pro (2nd Gen)",
      price: 249,
      description: "Wireless earbuds with Active Noise Cancellation, Transparency mode, and spatial audio. Up to 6 hours of listening time with wireless charging case.",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c4b686?w=600&h=400&fit=crop&crop=center",
      category: "Audio",
      specs: {
        "Driver": "Custom high-excursion Apple driver",
        "Chip": "H2 chip",
        "Battery": "Up to 6 hours listening time",
        "Case Battery": "Up to 30 hours total",
        "Water Resistance": "IPX4",
        "Connectivity": "Bluetooth 5.3"
      },
      reviews: [
        { user: "MusicLover", rating: 5, comment: "Amazing sound quality and noise cancellation!" },
        { user: "Commuter", rating: 4, comment: "Great for daily use and workouts." }
      ]
    },
    9: {
      id: 9,
      name: "Samsung Galaxy Z Fold5",
      price: 1799,
      description: "Next-gen foldable phone with large tablet screen and premium build quality. Great for multitasking and mobile productivity.",
      image: "https://images.unsplash.com/photo-1565372911653-7e21d74f0d8c?w=600&h=400&fit=crop&crop=center",
      category: "Smartphones",
      specs: {
        "Display": "7.6-inch Foldable Dynamic AMOLED",
        "Processor": "Snapdragon 8 Gen 2",
        "Storage": "512GB",
        "Battery": "4400 mAh",
        "Camera": "50MP + 12MP + 10MP",
        "OS": "Android 14"
      },
      reviews: [
        { user: "FoldFan", rating: 5, comment: "Incredible multitasking experience." },
        { user: "TechInsider", rating: 4, comment: "Great technology but pricey." }
      ]
    },
    10: {
      id: 10,
      name: "Dyson V15 Detect",
      price: 699,
      description: "High-end cordless vacuum with laser dust detection and powerful suction. Perfect for premium home cleaning.",
      image: "https://images.unsplash.com/photo-1597047270010-146b1de7ebff?w=600&h=400&fit=crop&crop=center",
      category: "Home Appliances",
      specs: {
        "Power": "230 AW",
        "Run Time": "Up to 60 mins",
        "Dust Capacity": "0.76L",
        "Weight": "6.8 lbs",
        "Filtration": "Whole machine HEPA",
        "Charge Time": "4.5 hours"
      },
      reviews: [
        { user: "CleanPro", rating: 5, comment: "Excellent for pet hair and fine dust." },
        { user: "HomeHero", rating: 5, comment: "Best suction in its class." }
      ]
    },
    11: {
      id: 11,
      name: "Sony A7 IV",
      price: 2499,
      description: "Full-frame mirrorless camera for hybrid creators, with 4K 60p, autofocus tracking, and robust build.",
      image: "https://images.unsplash.com/photo-1548095115-45697b27a695?w=600&h=400&fit=crop&crop=center",
      category: "Cameras",
      specs: {
        "Sensor": "33MP Full-frame",
        "Video": "4K 60p",
        "ISO": "100-51200",
        "AF Points": "759 phase-detection",
        "Stabilization": "5-axis in-body",
        "Battery": "610 shots"
      },
      reviews: [
        { user: "PhotoMaster", rating: 5, comment: "Great hybrid photo+video performance." },
        { user: "Videomaker", rating: 4, comment: "Excellent image quality." }
      ]
    },
    12: {
      id: 12,
      name: "Nintendo Switch OLED Bundle",
      price: 399,
      description: "Special edition bundle with extra Joy-Cons and Adventure game package.",
      image: "https://images.unsplash.com/photo-1671504110368-fe34d30d69b6?w=600&h=400&fit=crop&crop=center",
      category: "Gaming",
      specs: {
        "Display": "7-inch OLED",
        "Storage": "64GB",
        "Battery": "4.5-9 hrs",
        "Includes": "Extra Joy-Cons + game",
        "Connectivity": "Wi-Fi/Bluetooth",
        "Weight": "0.93 lbs"
      },
      reviews: [
        { user: "ConsoleKing", rating: 5, comment: "Perfect bundle for holiday gift." },
        { user: "FamilyGamer", rating: 5, comment: "Great value and quality." }
      ]
    }
  };

  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
};