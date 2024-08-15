<template>
    <div class="user-profile">
      <div class="section">
        <h4>Overview</h4>
        <div class="info-item">
          <i class="icon-user"></i>
          <span><i class="fa-solid fa-code"></i> Task compiled <strong>{{ user.Taskcompiled }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-status"></i>
          <span><i class="fa-solid fa-users"></i> conections <strong>{{ user.conections }}</strong></span>
        </div>
        <div class="info-item">
          <i class="icon-role"></i>
          <span><i class="fa-solid fa-list"></i> Proyects compiled <strong>{{ user.Proyectscompiled }}</strong></span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MoredataUser',
    data() {
      return {
        user: {
            Taskcompiled : '13.5k',
            conections: '879',
            Proyectscompiled : '146'
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
