import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      
      <div className="project-description">
        <h1>About Our Movie Project</h1>
        <p>
          Welcome to our movie project website! We're dedicated to creating a platform where movie enthusiasts can discover, explore, and share their favorite films.
        </p>
        <p>
          Our mission is to provide a comprehensive database of movies, allowing users to search for their favorite titles, explore recommendations, and track their watch history.
        </p>
        <p>
          Whether you're a casual moviegoer or a hardcore cinephile, our website has something for everyone. From classic masterpieces to the latest blockbusters, we've got you covered.
        </p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          {/* <img src="member1.jpg" alt="Team Member 1" /> */}
          <h3>John Doe</h3>
          <p>Frontend Developer</p>
        </div>
        <div className="team-member">
          {/* <img src="member2.jpg" alt="Team Member 2" /> */}
          <h3>Jane Smith</h3>
          <p>Backend Developer</p>
        </div>
        <div className="team-member">
          {/* <img src="member3.jpg" alt="Team Member 3" /> */}
          <h3>Robert Brown</h3>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
