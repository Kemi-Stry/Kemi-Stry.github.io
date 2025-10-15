const container = document.querySelector('.particles');

for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${20 + Math.random() * 30}s`;
  particle.style.animationDelay = `${Math.random() * 10}s`;

  const core = document.createElement('div');
  core.className = 'core';
  core.style.animationDuration = `${3 + Math.random() * 3}s`;
  core.style.animationDelay = `${Math.random() * 2}s`;

  particle.appendChild(core);
  container.appendChild(particle);
}
