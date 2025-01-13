<script setup lang="ts">
const socialLinks = [
  { icon: '🐱', name: 'GitHub', url: '#' },
  { icon: '📺', name: 'Bilibili', url: '#' },
  { icon: '💬', name: 'QQ', url: '#' }
]
</script>

<template>
  <section class="contact glass">
    <h2>Contact Me</h2>
    <div class="contact-info">
      <p>Let's build something amazing together!</p>
      <div class="social-links">
        <a 
          v-for="link in socialLinks" 
          :key="link.name"
          :href="link.url" 
          class="social-link glass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon">{{ link.icon }}</span>
          {{ link.name }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 2rem;
  margin-top: 2rem;
  text-align: center;
}

h2 {
  background: linear-gradient(135deg, #42b883, #347474);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  display: inline-block;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    rgba(66, 184, 131, 0.5),
    transparent
  );
}

.contact-info p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
  letter-spacing: 0.5px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  color: #42b883;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(66, 184, 131, 0.05),
    transparent
  );
  transition: 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  color: #347474;
}

.icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-link:hover .icon {
  transform: scale(1.2) rotate(5deg);
}

@media (max-width: 768px) {
  .social-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-link {
    width: 100%;
    justify-content: center;
  }
}
</style>