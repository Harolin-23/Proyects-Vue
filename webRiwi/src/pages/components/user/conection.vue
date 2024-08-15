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
            imageUrl: "https://via.placeholder.com/40",
            isConnected: false,
          },
          {
            name: "Curtis Fletcher",
            connectionCount: 1320,
            imageUrl: "https://via.placeholder.com/40",
            isConnected: true,
          },
          {
            name: "Alice Stone",
            connectionCount: 125,
            imageUrl: "https://via.placeholder.com/40",
            isConnected: false,
          },
          {
            name: "Darrell Barnes",
            connectionCount: 456,
            imageUrl: "https://via.placeholder.com/40",
            isConnected: true,
          },
          {
            name: "Eugenia Moore",
            connectionCount: 1200,
            imageUrl: "https://via.placeholder.com/40",
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
 
  
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
  
  @media only screen and (max-width: 600px) {
    .connection-list {
      max-width: 100%;
      padding: 15px;
    }
  
    .connection-item .info {
      h4 {
        font-size: 14px;
      }
  
      p {
        font-size: 12px;
      }
    }
  
    .action-button {
      font-size: 18px;
    }
  }
  </style>
  