<template>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="project-header">
          <div class="icon">
            <i :class="project.icon"></i>
          </div>
          <div class="project-info">
            <h4>{{ project.title }}</h4>
            <p>Client: {{ project.client }}</p>
          </div>
          <div class="menu">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div class="budget-info">
          <p>
            <span class="budget">{{ project.currentBudget }}</span> / {{ project.totalBudget }}
          </p>
          <p class="subtext">Total Budget</p>
        </div>
        <div class="dates-info">
          <p>Start Date: {{ project.startDate }}</p>
          <p>Deadline: {{ project.deadline }}</p>
        </div>
        <p class="description">{{ project.description }}</p>
        <div class="progress-info">
          <p>All Hours: {{ project.allHoursCompleted }}/{{ project.allHoursTotal }}</p>
          <span class="days-left">{{ project.daysLeft }} Days left</span>
          <p>Task: {{ project.taskCompleted }}/{{ project.taskTotal }}</p>
          <div class="progress-bar">
            <div class="progress" :style="{ width: project.progress + '%' }"></div>
          </div>
          <p class="progress-text">{{ project.progress }}% Completed</p>
        </div>
        <div class="project-footer">
          <div class="members">
            <img v-for="(member, index) in project.members" :key="index" :src="member.avatar" :alt="member.name" />
            <span>{{ project.memberCount }} members</span>
          </div>
          <div class="comments">
            <i class="fas fa-comment"></i>
            <span>{{ project.commentsCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListProyectCards',
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style lang="scss">
  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .project-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    width: 100%;
  
    .project-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
  
      .icon {
        i {
          font-size: 24px;
          color: #555;
        }
      }
  
      .project-info {
        flex-grow: 1;
        margin-left: 10px;
  
        h4 {
          margin: 0;
          font-size: 18px;
        }
  
        p {
          margin: 0;
          font-size: 14px;
          color: gray;
        }
      }
  
      .menu {
        cursor: pointer;
      }
    }
  
    .budget-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
  
      .budget {
        font-size: 16px;
        font-weight: bold;
      }
  
      .subtext {
        color: gray;
        font-size: 12px;
        margin-top: 3px;
      }
    }
  
    .dates-info {
      margin-bottom: 15px;
  
      p {
        margin: 0;
        font-size: 14px;
        color: gray;
      }
    }
  
    .description {
      font-size: 14px;
      color: gray;
      margin-bottom: 15px;
    }
  
    .progress-info {
      margin-bottom: 15px;
  
      .days-left {
        background-color: #e0f7e0;
        color: #3cb371;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 12px;
        margin-top: 5px;
        display: inline-block;
      }
  
      .progress-bar {
        background-color: #f0f0f0;
        border-radius: 10px;
        height: 8px;
        overflow: hidden;
        margin: 10px 0;
  
        .progress {
          background-color: #6b47dc;
          height: 100%;
          border-radius: 10px;
        }
      }
  
      .progress-text {
        font-size: 12px;
        color: gray;
      }
    }
  
    .project-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      .members {
        display: flex;
        align-items: center;
  
        img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          margin-right: -8px;
        }
  
        span {
          font-size: 14px;
          color: gray;
          margin-left: 10px;
        }
      }
  
      .comments {
        display: flex;
        align-items: center;
  
        i {
          font-size: 16px;
          color: gray;
        }
  
        span {
          font-size: 14px;
          color: gray;
          margin-left: 5px;
        }
      }
    }
  }
  
  @media (max-width: 600px) {
    .project-card {
      padding: 15px;
    }
  }
  </style>
  