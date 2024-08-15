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
            iconUrl: "https://media.sketchfab.com/models/76174ceeba96487f9863f974636f641e/thumbnails/d0782775c3a046cfb6e77273956ec12c/421dcee6756f4ab3966d219ed6e49e1d.jpeg",
            category: "Developer",
            categoryClass: "developer"
          },
          {
            name: "Support Team",
            members: 122,
            iconUrl: "https://th.bing.com/th/id/OIF.3ZIjCurp9IUTJqOtRfPRWQ?rs=1&pid=ImgDetMain",
            category: "Support",
            categoryClass: "support"
          },
          {
            name: "UI Designer",
            members: 7,
            iconUrl: "https://th.bing.com/th/id/OIP.SxsNJ5tzhgvDtIIreT1ibQHaEK?rs=1&pid=ImgDetMain",
            category: "Designer",
            categoryClass: "designer"
          },
          {
            name: "Vue.js Developers",
            members: 289,
            iconUrl: "https://th.bing.com/th/id/OIP.VjYP1UlejFM2cfE3_98E1AHaEK?rs=1&pid=ImgDetMain",
            category: "Developer",
            categoryClass: "developer"
          },
          {
            name: "Digital Marketing",
            members: 24,
            iconUrl: "https://logos-world.net/wp-content/uploads/2020/04/Twitter-Emblem.png",
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
          object-fit: cover;
          object-position: center center;
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
  