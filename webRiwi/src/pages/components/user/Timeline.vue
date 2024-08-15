<template>
    <div class="activity-timeline">
      <div class="activity-item" v-for="(item, index) in activities" :key="index">
        <div class="activity-badge" :class="item.color"></div>
        <div class="activity-details">
          <div class="activity-title">{{ item.title }}</div>
          <div class="activity-description">{{ item.description }}</div>
          <div v-if="item.attachment" class="activity-attachment">
            <a :href="item.attachment.link">{{ item.attachment.name }}</a>
          </div>
          <div class="activity-time">{{ item.time }}</div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "Timeline",
    data() {
      return {
        activities: [
          {
            color: "purple",
            title: "12 Invoices have been paid",
            description: "Invoices have been paid to the company",
            attachment: {
              name: "invoice.pdf",
              link: "#",
            },
            time: "12 min ago",
          },
          {
            color: "green",
            title: "Client Meeting",
            description: "Project meeting with John @10:15am",
            attachment: null,
            time: "45 min ago",
          },
          {
            color: "blue",
            title: "Create a new project for client",
            description: "6 team members in a project",
            attachment: null,
            time: "2 Days Ago",
          },
        ],
      };
    },
  };
</script>
  
<style scoped lang="scss">
.activity-timeline {
  background-color: #f9f9f9;
  padding: 16px;
  width: 100%;
 
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.205);

  .activity-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;

    .activity-badge {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 16px;

      &.purple {
        background-color: #7367f0;
      }
      &.green {
        background-color: #28c76f;
      }
      &.blue {
        background-color: #00cfe8;
      }
    }

    .activity-details {
      .activity-title {
        font-weight: bold;
        margin-bottom: 4px;
        font-size: 16px;
      }

      .activity-description {
        font-size: 14px;
        margin-bottom: 8px;
      }

      .activity-attachment {
        margin-bottom: 8px;

        a {
          color: #ea5455;
          text-decoration: none;
          font-weight: bold;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .activity-time {
        font-size: 12px;
        color: #b9b9c3;
        position: relative;
        width: 200px;
  
        
      }
    }
  }
}
</style>