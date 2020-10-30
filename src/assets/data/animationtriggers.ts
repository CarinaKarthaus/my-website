// Default states for animation states, offsets & triggers

  let animationState = {
    'about_header': 'out',
    'about_labels': 'out',
    'about_skills': 'out',
    'portfolio_header': 'out',
    'portfolio_filter': 'out',
    'portfolio': 'out',
    'contact_header': 'out',
    'contact_dialog': 'out',
    'footer': 'out'
  };

  let elementOffsetTop = {
    home: 1000,
    about_header: 1050,
    about_labels: 1100,
    about_skills: 1200,
    portfolio_header: 1800,
    portfolio_filter: 2000,
    portfolio: 2100,
    contact_header: 2700,
    contact_dialog: 2800,
    footer: 3500,
  };

  let animTriggerPosition = {
    home: 1000,
    about_header: 1050,
    about_labels: 1100,
    about_skills: 1200,
    portfolio_header: 1800,
    portfolio_filter: 2000,
    portfolio: 2100,
    contact_header: 2700,
    contact_dialog: 2800,
    footer: 3000,
  }

  let currentSection = {
    homeSection: true,
    aboutSection: false,
    portfolioSection: false,
    contactSection: false,
  };

  export {animationState, elementOffsetTop, animTriggerPosition, currentSection};

