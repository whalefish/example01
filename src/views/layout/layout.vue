<template>
    <div class="layout">
        <div class="topbar">
            
        </div>
        <div class="main-content">
            <router-view>
                <component :is="Component" :key="$route.name"></component>
            </router-view>
            <div class="footer">
                Fish 著作權所有 © 2024
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.layout {
    height: 100vh;
    position: relative;
}

.main-content {
    height: calc(100vh - $topbar-hasPicture-height);
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