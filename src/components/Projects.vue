<script setup lang="ts">
const projects = [
  {
    title: '智能家居控制系统',
    description: '基于Vue3和WebSocket的实时控制系统，支持多设备管理和场景联动',
    tech: ['Vue3', 'TypeScript', 'WebSocket', 'Node.js'],
    image: '/projects/smart-home.jpg',
    link: '#'
  },
  {
    title: '数据可视化平台',
    description: '企业级数据分析和可视化平台，支持多维度数据展示和实时监控',
    tech: ['React', 'D3.js', 'GraphQL', 'PostgreSQL'],
    image: '/projects/data-vis.jpg',
    link: '#'
  },
  {
    title: '微服务架构系统',
    description: '基于Go的微服务架构，包含服务发现、负载均衡和监控告警等功能',
    tech: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
    image: '/projects/microservice.jpg',
    link: '#'
  }
]
</script>

<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projects-grid">
      <article 
        v-for="project in projects" 
        :key="project.title" 
        class="project-card"
      >
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
          <div class="tech-stack">
            <span 
              v-for="tech in project.tech" 
              :key="tech" 
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <a :href="project.link" class="view-project" target="_blank" rel="noopener noreferrer">
            查看项目
            <span class="arrow">→</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 4rem 0;
}

h2 {
  background: linear-gradient(135deg, #42b883, #347474);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.project-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(66, 184, 131, 0.1);
  box-shadow: 
    0 4px 24px -8px rgba(0, 0, 0, 0.05),
    0 2px 16px -4px rgba(66, 184, 131, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(66, 184, 131, 0.2);
  box-shadow: 
    0 8px 32px -8px rgba(0, 0, 0, 0.08),
    0 4px 24px -4px rgba(66, 184, 131, 0.08);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-weight: 600;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(66, 184, 131, 0.08);
  color: #42b883;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(66, 184, 131, 0.1);
}

.tech-tag:hover {
  background: rgba(66, 184, 131, 0.12);
  transform: translateY(-2px);
  border-color: rgba(66, 184, 131, 0.2);
}

.view-project {
  color: #42b883;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: auto;
  padding: 0.5rem 0;
  position: relative;
}

.view-project::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #42b883, #347474);
  transition: width 0.3s ease;
}

.arrow {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.view-project:hover {
  color: #347474;
}

.view-project:hover::after {
  width: 100%;
}

.view-project:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    padding: 1.5rem;
  }
}
</style>