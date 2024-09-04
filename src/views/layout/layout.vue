<template>
    <div class="layout">
        <div class="topbar">
            <router-link :to="url.home.path">Home</router-link>
            <router-link :to="url.demo.path">Demo</router-link>
        </div>
        <div class="main-content">
            <!-- <router-view>
                <component :is="Component" :key="$route.name"></component>
            </router-view> -->
            <home></home>
            <div class="footer">
                Fish 著作權所有 © 2024
            </div>
        </div>
    </div>
</template>
<script setup>
import home from '@/views/home/home.vue';
import url from '@/router/url';
</script>
<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
}

.topbar {
    display: flex;
    gap: 10px;
}

.main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .view {
        flex-grow: 1;
    }

    .footer {
        text-align: center;
        padding: 16px 0;
        font-size: $font-size-12;
        color: $white;
        background-color: $black;
    }
}
</style>