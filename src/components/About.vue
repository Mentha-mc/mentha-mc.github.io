<script setup lang="ts">
const skills = [
  { name: 'Frontend', items: ['Vue.js', 'React', 'TypeScript'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'Go'] },
  { name: 'DevOps', items: ['Docker', 'Git', 'CI/CD'] }
]
</script>

<template>
  <section class="about">
    <h2>About Me</h2>
    <div class="content">
      <p>你好！我是 Mentha，一名全栈开发者。我热衷于构建优雅的解决方案和探索新技术。</p>
      
      <div class="skills glass">
        <h3>Technical Skills</h3>
        <div class="skills-grid">
          <div v-for="category in skills" :key="category.name" class="skill-category glass">
            <h4>{{ category.name }}</h4>
            <ul>
              <li v-for="item in category.items" :key="item">
                <span class="skill-dot"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="interests glass">
        <h3>What I Do</h3>
        <ul>
          <li>
            <span class="interest-icon">💻</span>
            Full Stack Development
          </li>
          <li>
            <span class="interest-icon">🚀</span>
            System Architecture
          </li>
          <li>
            <span class="interest-icon">🛠️</span>
            Open Source Contribution
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 0;
}

h2 {
  background: linear-gradient(135deg, #42b883, #347474);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
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

.content {
  max-width: 800px;
  margin: 0 auto;
}

p {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
  letter-spacing: 0.5px;
}

.skills {
  margin-bottom: 2rem;
  padding: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.skill-category {
  padding: 1.5rem;
}

.skill-category h4 {
  color: #42b883;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  position: relative;
}

.skill-category h4::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    #42b883,
    transparent
  );
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  margin: 0.8rem 0;
  color: #666;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.skill-category li:hover {
  background: rgba(66, 184, 131, 0.05);
  transform: translateX(5px);
}

.skill-dot {
  width: 6px;
  height: 6px;
  background: #42b883;
  border-radius: 50%;
  position: relative;
}

.skill-dot::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: rgba(66, 184, 131, 0.3);
  opacity: 0;
  transition: all 0.3s ease;
}

.skill-category li:hover .skill-dot::after {
  opacity: 1;
  transform: scale(1.5);
}

.interests {
  margin-top: 2rem;
  padding: 2rem;
}

h3 {
  color: #42b883;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    rgba(66, 184, 131, 0.5),
    transparent
  );
}

.interests ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.interests li {
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-radius: 1rem;
  border: 1px solid rgba(66, 184, 131, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.interests li::before {
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

.interests li:hover::before {
  left: 100%;
}

.interests li:hover {
  transform: translateY(-3px);
  border-color: rgba(66, 184, 131, 0.2);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.1);
}

.interest-icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.interests li:hover .interest-icon {
  transform: scale(1.2) rotate(5deg);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .interests ul {
    flex-direction: column;
    gap: 1rem;
  }
  
  .interests li {
    width: 100%;
    justify-content: center;
  }
}
</style>