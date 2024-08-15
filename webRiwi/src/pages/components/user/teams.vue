<template>
    <div class="team-list">
      <h3>Teams</h3>
      <div v-for="(team, index) in teams" :key="index" class="team-item">
        <div class="avatar">
          <img :src="team.iconUrl" alt="Icon" />
        </div>
        <div class="info">
          <h4>{{ team.name }}</h4>
          <p>{{ team.members }} Members</p>
        </div>
        <span :class="['category', team.categoryClass]">{{ team.category }}</span>
      </div>
      <a href="#" class="view-all">View all Teams</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'teamsComp',
    data() {
      return {
        teams: [
          {
            name: "React Developers",
            members: 72,
            iconUrl: "https://via.placeholder.com/40",
            category: "Developer",
            categoryClass: "developer"
          },
          {
            name: "Support Team",
            members: 122,
            iconUrl: "https://via.placeholder.com/40",
            category: "Support",
            categoryClass: "support"
          },
          {
            name: "UI Designer",
            members: 7,
            iconUrl: "https://via.placeholder.com/40",
            category: "Designer",
            categoryClass: "designer"
          },
          {
            name: "Vue.js Developers",
            members: 289,
            iconUrl: "https://via.placeholder.com/40",
            category: "Developer",
            categoryClass: "developer"
          },
          {
            name: "Digital Marketing",
            members: 24,
            iconUrl: "https://via.placeholder.com/40",
            category: "Marketing",
            categoryClass: "marketing"
          }
        ]
      };
    }
  };
  </script>
  
  <style lang="scss">
  .team-list {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 50%;

  
    h3 {
      margin-bottom: 20px;
      font-size: 18px;
      color: #333;
    }
  
    .team-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
 
  
      .avatar {
        img {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
      }
  
      .info {
        flex-grow: 1;
        margin-left: 10px;
  
        h4 {
          margin: 0;
          font-size: 16px;
        }
  
        p {
          margin: 0;
          font-size: 14px;
          color: gray;
        }
      }
  
      .category {
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
  
        &.developer {
          background-color: #ffcccb;
          color: #d9534f;
        }
  
        &.support {
          background-color: #e6e9ff;
          color: #4955f8;
        }
  
        &.designer {
          background-color: #ccf9eb;
          color: #30c39e;
        }
  
        &.marketing {
          background-color: #e0e0e0;
          color: #666;
        }
      }
    }
  
    .view-all {
      display: block;
      text-align: center;
      margin-top: 15px;
      color: #6b47dc;
      text-decoration: none;
  
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  @media only screen and (max-width: 600px) {
    .team-list {
      max-width: 100%;
      padding: 15px;
    }
  
    .team-item .info {
      h4 {
        font-size: 14px;
      }
  
      p {
        font-size: 12px;
      }
    }
  
    .category {
      font-size: 11px;
      padding: 4px 8px;
    }
  }
  </style>
  