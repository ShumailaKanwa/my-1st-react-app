import React from 'react';
import Card from './Card';

// Image paths
// Correct Image paths
const wordpressImage = process.env.PUBLIC_URL + "/images/wordpress.png";
const fullStackImage = process.env.PUBLIC_URL + "/images/full-stack-development.png";
const seoImage = process.env.PUBLIC_URL + "/images/seo.png";

function App() {
  return (
    <div className="App">
      <h1>My Development Courses</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card
          title="WordPress Development"
          description="Build dynamic and responsive websites easily. Master WordPress customization."
          imageUrl={wordpressImage}
          facebook="https://facebook.com"
          twitter="https://twitter.com"
          instagram="https://instagram.com"
        />
        <Card
          title="Full Stack Development"
          description="Master full-stack web development with hands-on projects."
          imageUrl={fullStackImage}
          facebook="https://facebook.com"
          twitter="https://twitter.com"
          instagram="https://instagram.com"
        />
        <Card
          title="SEO Course"
          description="Optimize websites for search engines with our comprehensive SEO course."
          imageUrl={seoImage}
          facebook="https://facebook.com"
          twitter="https://twitter.com"
          instagram="https://instagram.com"
        />
      </div>
    </div>
  );
}

export default App;
