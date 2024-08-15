<template>
    <div class="project-list">
      <div class="table-header">
        <h3>Project List</h3>
        <input type="text" placeholder="Search Project" v-model="searchQuery" />
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>PROJECT</th>
            <th>LEADER</th>
            <th>TEAM</th>
            <th>PROGRESS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in filteredProjects" :key="index">
            <td><input type="checkbox" /></td>
            <td>
              <div class="project-info">
                <img :src="project.icon" alt="Project Icon" />
                <div>
                  <div class="project-name">{{ project.name }}</div>
                  <div class="project-type">{{ project.type }}</div>
                </div>
              </div>
            </td>
            <td>{{ project.leader }}</td>
            <td>
              <div class="team-members">
                <img v-for="(member, idx) in project.team" :key="idx" :src="member.avatar" :alt="member.name" />
                <span v-if="project.team.length > 3">+{{ project.team.length - 3 }}</span>
              </div>
            </td>
            <td>
              <div class="progress">
                <div class="progress-bar" :style="{ width: project.progress + '%' }"></div>
              </div>
              <span>{{ project.progress }}%</span>
            </td>
            <td><button @click="handleAction">...</button></td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">«</button>
        <span>{{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">»</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListProyect",
    data() {
      return {
        searchQuery: "",
        currentPage: 1,
        itemsPerPage: 5,
        projects: [
          {
            icon: "https://th.bing.com/th/id/R.d6881ae716771c27046ab721b1b522a2?rik=aoW60Lnm1FP8vg&pid=ImgRaw&r=0",
            name: "BGC eCommerce App",
            type: "React Project",
            leader: "Eileen",
            team: [
              { avatar: "https://th.bing.com/th/id/R.cd486d08ca9fd5fb3eb9e24c78400332?rik=H6OBGFx7G%2bwGQw&pid=ImgRaw&r=0", name: "John" },
              { avatar: "https://th.bing.com/th/id/R.0b502163be32783eb1a8afd78779171b?rik=hJH5DpLJ2gkdKg&riu=http%3a%2f%2fwww.brainbows.com%2fimages%2fteam%2fJF3.jpg&ehk=zfIA6nSrlU4Y202sRq%2bqsClkpySVNRBN7OIi0lmJM8M%3d&risl=&pid=ImgRaw&r=0", name: "Jane" },
              { avatar: "https://th.bing.com/th/id/OIF.CvV7XjFL7udxchu0seHHAg?rs=1&pid=ImgDetMain", name: "Doe" },
            ],
            progress: 78,
          },
        ],
      };
    },
    computed: {
      filteredProjects() {
        let filtered = this.projects.filter(project =>
          project.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        return filtered.slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage
        );
      },
      totalPages() {
        return Math.ceil(this.projects.length / this.itemsPerPage);
      },
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      handleAction() {
      },
    },
  };
  </script>
  <style scoped lang="scss">
  .project-list {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.274) !important;
    padding: 16px;
  
    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
  
      h3 {
        margin: 0;
      }
  
      input[type="text"] {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
  
      th,
      td {
        padding: 12px;
        text-align: left;
      }
  
      th {
        background-color: #f5f5f5;
      }
  
      tbody tr {
        border-bottom: 1px solid #eee;
  
        &:hover {
          background-color: #f9f9f9;
        }
      }
  
      .project-info {
        display: flex;
        align-items: center;
  
        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
  
        .project-name {
          font-weight: bold;
        }
  
        .project-type {
          font-size: 12px;
          color: #888;
        }
      }
  
      .team-members {
        display: flex;
        align-items: center;
  
        img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 4px;
        }
  
        span {
          font-size: 12px;
          color: #888;
          margin-left: 4px;
        }
      }
  
      .progress {
        background-color: #eee;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 4px;
  
        .progress-bar {
          background-color: #7367f0;
          height: 6px;
          transition: width 0.3s;
        }
      }
    }
  
    .pagination {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 16px;
  
      button {
        padding: 8px 12px;
        border: none;
        background-color: #7367f0;
        color: #fff;
        border-radius: 4px;
        margin: 0 4px;
        cursor: pointer;
  
        &:disabled {
          background-color: #ddd;
          cursor: not-allowed;
        }
      }
  
      span {
        margin: 0 8px;
      }
    }
  }
  </style>
  