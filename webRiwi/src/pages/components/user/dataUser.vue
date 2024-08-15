<template>
    <div class="user-profile">
      <div class="section">
        <h4>ABOUT</h4>
        <div class="info-item">
          <i class="icon-user"></i>
          <span><i class="fa-solid fa-user"></i> Full Name: <strong>{{ user.fullName }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-status"></i>
          <span><i class="fa-solid fa-check"></i>Status: <strong>{{ user.status }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-role"></i>
          <span><i class="fa-solid fa-crown"></i> Role: <strong>{{ user.role }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-country"></i>
          <span><i class="fa-solid fa-flag"></i> Country: <strong>{{ user.country }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-language"></i>
          <span><i class="fa-solid fa-language"></i>Language: <strong>{{ user.language }}</strong></span>
        </div>
      </div>
  
      <div class="section">
        <h4>CONTACTS</h4>
        <div class="info-item">
          <i class="icon-phone"></i>
          <span><i class="fa-solid fa-phone"></i> Contact: <strong>{{ user.contact.phone }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-skype"></i>
          <span><i class="fa-brands fa-skype"></i> Skype: <strong>{{ user.contact.skype }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-email"></i>
          <span><i class="fa-solid fa-envelope"></i> Email: <strong>{{ user.contact.email }}</strong></span>
        </div>
      </div>
  
      <div class="section">
        <h4>TEAMS</h4>
        <div class="info-item" v-for="(team, index) in user.teams" :key="index">
          <i class="icon-team"></i>
          <span>{{ team.name }} ({{ team.members }} Members)</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'dataUser',
    data() {
      return {
        user: {
          fullName: 'Harol Chaverra',
          status: 'active',
          role: 'Developer',
          country: 'COL',
          language: 'English',
          contact: {
            phone: '(+57) 456-7890',
            skype: 'hchav.doe',
            email: 'chaverra12@example.com'
          },
          teams: [
            { name: 'Backend Developer', members: 126 },
            { name: 'VueJS Developer', members: 98 }
          ]
        }
      };
    }
  };
  </script>

<style scoped lang="scss">
.user-profile {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.274) !important;
  color: #333;
  width: 400px;

  .section {
    margin-bottom: 20px;

    h4 {
      font-size: 14px;
      color: #888;
      margin-bottom: 12px;
    }

    .info-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      i {
        font-size: 16px;
        margin-right: 12px;
        color: #7367f0; 
      }

      span {
        font-size: 14px;
        color: #333;
      }

      strong {
        font-weight: bold;
        color: #00000073;
      }
    }
  }
}
</style>
