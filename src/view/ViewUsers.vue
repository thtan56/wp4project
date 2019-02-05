<template>
  <div>
    <h3>View Users</h3>
    <usertable></usertable>
  </div>
</template>
<script>
import usertable from '@/components/UserTable';
export default { 
  name: 'ViewUsers',
  components: { usertable }  
}
</script>
