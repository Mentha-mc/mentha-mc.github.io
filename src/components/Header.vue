<script setup lang="ts">
const avatarUrl = '/icon.png'
</script>

<template>
  <header class="header">
    <div class="avatar-wrapper">
      <div class="avatar-glow"></div>
      <div class="avatar-container glass">
        <div class="avatar">
          <img :src="avatarUrl" alt="Mentha's avatar" class="avatar-image" />
          <div class="avatar-overlay"></div>
        </div>
      </div>
    </div>
    <h1>Mentha</h1>
    <p class="subtitle">Full Stack Developer</p>
    <div class="header-decoration">
      <div class="line"></div>
      <div class="dot"></div>
      <div class="line"></div>
    </div>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
  padding: 3rem 0;
  position: relative;
}

.avatar-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto 2rem;
}

.avatar-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at center, 
    rgba(66, 184, 131, 0.15) 0%,
    rgba(66, 184, 131, 0.1) 30%,
    transparent 70%
  );
  animation: pulse 4s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}

.avatar-container {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  padding: 0.5rem;
  animation: float 6s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

.avatar-container::before,
.avatar-container::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #42b883, #347474);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar-container::after {
  background: linear-gradient(135deg, #42b883, #347474);
  filter: blur(5px);
  z-index: -1;
}

.avatar-container:hover::before,
.avatar-container:hover::after {
  opacity: 1;
  transform: scale(1.05);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #42b883, #347474);
}

.avatar-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(66, 184, 131, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 2;
}

.avatar:hover .avatar-overlay {
  opacity: 1;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  filter: saturate(1.1);
}

.avatar:hover .avatar-image {
  transform: scale(1.1) rotate(2deg);
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #42b883 20%, #347474 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 30px rgba(66, 184, 131, 0.2);
}

h1::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(90deg, 
    transparent,
    #42b883,
    #347474,
    #42b883,
    transparent
  );
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

h1:hover::after {
  transform: scaleX(1);
}

.subtitle {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #666, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 300;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.6s;
}

.line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    rgba(66, 184, 131, 0.5),
    transparent
  );
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header:hover .line {
  width: 80px;
  background: linear-gradient(90deg, 
    transparent,
    rgba(66, 184, 131, 0.8),
    transparent
  );
}

.dot {
  width: 6px;
  height: 6px;
  background: #42b883;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.dot::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: rgba(66, 184, 131, 0.3);
  opacity: 0;
  transition: all 0.4s ease;
}

.header:hover .dot {
  transform: scale(1.2);
}

.header:hover .dot::after {
  opacity: 1;
  transform: scale(1.5);
}
</style>