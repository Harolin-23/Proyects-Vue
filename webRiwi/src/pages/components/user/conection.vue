<template>
    <div class="connection-list">
      <h3>Connection</h3>
      <div v-for="(connection, index) in connections" :key="index" class="connection-item">
        <div class="avatar">
          <img :src="connection.imageUrl" alt="Avatar" />
        </div>
        <div class="info">
          <h4>{{ connection.name }}</h4>
          <p>{{ connection.connectionCount }} Connections</p>
        </div>
        <button class="action-button" @click="toggleConnection(index)">
          <i :class="['fas', connection.isConnected ? 'fa-user-minus' : 'fa-user-plus']"></i>
        </button>
      </div>
      <a href="#" class="view-all">View all connections</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        connections: [
          {
            name: "Cecilia Payne",
            connectionCount: 45,
            imageUrl: "https://th.bing.com/th/id/OIF.CvV7XjFL7udxchu0seHHAg?rs=1&pid=ImgDetMain",
            isConnected: false,
          },
          {
            name: "Curtis Fletcher",
            connectionCount: 1320,
            imageUrl: "https://d2r55xnwy6nx47.cloudfront.net/uploads/2019/07/Olivier_1500_Trptch.jpg",
            isConnected: true,
          },
          {
            name: "Alice Stone",
            connectionCount: 125,
            imageUrl: "https://th.bing.com/th/id/OIP.SWK8fz4QyH_JCef94HoJJAHaLH?rs=1&pid=ImgDetMain",
            isConnected: false,
          },
          {
            name: "Darrell Barnes",
            connectionCount: 456,
            imageUrl: "https://th.bing.com/th/id/R.0b502163be32783eb1a8afd78779171b?rik=hJH5DpLJ2gkdKg&riu=http%3a%2f%2fwww.brainbows.com%2fimages%2fteam%2fJF3.jpg&ehk=zfIA6nSrlU4Y202sRq%2bqsClkpySVNRBN7OIi0lmJM8M%3d&risl=&pid=ImgRaw&r=0",
            isConnected: true,
          },
          {
            name: "Eugenia Moore",
            connectionCount: 1200,
            imageUrl: "https://th.bing.com/th/id/R.cd486d08ca9fd5fb3eb9e24c78400332?rik=H6OBGFx7G%2bwGQw&pid=ImgRaw&r=0",
            isConnected: true,
          },
        ],
      };
    },
    methods: {
      toggleConnection(index) {
        this.connections[index].isConnected = !this.connections[index].isConnected;
      },
    },
  };
  </script>
  
  <style lang="scss">
  .connection-list {
    width: 50%;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.274) !important;

 
  
    h3 {
      margin-bottom: 20px;
      font-size: 18px;
      color: #333;
    }
  
    .connection-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
  
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
  
      .action-button {
        background: none;
        border: none;
        color: #6b47dc;
        cursor: pointer;
        font-size: 20px;
  
        &:hover {
          color: #3b2db0;
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
  

  
  </style>
  