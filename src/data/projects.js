export const projects = [
  {
    id: 'dehazing',
    title: 'AI Image Dehazing',
    tagline: 'Remove haze from images using deep learning',
    tech: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Streamlit'],
    research: {
      paperTitle: 'Does Channel Attention Help a U‑Net for Single‑Image Dehazing? A Controlled Comparison on RESIDE‑6K',
      architecture: 'Baseline U‑Net (4‑level encoder‑decoder) vs. CA‑U‑Net (U‑Net + Squeeze‑and‑Excitation blocks). Both use 64‑128‑256‑512‑1024 channels, double‑conv blocks, skip connections, and a final 1×1 sigmoid output.',
      dataset: 'RESIDE‑6K (6 000 paired hazy/clear images; 5 400 train, 600 val, 1 000 test). Images resized to 400×400, training patches 256×256 with flips.',
      results: [
        { model: 'Baseline U‑Net', params: '31.04 M', psnr: '25.533 dB', ssim: '0.9450' },
        { model: 'CA‑U‑Net', params: '31.26 M', psnr: '25.657 dB', ssim: '0.9435' }
      ],
      paperUrl: null
    },
    implementation: {
      repo: 'https://github.com/supreeth-gunnala/image-dehazing-project',
      description: 'Implementation based on AOD‑Net and an Enhanced DehazeNet with multi‑scale feature extraction and SE attention. Includes a Streamlit interface for uploading images, selecting model, side‑by‑side comparison, and downloading results.'
    }
  },
  {
    id: 'movie-booking',
    title: 'Movie Ticket Booking System',
    tagline: 'Book movies online with an interactive seat‑map',
    tech: ['Python', 'Django', 'SQLite/PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    description: 'A full‑stack Django web app that provides user registration, movie listings with posters, ratings, genres and languages, searchable catalog, YouTube trailer playback, a 10×10 interactive seat‑selection UI, booking creation & cancellation, booking history, and an admin panel for managing movies and bookings.',
    repo: 'https://github.com/supreeth-gunnala/bookmyshow-clone',
    future: [
      'Integrate a payment gateway (e.g., Stripe).',
      'Add email booking confirmations.'
    ]
  },
  {
    id: 'git-explorer',
    title: 'Git Explorer v2 – GitHub Profile Explorer',
    tagline: 'Dashboard to explore and compare GitHub developer profiles',
    tech: ['React 18', 'Chart.js', 'GitHub REST API', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'A single‑page React app that lets users search GitHub usernames, view profile information (avatar, bio, followers, following, repo count), explore repositories with language filters and sorting, visualize language distribution and star counts with Chart.js, see recent public activity, browse follower/following lists, bookmark favourite profiles, and compare two developers side‑by‑side. Includes dark/light theme switching and responsive layout.',
    repo: 'https://github.com/supreeth-gunnala/24BCE2246_L1_MP_G_Supreeth_Reddy',
    deployment: null
  }
];
