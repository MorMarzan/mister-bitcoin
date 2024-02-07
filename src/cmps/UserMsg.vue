<template>
    <section v-if="msg.txt" class="user-msg">
        <p>{{msg.txt}}</p>
    </section>
</template> 

<script>
import { eventBus } from '@/services/eventBus.service'
export default {
    data() {
        return {
            msg: { txt: '', }
        }
    }, 
    methods: {
        setMsg(msg) {
            this.msg.txt = msg.txt
            setTimeout(() => this.msg.txt = '', 2000)
        }
    },
    created() {
        eventBus.on('user-msg', this.setMsg )
    }
}
</script>

<style lang="scss">
.user-msg {
    position: fixed;
    top: 140px;
    right: 2em;

    padding: 10px;
    min-width: 200px;
    background-color: lightblue;
}
</style>